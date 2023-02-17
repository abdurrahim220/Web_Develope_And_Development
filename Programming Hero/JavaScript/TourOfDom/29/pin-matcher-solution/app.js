function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log("Pin not 3 digit found = ", pin);
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const generatePin = getPin();
    const displayField = document.getElementById('display-pin');
    displayField.value = generatePin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    // console.log(event.target.innerText)
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value ;
    if (isNaN(number)) {
        // console.log(number)
        if(number === "C")
        {
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainDigit = digit.join('');
            typeNumberField.value = remainDigit; 
        };
    }
    else { 
        const newTypeNumber = previousTypedNumber + number;
        typeNumberField.value = newTypeNumber;
    };
});

document.getElementById('verify-pin').addEventListener('click',function(){
    // console.log(7)
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const newTypeNumber = document.getElementById('typed-numbers');
    const typeNumber = newTypeNumber.value;
    // newTypeNumber.value = '';
    const pinSuccessed = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typeNumber === currentPin)
    {
        // console.log("correct pin");
        
        pinSuccessed.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        // console.log('incorrect pin');
       
        pinFailureMessage.style.display = 'block';
        pinSuccessed.style.display = 'none';
    }
});