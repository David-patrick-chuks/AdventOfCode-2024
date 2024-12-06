import { readFileSync } from 'fs';

const inputData = readFileSync('./inputs/day06.txt', 'utf8').trim();

const DIRECTIONS = [
  [-1, 0], // Up
  [0, 1],  // Right
  [1, 0],  // Down
  [0, -1], // Left
];

function explore(grid, initialPosition) {
  let directionIndex = 0;
  let [currentDy, currentDx] = DIRECTIONS[0];
  let [row, col] = initialPosition;
  const visited = grid.map((row) => row.map(() => []));

  while (grid[row]?.[col] !== undefined) {
    if (visited[row][col].includes(directionIndex)) {
      return {
        visited,
        hasLoop: true,
      };
    }

    visited[row][col].push(directionIndex);

    let nextRow = row + currentDy;
    let nextCol = col + currentDx;
    while (grid[nextRow]?.[nextCol] === 1) {
      directionIndex = (directionIndex + 1) % 4;
      [currentDy, currentDx] = DIRECTIONS[directionIndex];
      nextRow = row + currentDy;
      nextCol = col + currentDx;
    }
    [row, col] = [nextRow, nextCol];
  }
  return {
    visited,
    hasLoop: false,
  };
}

function mainSolver(inputData) {
  let startPosition;
  const grid = inputData.split('\n').map((line, rowIndex) =>
    line.split('').map((symbol, colIndex) => {
      if (symbol === '^') {
        startPosition = [rowIndex, colIndex];
      }
      return symbol === '#' ? 1 : 0;
    })
  );

  const { visited } = explore(grid, startPosition);
  const visitedCells = visited.flat().filter((cell) => cell.length).length;
  console.log(visitedCells);

  let loopCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i] || !visited[i][j] || !visited[i][j].length) continue;

      grid[i][j] = 1;
      const { hasLoop } = explore(grid, startPosition);
      if (hasLoop) loopCount++;
      grid[i][j] = 0;
    }
  }
  console.log(loopCount);
}

mainSolver(inputData);
