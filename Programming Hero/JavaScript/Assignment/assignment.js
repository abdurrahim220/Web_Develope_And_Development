/*
//Problem 1
function mindGame(number){
    const multiplyResult = number * 3;
    const additionResult  = multiplyResult + 10;
    const divisionResult = additionResult / 2;
    const finalResult  = divisionResult - 5;

    return finalResult;
}

const final = mindGame(33);
console.log(final); 

//Problem 2
function evenOdd(string){
    // console.log(string.length);
    if(string.length % 2 == 0)
    {
        // console.log("Even");
        return "even";
    }
    else{
        // console.log("Odd");
        return "odd";
    }
}

count = evenOdd("jack ma");

console.log(count); 


//problem 3
function isLGSeven(number) {

    const result = number - 7;
    if (result < 7) {
        return result;
    }
    else{
        return result * 2;
    }
}

ff = isLGSeven(15);
console.log(ff); 

// problem 5

function gemsToDiamond(friend1, friend2, friend3) {
    const friend1_gem_Quantity = 21;
    const friend2_gem_Quantity = 32;
    const friend3_gem_Quantity = 43;

    const friend1Gem = friend1 * friend1_gem_Quantity;
    const friend2Gem = friend2 * friend2_gem_Quantity;
    const friend3Gem = friend3 * friend3_gem_Quantity;

    const totalGem = friend1Gem + friend2Gem + friend3Gem;
    // return totalGem;

    if (totalGem > 1000 * 2) {
        return totalGem - 2000;
    }
    else {
        return totalGem;
    }

}

// fff = gemsToDiamond(100,5,1);
// fff = gemsToDiamond(20, 200, 50);
console.log(fff); */
