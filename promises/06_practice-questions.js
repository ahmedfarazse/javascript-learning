
// Question 1

const promise = Promise.resolve(5);

promise
.then((value) => {
    return value * 2
})
.then((value) => {
    return value + 10
})
.then((value) => {
    console.log(value)
})




// Question 2

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data Loaded")
        },2000);
    })
}

getData().then((data) => {
    console.log(data)
})