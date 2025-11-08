let exchangeCurrency = () => {
  let usdAmount = +prompt("Enter USD amount");
  console.log(`USD Amount: ${usdAmount} $`);
  console.log("Rate: 1 USD = 48 EGP");
  let egpAmount = usdAmount * 48;
  let commission = egpAmount * 0.03;
  console.log(`3% Commission: ${commission} EGP`);
  egpAmount -= commission;
  console.log(`Final EGP Amount: ${egpAmount} EGP`);
};
