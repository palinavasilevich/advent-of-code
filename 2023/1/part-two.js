import { getInputData, isNumeric, sumItemsArray } from "../utils/index.js";

const input = getInputData("./input.txt");

const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const getSumCalibrationValues = (data) => {
  const calibrationValues = data.map((line) => {
    let result = 0;
    let isBreak = false;
    for (let i = 0; i <= line.length; i++) {
      const currentStr = line.slice(0, i + 1);
      const item = line[i];
      if (isNumeric(item)) {
        result = item * 10;
        break;
      }

      for (let j = 0; j <= digits.length; j++) {
        if (currentStr.includes(digits[j])) {
          result = (j + 1) * 10;
          break;
        }
      }
      if (result !== 0) break;
    }

    for (let i = line.length - 1; i >= 0; i--) {
      const currentStr = line.slice(i, line.length);
      const item = line[i];
      if (isNumeric(item)) {
        result += +item;
        break;
      }
      for (let j = 0; j <= digits.length; j++) {
        if (currentStr.includes(digits[j])) {
          result += j + 1;
          isBreak = true;
          break;
        }
      }
      if (isBreak) break;
    }
    return result;
  });

  return sumItemsArray(calibrationValues);
};

console.log(getSumCalibrationValues(input));
