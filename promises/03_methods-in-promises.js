
// .then() ka use successful (fulfilled) Promise ka result receive karne ke liye hota hai.

const promise = new Promise((resolve, reject) => {
    resolve("Data Loaded");
});

promise.then((result) => {
    console.log(result);
});



// .catch() rejected Promise ko handle karta hai.

const promise = new Promise((resolve, reject) => {
    reject("Network Error");
});

promise.catch((error) => {
    console.log(error);
});





// .finally() hamesha execute hota hai.

const promise = new Promise((resolve) => {
    resolve("Done");
});

promise
.then((result) => {
    console.log(result);
})
.finally(() => {
    console.log("Finished");
});




// Example

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }

});

promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Request Completed");
});