/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const oldWithdrawAmount = document.getElementById("withdraw-field");
  const newWithdrawTotalString = oldWithdrawAmount.value ;
  const newWithdrawAmount = parseFloat(newWithdrawTotalString);
  oldWithdrawAmount.value = '';

  // withdraw section
  const oldWithdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = oldWithdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  oldWithdrawTotal.innerText = newWithdrawTotal; // push to old one


  // setTextElementValueById(withdraw - total, newWithdrawTotal);
  const oldBalanceTotal = document.getElementById("balance-total");
  // const oldBalanceTotal = getTextElementValueById("balance-total");
  const previousBalanceTotalString = oldBalanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)


  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  oldBalanceTotal.innerText=newBalanceTotal;

  // setTextElementValueById("balance-total", newBalanceTotal);
});
