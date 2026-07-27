// const one = function () {
//     let username = "Ahmed";
//     console.log(this.username);
// }

// one();


// JavaScript Arrow Function 

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(2,4))


// Implicity Return 

const addTwoNumbers = (num1 , num2) => num1 + num2

console.log(addTwoNumbers(5,1))


// if we use {} then return keyword use if we use () then return keyword not used 

const addTwoNumbers = (num1 , num2) =>( num1 + num2)

console.log(addTwoNumbers(5,1))



// create object 

const userName = () => ({username:"Ahmed Faraz"})