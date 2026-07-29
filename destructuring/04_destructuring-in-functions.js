
// Destructuring in Functions

const person = {
    name: "Ahmed",
    age: 22
};

function printUser({ name, age }) {
    console.log(name);
    console.log(age);
}

printUser(person);


// Nested Destructuring

const user = {
    name: "Ahmed",
    address: {
        city: "Okara",
        country: "Pakistan"
    }
};


const {
    address: { city }
} = user;

console.log(city);



// Real Backend Example

const req = {
    body: {
        username: "Ahmed",
        password: "12345"
    }
};


// Without destructuring

const username = req.body.username;
const password = req.body.password;


// With destructuring

const { username, password } = req.body;