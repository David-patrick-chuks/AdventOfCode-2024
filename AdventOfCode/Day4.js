import { readFileSync } from 'node:fs';

const data = readFileSync('./inputs/day04.txt', 'utf8').trimEnd();

const DIRECTIONS = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

function processPart1(data) {
  const rows = data.split('\n');
  let totalCount = 0;
  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows[0].length; col++) {
      if (rows[row][col] === 'X') {
        outerLoop: for (const [dr, dc] of DIRECTIONS) {
          let newRow = row + dr;
          let newCol = col + dc;_
          for (const symbol of 'MAS') {
            if (rows[newRow]?.[newCol] !== symbol) {
              continue outerLoop;
            }
            newRow += dr;
            newCol += dc;
          }
          totalCount++;
        }
      }
    }
  }
  console.log(totalCount);
}
processPart1(data);

const FLIP_SYMBOLS = {
  M: 'S',
  S: 'M',
};

const DIRECTIONS2 = [
  [1, 1],
  [1, -1],
];

function processPart2(data) {
  const rows = data.split('\n');
  let totalCount = 0;
  for (let row = 1; row < rows.length - 1; row++) {
    outerLoop2: for (let col = 1; col < rows[0].length - 1; col++) {
      if (rows[row][col] === 'A') {
        for (const [dr, dc] of DIRECTIONS2) {
          const firstChar = rows[row + dr][col + dc];
          if (firstChar !== 'M' && firstChar !== 'S') {
            continue outerLoop2;
          }

          const secondChar = rows[row - dr][col - dc];
          if (secondChar !== FLIP_SYMBOLS[firstChar]) {
            continue outerLoop2;
          }
        }
        totalCount++;
      }
    }
  }
  console.log(totalCount);
}
processPart2(data);
