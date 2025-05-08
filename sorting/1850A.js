/*
    To My Critics

    Suneet has three digits 𝑎, 𝑏, and 𝑐.

    Since math isn't his strongest point, he asks you to determine if you can choose any two digits to make a sum greater or equal to 10.

    Output "YES" if there is such a pair, and "NO" otherwise.

    Input
    The first line contains a single integer 𝑡 ( 1 ≤ 𝑡 ≤ 1000) — the number of test cases.

    The only line of each test case contains three digits 𝑎, 𝑏, 𝑐 (0 ≤ 𝑎, 𝑏, 𝑐 ≤9).

    Output
    For each test case, output "YES" if such a pair exists, and "NO" otherwise.

    You can output the answer in any case (for example, the strings "yEs", "yes", "Yes" and "YES" will be recognized as a positive answer).

*/

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const testsNumbers = Number(input[0]);
let currentLine = 1;

function isGreaterOrEqualTo10 (arr) {
    const max = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + max >= 10) return true;
    }

    return false;
}

for (let test = 0; test < testsNumbers; test++) {
    const numsArr = input[currentLine].split(' ').map(Number).sort((a, b) => a - b);

    currentLine++;

    console.log(isGreaterOrEqualTo10(numsArr) ? 'YES' : 'NO');
}