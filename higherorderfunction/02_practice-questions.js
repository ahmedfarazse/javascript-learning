
// Question # 01

function welcome(name,callback){
    console.log("Welcome" + name)

    callback();
}

welcome("Ahmed", ()=>{
    console.log("Have a nice day")
});

// Question # 02

function calculate(a,b,operation){
   return operation(a,b);
}

console.log(calculate(20,10,(x,y)=>x/y));