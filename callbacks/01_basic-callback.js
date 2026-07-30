
// Callbacks in JavaScript


function greet(callback) {
    console.log("Hello Ahmed");

    callback();
}

function bye() {
    console.log("Good Bye");
}

greet(bye);



// Anonymous Callback

function greet(callback) {
    callback();
}

greet(function () {
    console.log("Welcome Ahmed");
});




// Arrow Callback


function greet(callback) {
    callback();
}

greet(() => {
    console.log("Welcome Ahmed");
});




// Callback with Data

function processUser(callback) {
    const user = "Ahmed";

    callback(user);
}

processUser(function (name) {
    console.log("Hello " + name);
});