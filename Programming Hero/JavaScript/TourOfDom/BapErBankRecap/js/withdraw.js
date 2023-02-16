/*
1.add event handler with the withdraw button 
2. get the withdraw amount
3.clear the withdraw field
4.previousWithdrawTotal
5.calculate total
6.step 6 get previous balance
7.cal new bal and set it to the new bl
*/

//! step-1 adding event handler 

document.getElementById('btn-withdraw').addEventListener('click',function(){
    //! step 2 -- getting withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(newWithdrawFieldString);

    //! step 3 clear

    withdrawField.value = '';

    //! step 4 --- 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalElementString = withdrawTotalElement.innerText;
    const previousWithdrawTotalElement = parseFloat(previousWithdrawTotalElementString);

    //! step 5 adding
    const newWithdrawAmount = previousWithdrawTotalElement + newWithdrawFieldAmount;

    withdrawTotalElement.innerText = newWithdrawAmount;

    //! step 6

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceTotalElementString);

    const newBalance = previousBalanceTotalElement - newWithdrawFieldAmount;

    balanceTotalElement.innerText = newBalance;
})