//Code your solutions in this fill

//Problem #1 
const fiveToOneHundred = () => {
    for(let i = 5; i < 101; i++) {
        console.log(`${i}`); 
    }
}

//Problem #2 
const multiplesOfThree = () =>{
    for(let i = 3; i <= 100; i++){
        if((i % 3) === 0){
            console.log(`${i}`);
        }
    }
}


//Problem #3 
const multiplesOfThreeOrFive = () => {
    for(let i = 3; i < 101; i++){
        if((i % 3) === 0 || (i % 5) === 0){
            console.log(`${i}`);
        }
    }
}
// Problem #4
const untilNum = () => {
    for(let i = 1; i <= n; i++); {
        console.log(i);
    }
}

// Problem #5
const multiply = (num1, num2) => {
    return num1 * num2; 
}

// Problem #6
const add = (num1, num2) => {
    if (num1 === num2) {
      return 3 * (num1 + num2);
    } else {
      return num1 + num2;
    }
  }
  

//Problem #7
const isNegative = (num) => {
    return num < 0 ? true : false; 
}

//Problem #8
const triangleArea = (base, height) => {
    return (base * height) / 2;
}

//Problem #9 
const betweenTwentyAndFourty = (num) => {
    if(num >= 20 && num <= 40){
        return true; 
    } else{
        return false;
    }
}

// Problem 10
const largest = (num1, num2, num3) => {
    if((num1 > num2) && (num1 > num3)) { 

        return num1 
        }
        else if((num2 > num1) && (num2 > num3)) {
    
        return num2 
        } else {
            return num3
     }
}
console.log(largest(8,9,7));
multiplesOfThree();