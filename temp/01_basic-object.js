// Objects in JavaScript

// When we want to store data in key value form then we use Objects.

const student = {
    name: "Ahmed",
    "full name":"Ahmed Faraz",  // we only access this by student.["full name"] not access by this student.full name
    age: 21,
    email: "ahmed@google.com"
}

console.log(student.email);  // Access object

console.log(student["email"])  // Access Object 





// If we add symbol in object then


const sym = Symbol("key1")

const info = {
    name: "Faraz",
    [sym]: "mykey1",
    email : "ahmed@gmail"
}

console.log(info[sym]);

info.email = "faraz@gmail.com";

// If we want to fix the object other will not change then 
Object.freeze(info)