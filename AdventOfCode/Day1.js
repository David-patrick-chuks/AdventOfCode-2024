import { readFileSync } from 'node:fs';

const fileContent = readFileSync('./inputs/day01.txt', 'utf8').trimEnd();

function computePart1(fileContent) {
  const lines = fileContent.split('\n');
  const leftValues = [];
  const rightValues = [];
  for (const line of lines) {
    const [left, right] = line.split(/\s+/);
    leftValues.push(+left);
    rightValues.push(+right);
  }
  leftValues.sort((a, b) => a - b);
  rightValues.sort((a, b) => a - b);
  let totalSum = 0;
  for (let i = 0; i < leftValues.length; i++) {
    totalSum += Math.abs(leftValues[i] - rightValues[i]);
  }
  console.log(totalSum);
}
computePart1(fileContent);

function computePart2(fileContent) {
  const lines = fileContent.split('\n');
  const leftValues = [];
  const rightCount = {};
  for (const line of lines) {
    const [left, right] = line.split(/\s+/);
    leftValues.push(+left);
    rightCount[right] ??= 0;
    rightCount[right]++;
  }
  let totalSum = 0;
  for (let i = 0; i < leftValues.length; i++) {
    const value = leftValues[i];
    totalSum += value * (rightCount[value] ?? 0);
  }
  console.log(totalSum);
}
computePart2(fileContent);
