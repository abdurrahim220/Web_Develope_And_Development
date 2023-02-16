// console.log("connected");

// step 1. add event listener 

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositFieldString);

    // step 2 clear 
    // depositField.value = '';

    // step 3 

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalElementString = depositTotalElement.innerText;

    const previousDepositTotalElement = parseFloat(previousDepositTotalElementString);

    // step 4 calculation

    const currentDeposit = previousDepositTotalElement + newDepositAmount;

    depositTotalElement.innerText = currentDeposit;

    // step 5 balance

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceTotalElementString);

    // step 6 calculate 

    const newBalance = previousBalanceTotalElement + newDepositAmount;

    balanceTotalElement.innerText = newBalance;

    depositField.value = '';
})