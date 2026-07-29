
// Practice Questions



// Question # 01

// Print first and last furit in the given array using destructuring

const fruits = ["Apple", "Mango", "Orange"];

const [first, ,last] = fruits;

console.log(first,last);



// Question # 02

// Print brand and model using destructuring

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};

const {brand,model} = car;

console.log(brand,model);




// Question # 03

// Give default value to age that is 21

const user = {
    name: "Ahmed"
};

const {name, age = 21} = user;

console.log(name,age);



// Question # 04

// Store only Black in variable

const colors = ["Red", "Blue", "Green", "Black"];

const [, , ,co4] = colors;

console.log(co4);



// Question # 05

// Replace salary to monthlySalary variable

const employee = {
    name: "Ali",
    salary: 50000
};

const {salary:monthlySalary} = employee;

console.log(monthlySalary);