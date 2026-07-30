
// Closure in JavaScript 


// A closure is created when an inner function remembers and can access the variables of its outer function even after the outer function has finished executing.



function outer() {
    let name = "Ahmed";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunction = outer();

myFunction();




// Example 2

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();



// Example 3

function greeting(message) {

    return function(name) {
        console.log(message + " " + name);
    };

}

const sayHello = greeting("Hello");

sayHello("Ahmed");