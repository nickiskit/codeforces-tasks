/*

    Amusing Joke

    So, the New Year holidays are over. Santa Claus and his colleagues can take a rest and have guests at last. When two "New Year and Christmas Men" meet, thear assistants cut out of cardboard the letters from the guest's name and the host's name in honor of this event. Then the hung the letters above the main entrance. One night, when everyone went to bed, someone took all the letters of our characters' names. Then he may have shuffled the letters and put them in one pile in front of the door.

    The next morning it was impossible to find the culprit who had made the disorder. But everybody wondered whether it is possible to restore the names of the host and his guests from the letters lying at the door? That is, we need to verify that there are no extra letters, and that nobody will need to cut more letters.

    Help the "New Year and Christmas Men" and their friends to cope with this problem. You are given both inscriptions that hung over the front door the previous night, and a pile of letters that were found at the front door next morning.

    Input
    The input file consists of three lines: the first line contains the guest's name, the second line contains the name of the residence host and the third line contains letters in a pile that were found at the door in the morning. All lines are not empty and contain only uppercase Latin letters. The length of each line does not exceed 100.

    Output
    Print "YES" without the quotes, if the letters in the pile could be permuted to make the names of the "New Year and Christmas Men". Otherwise, print "NO" without the quotes.

*/



/* First solution using a hash table */
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const guest = input[0].trim();
const owner = input[1].trim();
const heapStr = input[2].trim();

const firstMap = new Map();
const secondMap = new Map();

for (const char of guest) {
    firstMap.set(char, (firstMap.get(char) || 0) + 1);
}

for (const char of owner) {
    firstMap.set(char, (firstMap.get(char) || 0) + 1);
}

for (const char of heapStr) {
    secondMap.set(char, (secondMap.get(char) || 0) + 1);
}

function compareMaps(first, second) {
    for (const key of first.keys()) {
        if (second.has(key) && second.get(key) === first.get(key)) continue;

        return false;
    }

    return true;
}

console.log(compareMaps(firstMap, secondMap) && compareMaps(secondMap, firstMap) ? 'YES' : 'NO');


/* Second solution using string sorting */
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const firstStr = input[0].trim() + input[1].trim();
const secondStr = input[2].trim();

const sortedFirstStr = firstStr.split('').sort().join('');
const sortedSecondStr = secondStr.split('').sort().join('');

console.log(sortedFirstStr === sortedSecondStr ? 'YES' : 'NO');
