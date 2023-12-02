import {
  getInputData,
  multiplyItemsArray,
  sumItemsArray,
} from "../utils/index.js";

const input = getInputData("./input.txt");

const getFewestNumberOfCubesInTheBag = () => {
  return input.map((line) => {
    const gameStr = line.split(":")[1];
    const gameRounds = gameStr
      .split(";")
      .map((item) => item.split(",").map((r) => r.trim()));
    const maxAmountCubes = {};

    for (let i = 0; i < gameRounds.length; i++) {
      const round = gameRounds[i];
      for (let j = 0; j < round.length; j++) {
        const [amountCubes, colorCubes] = round[j].split(" ");
        if (maxAmountCubes[colorCubes]) {
          if (amountCubes > maxAmountCubes[colorCubes]) {
            maxAmountCubes[colorCubes] = +amountCubes;
          }
        } else {
          maxAmountCubes[colorCubes] = +amountCubes;
        }
      }
    }
    return multiplyItemsArray(Object.values(maxAmountCubes));
  });
};

const sumFewestNumberOfCubesInTheBag = sumItemsArray(
  getFewestNumberOfCubesInTheBag(),
);
console.log(sumFewestNumberOfCubesInTheBag);
