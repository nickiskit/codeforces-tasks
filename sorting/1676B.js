/*
    Equal Candies

    There are 𝑛 boxes with different quantities of candies in each of them. The 𝑖-th box has 𝑎𝑖 candies inside.

    You also have 𝑛 friends that you want to give the candies to, so you decided to give each friend a box of candies. But, you don't want any friends to get upset so you decided to eat some (possibly none) candies from each box so that all boxes have the same quantity of candies in them. Note that you may eat a different number of candies from different boxes and you cannot add candies to any of the boxes.

    What's the minimum total number of candies you have to eat to satisfy the requirements?

    Input
    The first line contains an integer 𝑡 (1 ≤ 𝑡 ≤ 1000) — the number of test cases.

    The first line of each test case contains an integer 𝑛 (1 ≤ 𝑛 ≤ 50) — the number of boxes you have.

    The second line of each test case contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 (1 ≤ 𝑎𝑖 ≤ 107) — the quantity of candies in each box.

    Output
    For each test case, print a single integer denoting the minimum number of candies you have to eat to satisfy the requirements.

*/

// With sorting
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const testsNumbers = Number(input[0]);
let currentLine = 1;

function getExtraCandiesNumber(boxes) {
    const min = boxes[0];
    let extraCandiesNumber = 0;

    for (let i = 1; i < boxes.length; i++) {
        extraCandiesNumber += boxes[i] - min;
    }

   return extraCandiesNumber;
}

for (let test = 0; test < testsNumbers; test++) {
    const numsArr = input[currentLine + 1].split(' ').map(Number).sort((a, b) => a - b);

    currentLine += 2;

    console.log(getExtraCandiesNumber(numsArr));
}

// With min of array
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const testsNumbers = Number(input[0]);
let currentLine = 1;

function getExtraCandiesNumber(boxes) {
    const min = Math.min(...boxes);
    let extraCandiesNumber = 0;

    for (let i = 0; i < boxes.length; i++) {
        extraCandiesNumber += boxes[i] - min;
    }

    return extraCandiesNumber;
}

for (let test = 0; test < testsNumbers; test++) {
    const numsArr = input[currentLine + 1].split(' ').map(Number);

    currentLine += 2;

    console.log(getExtraCandiesNumber(numsArr));
}