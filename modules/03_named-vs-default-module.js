
// Named Export

// math.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;


// index.js

import { add, subtract, PI } from "./math.js";

console.log(add(2, 3));
console.log(subtract(10, 4));
console.log(PI);





// Default Export

// greet.js

export default function greet(name) {
    return `Hello ${name}`;
}


// index.js

import greet from "./greet.js";

console.log(greet("Ahmed"));


// also this 

import sayHello from "./greet.js";

console.log(sayHello("Ahmed"));