
// throw error 

// Some time we create some error

function checkAge(age) {
    if(age < 18){
        throw new Error("You must be 18 or older.");
    }

    console.log("Access Granted");
}

try{
    checkAge(15);
}
catch(error){
    console.log(error.message);
}

