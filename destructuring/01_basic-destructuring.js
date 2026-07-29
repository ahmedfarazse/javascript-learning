
// Destructuring in JavaScript


// Destructuring ek JavaScript feature hai jo Array ya Object ke values ko directly variables me nikalne ke liye use hota hai.

// Without Destructuring
const person = {
    name: "Ahmed",
    age: 21,
    city: "Okara"
};

const name = person.name;
const age = person.age;
const city = person.city;

console.log(name);
console.log(age);
console.log(city);




// With Destructuring

const person = {
    name: "Ahmed",
    age: 21,
    city: "Okara"
};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);