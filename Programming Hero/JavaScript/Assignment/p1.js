//Problem 1
function mindGame(num){
    // custom error handling 
    if(typeof num !== 'number'){
        return "Enter a valid number!!";
    }
    // problem calculation
    const multiplyResult = num * 3;
    const additionResult  = multiplyResult + 10;
    const divisionResult = additionResult / 2;
    const finalResult  = divisionResult - 5;

    return finalResult; //returning function result
  
}

const final = mindGame();
console.log(final);