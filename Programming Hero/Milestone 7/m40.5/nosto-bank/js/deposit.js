// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const DepositAmount = document.getElementById("deposit-field");
  const newDepositAmountString = DepositAmount.value;
  const newDepositAmount = parseFloat(newDepositAmountString)
  DepositAmount.value = '';

  // const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id & make into float or integer type 
    2.push to the innner text value

    */
  const DepositTotal = document.getElementById("deposit-total");
  const newDepositTotalString = DepositTotal.innerText;
  const previousDepositTotal = parseFloat(newDepositTotalString)
  // const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // pushing to deposit total

  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);

  // set deposit total value
  // setTextElementValueById("deposit-total", newDepositTotal);
  DepositTotal.innerText = newDepositTotal;

  // get previous balance by using the function
  const BalanceTotal = document.getElementById("balance-total");
  // const previousBalanceTotal = getextElementValueById("balance-total");
  const previousBalanceTotalString = BalanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  BalanceTotal.innerText = newBalanceTotal;
  setTextElementValueById("balance-total", newBalanceTotal);
}

);
