import { readFileSync } from 'node:fs';

let fileContent = readFileSync('./inputs/day02.txt', 'utf8').trimEnd();

function displayContent(content) {
  console.log(content);
}
displayContent(fileContent);
