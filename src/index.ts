import skmeans from "skmeans";
import kmeansWasm from "kmeans-wasm";

const kTests = [2, 10, 50];
const dimensionsTests = [3, 10, 50];
const dataSize = 10000;
const maxIterations = 1000;

interface ITestResult {
  k: number;
  dimensions: number;
  avarageTime: number;
}

(async () => {
  const wasmKmeansFunction = (await kmeansWasm).kmeans;
  const wasmRgbKmeansFunction = (await kmeansWasm).kmeans_rgb;

  const testsData: {
    k: number;
    dimensions: number;
    data: number[][];
  }[] = kTests.map(k =>
    dimensionsTests.map(dimensions => {
      return {
        k,
        dimensions,
        data: generateData(dataSize, dimensions),
      };
    })
  ).flat();

  const skmeansResults: ITestResult[] = testsData.map(({ k, dimensions, data }) => ({
    k,
    dimensions,
    avarageTime: test(skmeans, 10, data, k, undefined, maxIterations),
  }));

  const kmeansWasmResults: ITestResult[] = testsData.map(({ k, dimensions, data }) => ({
    k,
    dimensions,
    avarageTime: test(wasmKmeansFunction, 10, data, k, maxIterations),
  }));

  // Update the results table
  const resultsTable = document.getElementById("results-table");
  if (resultsTable) {
    resultsTable.innerHTML += `
      <h2>skmeans (data size - ${dataSize}, max iterations: ${maxIterations})</h2>
      ${generateTable(skmeansResults)}
      <h2>kmeans (data size - ${dataSize}, max iterations: ${maxIterations})</h2>
      ${generateTable(kmeansWasmResults)}
    `;
  }

  // Download the image
  const image = new Image();
  image.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80";
  image.crossOrigin = "Anonymous";
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx!.drawImage(image, 0, 0);

    const imageData = ctx!.getImageData(0, 0, 300, 300);
    const rgbaData = imageData.data;

    const rgbPointsData: number[][] = [];
    for (let i = 0; i < rgbaData.length; i += 4) {
      rgbPointsData.push([rgbaData[i], rgbaData[i + 1], rgbaData[i + 2]]);
    }

    const skmeansRGBresult = kTests.map(k => ({
      k,
      dimensions: 3,
      avarageTime: test(skmeans, 2, rgbPointsData, k, undefined, maxIterations),
    }));

    const rgbData: number[] = [];
    for (let i = 0; i < rgbaData.length; i += 4) {
      rgbData.push(rgbaData[i], rgbaData[i + 1], rgbaData[i + 2]);
    }
    const rgbUint8Array = new Uint8Array(rgbData);

    const kmeansWasmRGBresult = kTests.map(k => ({
      k,
      dimensions: 3,
      avarageTime: test(wasmRgbKmeansFunction, 2, rgbUint8Array, k, maxIterations),
    }));

    // Update the results table
    if (resultsTable) {
      resultsTable.innerHTML += `
      <h2>skmeans RGB</h2>
      ${generateTable(skmeansRGBresult)}
      <h2>kmeans RGB</h2>
      ${generateTable(kmeansWasmRGBresult)}
      `;
    }
  };
})();

function test<Fn extends (...args: Args) => Res, Args extends unknown[], Res>(fn: Fn, times: number, ...args: Args): number {
  let sum = 0;
  for (let i = 0; i < times; i++) {
    const start = performance.now();
    const res = fn(...args);
    sum += performance.now() - start;
    console.log((res as any)[0]?.toString());
  }

  return sum / times;
}

// Replace this function with your data generation function or provide a fixed dataset
function generateData(size: number, dimensions: number): number[][] {
  return new Array(size)
    .fill(0)
    .map(() =>
      new Array(dimensions)
        .fill(0)
        .map(() => Math.random())
    );
}

function generateTable(data: ITestResult[]) {
  const kValues = Array.from(new Set(data.map((item) => item.k))).sort((a, b) => a - b);
  const dimensionValues = Array.from(new Set(data.map((item) => item.dimensions))).sort((a, b) => a - b);

  let table = `
    <table>
      <thead>
        <tr>
          <th>Dimensions \\ k</th>
  `;

  kValues.forEach((k) => {
    table += `<th>${k}</th>`;
  });

  table += `
        </tr>
      </thead>
      <tbody>
  `;

  dimensionValues.forEach((dimension) => {
    table += `<tr><td>${dimension}</td>`;
    kValues.forEach((k) => {
      const item = data.find((item) => item.k === k && item.dimensions === dimension);
      table += `<td>${item ? item.avarageTime : ''}</td>`;
    });
    table += `</tr>`;
  });

  table += `
      </tbody>
    </table>
  `;

  return table;
}
