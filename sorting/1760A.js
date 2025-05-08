/*
    Medium Number

    Given three distinct integers 𝑎, 𝑏, and 𝑐, find the medium number between all of them.

    The medium number is the number that is neither the minimum nor the maximum of the given three numbers.

    For example, the median of 5,2,6 is 5, since the minimum is 2 and the maximum is 6.

    Input
    The first line contains a single integer 𝑡 (1 ≤ 𝑡 ≤ 6840) — the number of test cases.

    The description of each test case consists of three distinct integers 𝑎, 𝑏, 𝑐 (1 ≤ 𝑎, 𝑏, 𝑐 ≤ 20).

    Output
    For each test case, output a single integer — the medium number of the three numbers.

*/

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const testsNumbers = Number(input[0]);
let currentLine = 1;

for (let test = 0; test < testsNumbers; test++) {
    const numsArr = input[currentLine].split(' ').map(Number).sort((a, b) => a - b);

    currentLine++;

    console.log(numsArr[1]);
}