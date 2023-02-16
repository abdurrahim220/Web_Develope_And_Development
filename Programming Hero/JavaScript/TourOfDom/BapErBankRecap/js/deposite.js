// console.log('js file Connected!!');

/*
1.add event listener to the deposit button
2.get deposit amount from the deposit input field!!
2.5. convert string deposit amount to a number
3.clear the deposit field after getting the value

4.get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6.get current balance total
7.calculate the new balance and set it to the balance total element
*/


// step1- connected event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log("button connected!");
    // step2- getting amount from input field!!
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);


    // step 3-- clearing the deposit input field
    depositField.value = '';

    // step4 -- getting the previous deposit total
    const depositElement = document.getElementById('deposit-total');
    const previousDepositElementTotalString = depositElement.innerText;
    const previousDepositElementTotal = parseFloat(previousDepositElementTotalString);

    // step -5 calculation of deposit 
    const newDepositTotal = previousDepositElementTotal + newDepositAmount;
    depositElement.innerText = newDepositTotal; // pushing the deposit field

    // step -6 getting current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceTotalElementString);

    // step7 -- calculating the total balance and pushing it to the balance
    const newBalance = previousBalanceTotalElement + previousBalanceTotalElement;
    balanceTotalElement.innerText = newBalance;


})