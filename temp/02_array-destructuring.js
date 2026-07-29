
// Array Destructuring


const colors = ["Red", "Blue", "Green"];



// Without destructuring

const first = colors[0];
const second = colors[1];
const third = colors[2];



// With destructuring

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);



// Skip value in Array

const colors = ["Red", "Blue", "Green"];

const [ , , third] = colors;

console.log(third);



// Default Value

const numbers = [10];

const [a, b = 100] = numbers;

console.log(a);
console.log(b);