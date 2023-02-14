// step 1 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button click');
    // get the deposit amount from the deposit input field
    // for input field use (.value) to get the value inside the input field

    const depositField = document.getElementById('deposit-field');
    // const newDepositAmount = depositField.value;
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(depositAmount);
    // step 3 get the total current deposit 
    // for non-input(element other than input,textarea) user innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositTotal = depositTotalElement.innerText;
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // console.log(depositTotal);
    // sum 
    // step 4 : add number set to the total deposit
    const currentDepositTotal = (previousDepositTotal) + (newDepositAmount);

    // const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);

    depositTotalElement.innerText = currentDepositTotal;

    // step 5 get the balance current total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7 clear the deposit field

    depositField.value = '';


})