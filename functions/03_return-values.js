// JavaScript Functions with return values
// Date: 27 July 2026

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2;
    // return result;


    // also we do that

    return num1 + num2;
}

const results = addTwoNumbers(3,5);

console.log("Final Result is:" , results);


// practice 1

function loginUserMessage(username){
    return `{username} is logged in`
}

// If we don't give any arguments then it give undefined

console.log(loginUserMessage("Ahmed"));   



// practice 2

function loginUserMessage(username){
    if(!username){
        console.log("Please Enter UserName.");
        return
    }
    return `{username} is logged in`
}

console.log(loginUserMessage("Ahmed"));   



// practice 3

// if we not give any arguments then by default Faraz print

function loginUserMessage(username = "Faraz"){
    if(!username){
        console.log("Please Enter UserName.");
        return
    }
    return `{username} is logged in`
}

console.log(loginUserMessage("Ahmed"));   
