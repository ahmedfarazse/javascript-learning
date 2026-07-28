
// Some methods in Object


const student = {
    name:"Ahmed",
    age:21,
    email:"ahmed@.com"
}

const detail = [
    {
        id: 1,
        name: "Ahmed"
    },
    {
        id: 2,
        name: "Faraz"
    },
    {
        id: 3,
        name: "Ali"
    }
];

detail[1].name; // access any object from array

console.log(Object.keys(student));  // Give all keys of the object
console.log(Object.values(student));  // Give all values of the object

console.log(Object.entries(student));  // Convert every key value into array

console.log(student.hasOwnProperty("name")); // Check is that property exist in the object or not it return boolen vaue.