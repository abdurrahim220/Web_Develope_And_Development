/*
1.add event handler with the withdraw button
1.get the withdraw amount from the withdraw amount

2.5 : also make sure to convert the input into a number  by using pareFloat
3 . get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount
5. get the previous balance total
6.calculate new balance total;
6.5 set the new balance

step 7 clear the input field
*/
// step -1

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert("Please Enter a valid Number!");
        return;
    }

    // step -3


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // console.log(previousWithdrawTotal);

    // step 4


    // step 5  get 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //  withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('bap ar bank a ato tk nai');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // console.log(previousBalanceTotal);
    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step 7 clear the input field

    // withdrawField.value = '';

})