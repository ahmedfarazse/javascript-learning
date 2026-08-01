
// 1. async

async function greet() {
    return "Hello Ahmed";
}

// it always return promise

greet().then((message) => {
    console.log(message);
});




// 2. await

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function showData() {
    const result = await getData();

    console.log(result);
}

showData();




// async + await + setTimeout()

function getUser() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data");
        }, 2000);

    });
}

async function showUser() {

    console.log("Loading...");

    const user = await getUser();

    console.log(user);
}

showUser();




// Multiple await

function getUser() {
    return Promise.resolve("Ahmed");
}

function getPosts() {
    return Promise.resolve("Posts");
}

async function showData() {

    const user = await getUser();

    console.log(user);

    const posts = await getPosts();

    console.log(posts);
}

showData();



// try catch 

function login() {

    return new Promise((resolve, reject) => {

        reject("Invalid Credentials");

    });

}

async function startLogin() {

    try {

        const result = await login();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

startLogin();