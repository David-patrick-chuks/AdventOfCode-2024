#!/bin/bash

# Create the README content
cat <<EOF > README.md
# Advent of Code - JavaScript Solutions

Welcome to my repository for solving the **Advent of Code** challenges using **JavaScript**!

## Overview

This repository contains my solutions to each day's puzzle from the **Advent of Code** event. The puzzles range from simple algorithmic challenges to more complex problems involving grid traversal, pattern matching, and more. Each solution is written in JavaScript, and I strive to implement clean and efficient code.

## Challenges Solved

- **Day 01:** Solved a problem involving sorting and comparing two sets of values. Part 1 calculates the total sum of absolute differences between corresponding elements in the two sets. Part 2 involves counting the frequency of values in the second set and calculating a weighted sum of the values from the first set based on their frequency.
- **Day 02:** Solved a sequence safety problem. Part 1 checks if a sequence of numbers is safe based on a set of conditions involving directionality and differences. Part 2 modifies the sequence by removing elements and rechecking the sequence's safety based on specific rules.
- **Day 03:** Solved a pattern matching problem with a focus on multiplication. Part 1 and Part 2 involved parsing a set of multiplication operations and calculating the sum of products based on certain conditions. The solution involved regex pattern matching to extract the values and compute the sum.
- **Day 04:** Solved grid traversal and directional pattern matching. Part 1 identifies and counts occurrences of 'X' surrounded by a specific sequence of symbols ('M', 'A', 'S') in all eight directions. Part 2 checks for a flipped pattern between 'M' and 'S' symbols adjacent to 'A' in a specific configuration, and counts the valid occurrences.


## Installation

To run any solution, clone this repository and open the relevant file in your favorite JavaScript environment. Make sure to have **Node.js** installed on your machine if you want to run the scripts directly.

\`\`\`bash
git clone https://github.com/David-patrick-chuks/AdventOfCode-2024.git
cd AdventOfCode-2024
\`\`\`

## How to Run

For each day’s solution, simply run the respective \`.js\` file using Node.js. For example, for Day 04:

\`\`\`bash
node Day4.js
\`\`\`

## Repo Structure

- \`Day1.js\`: Solution for Day 01
- \`Day2.js\`: Solution for Day 02
- \`Day3.js\`: Solution for Day 03
- \`Day4.js\`: Solution for Day 04

Each day’s solution is placed in its own file for easy navigation.

## Contributing

Feel free to fork the repo and contribute your own solutions or improvements. Pull requests are welcome!


Happy coding! 🚀
EOF

# Output the description
echo "Repository description: Solutions to Advent of Code challenges using JavaScript. This repo contains my solutions for each day's puzzles, including grid traversal, pattern matching, and other algorithmic challenges. Check it out to see how I approach these fun coding problems!"
