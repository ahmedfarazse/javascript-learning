
// Question 01

// create promise resolve("Data Loaded")

const promise = new Promise((resolve,reject) =>{
    resolve("Data Loaded")
})


// Question 02

// create promise reject("Network Error")

const promise = new Promise((resolve,reject) => {
    reject("Network Error")
})



// Question 03

const isLoggedIn = true;

const promise = new Promise((resolve,reject) => {
    if(isLoggedIn === true){
        resolve("Welcome Ahmed");
    }else{
        reject("Please Login");
    }
})