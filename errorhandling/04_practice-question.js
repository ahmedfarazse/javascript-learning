
// Question # 01 

function divide(a, b){
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }
    console.log(a/b)
}

try{
    console.log(divide(20, 10));
    console.log(divide(20, 0));
}
catch(error){
    console.log(error.message);
}