import { readFileSync } from 'node:fs';

const data = readFileSync("./inputs/day05.txt", 'utf8').replace(/\r\n/g, '\n').trim();

function processInput(data, mode) {
  const [section1, section2] = data.split('\n\n').map(part => part.trim()); 
  // Ensure sections are trimmed
  if (!section1 || !section2) {
    throw new Error("Input file is not properly formatted. Check the sections.");
  }
  
  const referenceMap = {};
  
  // Parse the first section into a mapping structure
  for (const line of section1.split('\n')) {
    const [key, value] = line.split('|').map(Number);
    (referenceMap[key] ??= {})[value] = -1;
  }

  let result = 0;
  
  // Process the second section
  for (const line of section2.split('\n')) {
    const numbers = line.split(',').map(Number);
    const sortedNumbers = numbers.toSorted((a, b) => referenceMap[a]?.[b] ?? 0);
    
    if (numbers.every((_, i) => numbers[i] === sortedNumbers[i])) {
      if (mode === 1) {
        result += numbers[(numbers.length - 1) / 2];
      }
    } else if (mode === 2) {
      result += sortedNumbers[(sortedNumbers.length - 1) / 2];
    }
  }
  
  console.log(result);
}


processInput(data, 1);
processInput(data, 2);
