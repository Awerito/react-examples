// Find the max and min value
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}

console.log(numbers);

const max = Math.max(...numbers);  // ... is the spread operator
const min = Math.min(...numbers);  // ... is the spread operator

console.log(max, min);
