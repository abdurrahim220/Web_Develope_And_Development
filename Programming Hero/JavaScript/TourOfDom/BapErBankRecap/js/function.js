getInputFieldValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

getTextElementValueById = (elemenId) => {
    const textElement = document.getElementById(elemenId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

setTextElementValueById = (elemenId, newValue) => {
    const textElement = document.getElementById(elemenId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    /*
    1.get the element by id
    2.get the value from the element
    3.convert string value to a number    
    */

    const newDepositAmount = getInputFieldValueById('deposit-field');

    /*
    
    */

    const previousDepositTotal = getTextElementValueById('deposit-total');

    // console.log(newDepositAmount);

    // calculate new deposite total

    const newDeposiTotal = previousDepositTotal + newDepositAmount;

    // set deposit total

    setTextElementValueById('deposit-total', newDeposiTotal);


    // get previous balance by using the function

    const previousBalanceTotal = getTextElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);


})