// Find the max and min value
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}

console.log(numbers);

const max = numbers.reduce((a, b) => {
    if (a > b) return a;
    return b;
}, numbers[0]);

console.log(max);

const min = numbers.reduce((a, b) => {
    if (a < b) return a;
    return b;
}, numbers[0]);

console.log(min);
