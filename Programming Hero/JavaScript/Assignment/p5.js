// problem 5

function gemsToDiamond(friend1, friend2, friend3) {
    if (friend1 <= 0 || friend2 <= 0 || friend3 <= 0) {
        return "Enter a valid number!!"; // gems can't be zero or negative .. if user input zero or negative value it will show an error
    }
    const friend1_gem_Quantity = 21;
    const friend2_gem_Quantity = 32;
    const friend3_gem_Quantity = 43;
    // converting gems into diamond
    const friend1Gem = friend1 * friend1_gem_Quantity;
    const friend2Gem = friend2 * friend2_gem_Quantity;
    const friend3Gem = friend3 * friend3_gem_Quantity;
    // summation of total diamond
    const totalGem = friend1Gem + friend2Gem + friend3Gem;
    // if total diamond get than 1000 or double than this condition will subtract the total diamond and return the value 
    if (totalGem > 1000 * 2) {
        return totalGem - 2000;
    }
    else {
        return totalGem;
    }

}

// fff = gemsToDiamond(100, 5, 1);
fff = gemsToDiamond(20, 200, 50);
console.log(fff);