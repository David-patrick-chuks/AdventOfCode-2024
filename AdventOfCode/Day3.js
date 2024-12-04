import { readFileSync } from "node:fs";

var fileContent = readFileSync("./inputs/day03.txt", "utf8").trimEnd();

function computeSum(content, stage) {
  if (stage === 2) {
    content = content.replace(/don't\(\).+?($|do\(\))/gs, "");
  }
  const matches = content.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g);
  const numberPairs = Array.from(matches).map((match) => [
    +match[1],
    +match[2],
  ]);
  const totalSum = numberPairs.reduce((acc, [a, b]) => acc + a * b, 0);
  console.log(totalSum);
}

computeSum(fileContent, 1);
computeSum(fileContent, 2);
