
// Higher Order Function in JavaScript

function greet(callback) {
    console.log("Hello Ahmed");

    callback();
}

function sayBye() {
    console.log("Good Bye");
}

greet(sayBye); 





// Arrow Function

function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(10, 5, (x, y) => x * y);

console.log(result);




// Returning a Function

function greeting() {
    return function () {
        console.log("Hello Ahmed");
    };
}

const message = greeting();

message();