function getTextElementValueById(elementId) {
    const phoneTotalPrice = document.getElementById(elementId);
    const phoneTotalPriceString = phoneTotalPrice.innerText;
    const currentPhoneTotalPrice = parseInt(phoneTotalPriceString);
    return currentPhoneTotalPrice;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-total');
    const subTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', subTotal);
    // calculate tex
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finaAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finaAmount);
}

