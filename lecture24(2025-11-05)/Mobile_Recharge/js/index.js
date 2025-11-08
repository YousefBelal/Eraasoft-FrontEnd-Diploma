let rechargeMobileBalance = () => {
  let rechargeAmount = +prompt("Enter the Recharge Amount");
  console.log(`Recharge Amount: ${rechargeAmount} EGP`);
  let serviceFee = 0.02 * rechargeAmount;
  console.log(`Service Fee: ${serviceFee} EGP`);
  rechargeAmount += serviceFee;
  let vat = 0.14 * rechargeAmount;
  console.log(`VAT: ${vat} EGP`);
  rechargeAmount += vat;
  console.log(`Final Amount to Pay: ${rechargeAmount}`);
};
