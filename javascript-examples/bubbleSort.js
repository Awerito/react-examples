// Use of bubble sort algorithm to sort a list of random numbers
const size = 10;
const numbers = [];
for (let i = 0; i < size; i++) {
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

console.log(bubbleSort(numbers));
