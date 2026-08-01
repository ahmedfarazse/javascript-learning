
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.


// Promise Syntax

const promise = new Promise(function (resolve, reject) {

});


// Arrow Function

const promise = new Promise((resolve, reject) => {

});



// resolve()

const promise = new Promise((resolve, reject) => {

    resolve("Payment Successful");

});




// reject()

const promise = new Promise((resolve, reject) => {

    reject("Payment Failed");

});