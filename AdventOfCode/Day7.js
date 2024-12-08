import { readFileSync } from 'node:fs';

const fileContent = readFileSync('./inputs/day07.txt', 'utf8').trimEnd();

function processInput(data, mode) {
  let total = 0;
  
  for (const entry of data.split('\n')) {
    const [target, ...numbers] = entry.match(/\d+/g).map(Number);

    let combinations = [numbers[0]];
    for (let i = 1; i < numbers.length; i++) {
      const currentNum = numbers[i];
      let newCombinations = [];

      for (const combination of combinations) {
        newCombinations.push(combination + currentNum);
        newCombinations.push(combination * currentNum);
        if (mode === 2) {
          newCombinations.push(Number(`${combination}${currentNum}`));
        }
      }
      
      combinations = newCombinations.filter((combination) => combination <= target);
    }

    if (combinations.includes(target)) {
      total += target;
    }
  }
  
  console.log(total);
}

processInput(fileContent, 1);
processInput(fileContent, 2);
