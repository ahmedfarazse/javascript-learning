
// Question # 01

function welcome(name,callback){
    console.log("Welcome" + name)

    callback();
}

welcome("Ahmed", ()=>{
    console.log("Have a nice day")
});



// Question # 02

function process(number,callback){
    callback(number);
}

process(10,(num)=>{
    console.log(num * num);
});