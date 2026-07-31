
// Module is a JavaScript file that contains related code and can export or import functionality into other files.


// Export Example

// math.js

export function add(a, b) {
    return a + b;
}


// index.js
import { add } from "./math.js";

console.log(add(5, 3));




// Multiple Exports

// math.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}


// index.js

import { add, subtract, multiply } from "./math.js";

console.log(add(5, 3));

console.log(subtract(10, 4));

console.log(multiply(2, 8));



// Import Everything

import * as MathFunctions from "./math.js";

console.log(MathFunctions.add(2,3));

console.log(MathFunctions.multiply(4,5));