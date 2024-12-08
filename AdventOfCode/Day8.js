import { readFileSync } from 'node:fs';

const input = readFileSync('./inputs/day08.txt', 'utf8').trimEnd();

function solve(input) {
  const antennas = {};
  const lines = input.split('\n');
  const height = lines.length;
  const width = lines[0].length;

  // Step 1: Collect positions of antennas grouped by frequency
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char !== '.') {
        (antennas[char] ??= []).push([i, j]);
      }
    }
  }

  console.log('Antennas:', antennas);

  // Step 2: Create a set to store unique antinode positions
  const antinodes = new Set();

  // Function to check if coordinates are within bounds
  function isWithinBounds(y, x) {
    return y >= 0 && y < height && x >= 0 && x < width;
  }

  // Step 3: Calculate antinodes for each pair of antennas of the same frequency
  for (const coords of Object.values(antennas)) {
    for (let i = 0; i < coords.length - 1; i++) {
      const [y1, x1] = coords[i];
      for (let j = i + 1; j < coords.length; j++) {
        const [y2, x2] = coords[j];

        // Calculate the vector between the two antennas
        const dy = y2 - y1;
        const dx = x2 - x1;

        // Antinode positions based on doubling the vector
        const antinode1 = [y2 + dy, x2 + dx];
        const antinode2 = [y1 - dy, x1 - dx];

        // console.log(`Pair: (${y1},${x1}) -> (${y2},${x2}) | Antinode1: (${antinode1}) | Antinode2: (${antinode2})`);

        // Add to the set if within bounds
        if (isWithinBounds(antinode1[0], antinode1[1])) {
          antinodes.add(`${antinode1[0]},${antinode1[1]}`);
        }
        if (isWithinBounds(antinode2[0], antinode2[1])) {
          antinodes.add(`${antinode2[0]},${antinode2[1]}`);
        }
      }
    }
  }

  console.log('Antinodes:', antinodes);
  console.log('Total Antinodes:', antinodes.size);
}

solve(input);
