// Find the max and min value
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}

console.log(numbers);


function bubbleSort(list) {
    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                const aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
                swap = true;
            }
        }
    }
    return list;
}

let sorted = bubbleSort(numbers);
const max = sorted[sorted.length - 1];
const min = sorted[0];

console.log(max);
console.log(min);
