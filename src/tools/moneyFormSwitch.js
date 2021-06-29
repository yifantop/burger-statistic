function moneyFormSwitch(amount) {
  let amountStr = amount + '';
  let standardForm = '';
  let num = 0;
  for (let i = amountStr.length - 1; i >= 0; i--) {
    if (num < 3) {
      standardForm = amountStr.charAt(i) + standardForm;
      ++num;
    } else {
      num = 1;
      standardForm = amountStr.charAt(i) + ',' + standardForm;
    }
  }
  return  '$' + standardForm;
}
export default moneyFormSwitch;