import { getInputData, sumItemsArray } from "../utils/index.js";

const input = getInputData("./input.txt");

const amountOfCubesInTheBag = {
  red: 12,
  green: 13,
  blue: 14,
};

const getNumbersOfPossibleGames = () => {
  return input
    .map((line) => {
      const [numberGameStr, gameStr] = line.split(":");
      const numberGame = +numberGameStr.slice(5);
      let isBreak = false;
      const gameRounds = gameStr
        .split(";")
        .map((item) => item.split(",").map((r) => r.trim()));

      for (let i = 0; i < gameRounds.length; i++) {
        const round = gameRounds[i];
        for (let j = 0; j < round.length; j++) {
          const [amountCubes, colorCubes] = round[j].split(" ");
          if (amountCubes > amountOfCubesInTheBag[colorCubes]) {
            isBreak = true;
            break;
          }
        }
      }

      if (!isBreak) return numberGame;
    })
    .filter((n) => n);
};

const sumOfPossibleGames = sumItemsArray(getNumbersOfPossibleGames());
console.log(sumOfPossibleGames);
