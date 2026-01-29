'use strict';

function dynamicArray(n, queries) {
    const arr = Array.from({ length: n }, () => []);
    let lastAnswer = 0;
    const answers = [];

    for (const query of queries) {
        const [type, x, y] = query;
        const idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            arr[idx].push(y);
        } else if (type === 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            answers.push(lastAnswer);
        }
    }

    return answers;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf8').trim().split('\n');

    const [n, q] = input[0].split(' ').map(Number);

    const queries = input.slice(1).map(line =>
        line.split(' ').map(Number)
    );

    const result = dynamicArray(n, queries);

    // console log check (each answer in new line)
    result.forEach(value => console.log(value));
}

main();
