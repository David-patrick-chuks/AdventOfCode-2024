import { readFileSync } from 'node:fs';

const data = readFileSync('./inputs/day02.txt', 'utf8').trimEnd();

function evaluatePart(data, stage) {
  function isSequenceSafe(numbers, errorCount = 0) {
    const isIncreasing = numbers[1] > numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      const currentNum = numbers[i];
      const previousNum = numbers[i - 1];
      if (
        isIncreasing
          ? currentNum <= previousNum || currentNum - 3 > previousNum
          : currentNum >= previousNum || currentNum + 3 < previousNum
      ) {
        if (stage === 1 || errorCount === 1) {
          return false;
        }
        const modified1 = numbers.toSpliced(i - 1, 1);
        const modified2 = numbers.toSpliced(i, 1);
        const modified3 = numbers.toSpliced(0, 1);
        return isSequenceSafe(modified1, 1) || isSequenceSafe(modified2, 1) || isSequenceSafe(modified3, 1);
      }
    }
    return true;
  }

  const lines = data.split('\n');
  let validCount = 0;
  for (let line of lines) {
    const numbers = line.split(' ').map(Number);
    validCount += +isSequenceSafe(numbers);
  }
  console.log(validCount);
}
evaluatePart(data, 1);
evaluatePart(data, 2);
