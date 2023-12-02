import { readFileSync } from "node:fs";

export const getInputData = (filePath) => {
  return readFileSync(filePath, { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");
};

export const isNumeric = (n) => !isNaN(parseInt(n));
export const sumItemsArray = (arr) => arr.reduce((sum, val) => sum + val, 0);
export const multiplyItemsArray = (arr) =>
  arr.reduce((mult, val) => mult * val, 1);
