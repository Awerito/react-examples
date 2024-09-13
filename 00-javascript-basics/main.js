// Variable declarations
let name = "John";
const age = 30;
var city = "New York";

console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Regular function
function greet(name) {
	return `Hello, ${name}`;
}

console.log(greet("John"));

// Arrow function
const sayGoodbye = (name) => `Goodbye, ${name}`;

console.log(sayGoodbye("John"));

// If-else condition
if (age > 18) {
	console.log("You are an adult.");
} else {
	console.log("You are a minor.");
}

// Switch statement
switch (city) {
	case "New York":
		console.log("You're in the Big Apple!");
		break;
	case "Los Angeles":
		console.log("You're in LA!");
		break;
	default:
		console.log("Unknown city.");
		break;
}

// For loop
for (let i = 0; i < 5; i++) {
	console.log(`For loop iteration: ${i}`);
}

// While loop
let counter = 0;
while (counter < 5) {
	console.log(`While loop iteration: ${counter}`);
	counter++;
}

// Class definition and object creation
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	introduce() {
		console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

const person1 = new Person("Alice", 25);
person1.introduce();

// Array methods: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// Promises and async/await
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Data fetched!");
		}, 2000);
	});
};

async function getData() {
	try {
		const result = await fetchData();
		console.log(result);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

getData();

// Error handling with try-catch
try {
	throw new Error("Something went wrong!");
} catch (error) {
	console.error("Caught an error:", error.message);
}
