//Code your solutions in this fill

//Problem #1 
const fiveToOneHundred = () => {
    for(let i = 5; i < 101; i++) {
        console.log(`${i}`); 
    }
}

//Problem #2 




//Problem #3 
const multiplesOfThreeOrFive = () => {
    for(let i = 3; i < 101; i++){
        if((i % 3) === 0 || (i % 5) === 0){
            console.log(`${i}`);
        }
    }

}


// Problem #5
const multiply = (num1, num2) => {
    return num1 * num2; 
}


//Problem #7
const isNegative = (num) => {
    return num < 0 ? true : false; 
}

//Problem #9 
const betweenTwentyAndFourty = (num) => {
    if(num >= 20 && num <= 40){
        return true; 
    } else{
        return false;
    }
}
