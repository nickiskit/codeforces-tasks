/*
    Remove Smallest

    You are given the array 𝑎 consisting of 𝑛 positive (greater than zero) integers.

    In one move, you can choose two indices 𝑖 and 𝑗 (𝑖 ≠ 𝑗) such that the absolute difference between 𝑎𝑖
    and 𝑎𝑗 is no more than one (|𝑎𝑖−𝑎𝑗| ≤ 1) and remove the smallest of these two elements. If two elements are equal, you can remove any of them (but exactly one).

    Your task is to find if it is possible to obtain the array consisting of only one element using several (possibly, zero) such moves or not.

    You have to answer 𝑡 independent test cases.

    Input
    The first line of the input contains one integer 𝑡 (1 ≤ 𝑡 ≤ 1000) — the number of test cases. Then 𝑡 test cases follow.

    The first line of the test case contains one integer 𝑛 (1 ≤ 𝑛 ≤ 50) — the length of 𝑎. The second line of the test case contains 𝑛
    integers 𝑎1,𝑎2,…,𝑎𝑛 (1 ≤ 𝑎 𝑖≤100), where 𝑎𝑖 is the 𝑖-th element of 𝑎.

    Output
    For each test case, print the answer: "YES" if it is possible to obtain the array consisting of only one element using several (possibly, zero) moves described in the problem statement, or "NO" otherwise.

*/

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const testsNumbers = Number(input[0]);
let currentLine = 1;

function isItPossibleToDeleteMin(arr, length) {
    const max = arr[length - 1];

    for (let j = length - 2; j >= 0; j--) {
        if (max - arr[j] > 1) return false;
    }

    return true;
}
15
for (let test = 0; test < testsNumbers; test++) {
    const arrLength = Number(input[currentLine]);
    const numsArr = input[currentLine + 1].split(' ').map(Number).sort((a, b) => a - b);
    currentLine += 2;

    console.log(isItPossibleToDeleteMin(numsArr, arrLength) ? 'YES' : 'NO');
}