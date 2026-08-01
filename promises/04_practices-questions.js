
// Question 1

// create promise resolve("Welcome Ahmed"); then print using .then()

const promise = new Promise((resolve,reject) => {
    resolve("Welcome Ahmed");
});

promise.then((result) => {
    console.log(result);
})



// Question 2

// create promise reject("Invalid Password"); then print using .catch()

const promise = new Promise((resolve,reject) => {
    reject("Invalid Password");
})

promise.catch((error) => {
    console.log(error);
})




// Question 3


const promise = new Promise((resolve, reject) => {

    const age = 20;

    if (age >= 20) {
        resolve("Eligible");
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