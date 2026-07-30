
// Error Handling in JavaScript

// Error Handling is the process of detecting and managing errors so that the program does not crash unexpectedly.



// JavaScript Without Error Handling

console.log("Start");

console.log(user);

console.log("End");



// try...catch

try {
    console.log("Start");

    console.log(user);

    console.log("End");
}
catch(error) {
    console.log("Something went wrong.");
}



// Accessing the Error Object

try {
    console.log(user);
}
catch(error) {
    console.log(error);
}


// Only Print Message

try {
    console.log(user);
}
catch(error) {
    console.log(error.message);
}