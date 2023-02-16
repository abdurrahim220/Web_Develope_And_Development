function updateCaseNumber2(isIncrease2)
{
    const caseNumberField = document.getElementById("input-field");
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseField = parseInt(caseNumberFieldString);

    let newCaseField;
    if(isIncrease2 === true)
    {
        newCaseField = previousCaseField + 1;;
    }
    else{
        newCaseField = previousCaseField - 1;
    }
    caseNumberField.value = newCaseField;
    return newCaseField;
}

function updateTotalPrice(number){
    const phoneTotalPrice = number * 1219; 
    const phoneTotalPriceElement = document.getElementById('phone-price');
    phoneTotalPriceElement.innerText = phoneTotalPrice;
};

document.getElementById("btn-phone-plus").addEventListener('click',function(){
    const number = updateCaseNumber2(true);
    updateTotalPrice(number);
    calculateSubTotal();
});

document.getElementById("btn-phone-minus").addEventListener('click',function(){
    const num = updateCaseNumber2(false);
    updateTotalPrice(num);
    calculateSubTotal();
});