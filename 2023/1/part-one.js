import { getInputData, isNumeric, sumItemsArray } from "../utils/index.js";

const input = getInputData("./input.txt");
const getCalibrationValueFromString = (str) => {
  const symbols = str.split("");
  const firstNumber = symbols.find((item) => isNumeric(item));
  const secondNumber = symbols.findLast((item) => isNumeric(item));
  return Number(firstNumber + secondNumber);
};

const getSumCalibrationValues = (data) => {
  const calibrationValues = data.map((line) =>
    getCalibrationValueFromString(line),
  );

  return sumItemsArray(calibrationValues);
};

console.log(getSumCalibrationValues(input));
