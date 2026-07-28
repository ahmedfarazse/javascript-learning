
// Spread Operator

// It used in array to combine two or more different array and return new array.

const arr1 = [1,2,3,4]
const arr2 = [9,23,45]

const array = [...arr1, ...arr2]

console.log(array);


const names = ["Ahmed", "Faraz"]
const num = [2,4,5,7]

const mix = [...names, ...num]

console.log(mix)



// Array in array in array handle by flat method

const anArray = [1,2,4,[5,7,9],3,[21,45,67,[0,90,80]]]

const fullArray = anArray.flat(Infinity);

console.log(fullArray);




//Some Interesting Methods

console.log(Array.isArray("Ali"));  //Check that is it an Array
console.log(Array.from("Ali"))      //Separate each character
console.log(Array.from({name:"Ali"})) //It give an empty array



// combine multiple variable into an array

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));