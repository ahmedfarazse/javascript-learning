
// Array Methods in JavaScript 


const myArray = [2,1,3,4];


myArray.push(9);  //Add element at the end of the Array.
myArray.pop();    //Remove element at the end of the Array.

myArray.unshift(0);  //Add element at the start of the Array.
myArray.shift();     //Remove element at the start of the Array.


console.log(myArray.includes(34));  //Check that the element is present in the Array. It return boolen data type.

console.log(myArray.indexOf(3)); //Check the index of the elements. If element is not present then it return -1.


const arr2 = myArray.join(); //Change the data type convert it into string.

myArray.slice(1,3); //Take some element from the array. In this case we get index 1 and 2 element index 3 is not include.

myArray.splice(1,3); //It remove index 1 , 2 , 3 from the array and change the original array.
