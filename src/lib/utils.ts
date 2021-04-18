import { NodeBuilderFlags } from "typescript";
import { Vertice } from "./payloads/analysis";
import { allowedExtensions } from "./static";

export const isAllowedFile = (extension: string): boolean => {
  return allowedExtensions.includes(extension.toLowerCase());
};

export const getCanvasBorderSize = (
  vertices: Vertice[],
  size: { width: number; height: number }
) => {
  const { width, height } = size;

  const [vertice1, _, vertice3] = vertices;

  let { x: x1, y: y1 } = vertice1;
  let { x: x2, y: y2 } = vertice3;

  if (x1 >= 1) {
    return {
      x1,
      y1,
      width: x2 - x1,
      height: y2 - y1,
    };
  }

  const canvasX1 = x1 * width;
  const canvasX2 = x2 * width;

  const canvasY1 = y1 * height;
  const canvasY2 = y2 * height;

  return {
    x1: canvasX1,
    y1: canvasY1,
    width: canvasX2 - canvasX1,
    height: canvasY2 - canvasY1,
  };
};

export const checkIsNotBlank = (obj: object): boolean => {
  const propertys: string[] = Object.keys(obj);
  propertys.forEach((property: string) => {
    if (obj[property] === "") {
      throw property;
    }
  });

  return true;
};
