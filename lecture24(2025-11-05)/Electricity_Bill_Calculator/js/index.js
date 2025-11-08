let calcBill = () => {
  let finalCost = 0;
  let kWhs = +prompt("Enter Number of KWhs");
  console.log(`Number of KWhs: ${kWhs} KWh`);
  let diff = kWhs - 100;
  if (diff >= 0) {
    // first 100 KWh at 0.75
    finalCost = 75 + 1.2 * diff;
    console.log(`First 100 kWh at 0.75, ${diff} KWh at 1.20`);
  } else {
    finalCost = 0.75 * kWhs;
    console.log(`${kWhs} KWh at 0.75`);
  }
  let optionalService = confirm("use the Optional Service?");
  if (optionalService == true) {
    finalCost += 5;
    console.log("Optional Service Fee: 5 EGP");
  }
  let vat = 0.14 * finalCost;
  console.log(`VAT: ${vat} EGP`);
  finalCost += vat;
  console.log(`Final Cost: ${finalCost} EGP`);
};
