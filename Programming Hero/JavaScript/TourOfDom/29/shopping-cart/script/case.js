/*
step 1.add event listener to the plus button cse silicone
2. get the value insdie the case number field input field
3. convert the number to an integer
4.calculate the new case
5.set the value to the case number

*/

// update 

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');

    const caseNumberFieldString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if(isIncrease === true)
    {
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    } 
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNmber){
    const caseTotal = newCaseNmber * 59;
    const caseElemet = document.getElementById('case-total');
    caseElemet.innerText = caseTotal;
}


document.getElementById("btn-case-plus").addEventListener('click',function(){
    // console.log("click");
    // const caseNumberField = document.getElementById('case-number-field');

    // const caseNumberFieldString = caseNumberField.value ;
    // const previousCaseNumber = parseInt(caseNumberFieldString);
    // // console.log(previousCaseNumber)

    // const newCaseNumber = previousCaseNumber + 1;
    // caseNumberField.value = newCaseNumber;
    const newCaseNmber = updateCaseNumber(true);
    // updateCaseNumber(true);

    // const caseTotal = newCaseNmber * 59;
    // const caseElemet = document.getElementById('case-total');
    // caseElemet.innerText = caseTotal;
    // document.getElementById('case-total').innerText = caseTotal;

    updateCaseTotalPrice(newCaseNmber);
    calculateSubTotal();
});


document.getElementById("btn-case-minus").addEventListener('click',function(){
    // console.log("click");

    // const caseNumberField = document.getElementById('case-number-field');

    // const caseNumberFieldString = caseNumberField.value ;
    // const previousCaseNumber = parseInt(caseNumberFieldString);


    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;
    // updateCaseNumber(false);
    const newCaseNumber= updateCaseNumber(false);
    // const caseTotalPrice = newCaseNumber * 59;
    // new caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

// function