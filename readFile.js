import { readFileSync } from 'node:fs';

var input = ``;
var input = readFileSync('./inputs/day02.txt', 'utf8').trimEnd();

function readFile(input) {
  console.log(input);
}
readFile(input);