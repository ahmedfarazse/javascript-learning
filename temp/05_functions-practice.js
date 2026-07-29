// Question # 01

//  Multiply Numbers

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNumbers(2, 3));



// Question # 2

// Calculate Square of a Number

function calculateNumber(num) {
  return num * num;
}

console.log(calculateNumber(5));



// Question # 3

// Check Even and Odd

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));


// Question # 4 

function calculateGrade(marks){
    if(marks>100 || marks<0){
        return "Invalid Marks";
    }else if(marks>=90){
        return "A";
    }else if(marks>=80){
        return "B";
    }else if(marks>=70){
        return "C";
    }else if(marks>=60){
        return "D";
    }else{
        return "F";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(87));
console.log(calculateGrade(73));
console.log(calculateGrade(66));
console.log(calculateGrade(58));
console.log(calculateGrade(120));
console.log(calculateGrade(-10));
