let calcMembership = () => {
  let finalMembership = 350;
  let noMonths = +prompt("Enter number of months");
  finalMembership *= noMonths;
  console.log(`${noMonths} months * 350 EGP`);
  if (noMonths >= 6 && noMonths < 12) {
    finalMembership *= 0.9;
    console.log("Discount 10%");
  } else if (noMonths >= 12) {
    finalMembership *= 0.85;
    console.log("Discount 15%");
  }
  let addPersonalTraining = confirm("Add personal training?");
  if (addPersonalTraining == true) {
    finalMembership += 200;
    console.log("Added Personal Training: 200 EGP");
  }
  let vat = finalMembership * 0.14;
  console.log(`VAT: ${vat} EGP`);
  finalMembership += vat;
  console.log(`Final Membership Price: ${finalMembership} EGP`);
};
