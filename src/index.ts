import skmeans from "skmeans";
import kmeansWasm from "kmeans-wasm";

(async () => {
  const wasmKmeansFunction = (await kmeansWasm).kmeans;
  const wasmRgbKmeansFunction = (await kmeansWasm).kmeans_rgb;

  const dataset = getMickyMouseDataset();

  const skmeansTime = Date.now();
  const resultSkmeans = skmeans(dataset, 3, null, 10000);
  document.getElementById('skmeans-result')!.innerText = `skmeans took ${Date.now() - skmeansTime}ms`;
  drawResults('skmeans', dataset, resultSkmeans.idxs);

  const kmeansWasmTime = Date.now();
  const resultKmeansWasm = wasmKmeansFunction(dataset, 3, 10000, 0.00000000001);
  document.getElementById('kmeans-wasm-result')!.innerText = `kmeans-wasm took ${Date.now() - kmeansWasmTime}ms`;
  drawResults('kmeansWasm', dataset, resultKmeansWasm.idxs);
})();

type Pixel = [x: number, y: number];

function drawResults(canvasId: string, pixels: Pixel[], idxs: number[]) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const height = canvas.height;
  const width = canvas.width;

  const ctx = canvas.getContext('2d')!;

  const leftPixel = pixels.reduce((acc, val) => val[0] < acc[0] ? val : acc);
  const rightPixel = pixels.reduce((acc, val) => val[0] > acc[0] ? val : acc);
  const topPixel = pixels.reduce((acc, val) => val[1] > acc[1] ? val : acc);
  const bottomPixel = pixels.reduce((acc, val) => val[1] < acc[1] ? val : acc);
  console.log(leftPixel, rightPixel, topPixel, bottomPixel);

  function xToCanvasX(x: number): number {
    return Math.floor(width * ((x - leftPixel[0]) / (rightPixel[0] - leftPixel[0])));
  }

  function yToCanvasY(y: number): number {
    return Math.floor(height * ((y - bottomPixel[1]) / (topPixel[1] - bottomPixel[1])));
  }

  function pixelToCanvasPixel(pixel: Pixel): Pixel {
    return [xToCanvasX(pixel[0]), yToCanvasY(pixel[1])];
  }

  function fillCanvasPixel(pixel: Pixel, color: number) {
    if (color === 0) {
      ctx.fillStyle = "red";
    } else if (color === 1) {
      ctx.fillStyle = "blue";
    } else if (color === 2) {
      ctx.fillStyle = "green";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillRect(pixel[0], pixel[1], 2, 2);
  }

  for (const [i, pixel] of pixels.entries()) {
    const canvasPixel = pixelToCanvasPixel(pixel);
    fillCanvasPixel(canvasPixel, idxs[i]);
  }
}

function getMickyMouseDataset(): Pixel[] {
  const leftUpCircle = getRandomPixelsInCircle([-1, 2], 1, 10000);
  const rightUpCircle = getRandomPixelsInCircle([1, 2], 1, 10000);
  const centreCircle = getRandomPixelsInCircle([0, 0], 2, 20000);

  return leftUpCircle.concat(rightUpCircle).concat(centreCircle);
}

function getRandomPixelsInCircle(centre: Pixel, radius: number, pixelsCount: number): Pixel[] {
  return new Array(pixelsCount).fill(0).map(() => getRandomPixelInCircle(centre, radius));
}

function getRandomPixelInCircle(centre: Pixel, radius: number): Pixel {
  const distanceToCentre = Math.random() * radius;
  const angle = Math.random() * 2 * Math.PI;
  
  // y  / distanceToCentre = sin(angle). y = distanceToCentre * sin(angle)
  const x = centre[0] + distanceToCentre * Math.sin(angle);
  const y = centre[1] + distanceToCentre * Math.cos(angle);

  return [x, y];
}
