let bookTicket = () => {
  let finalPrice = 100;
  console.log(`Ticket Price: 100 EGP`);
  let add3DGlasses = confirm("Add 3D Glasses?");
  if (add3DGlasses == true) {
    finalPrice += 20;
    console.log("3D GLasses: +20 EGP");
  }
  let isStudent = confirm("Are you a student?");
  if (isStudent == true) {
    finalPrice *= 0.85;
    let studentDiscount = finalPrice * 0.15;
    console.log(`Students Discount: -${studentDiscount} EGP`);
  }
  let vat = finalPrice * 0.14;
  console.log(`VAT: +${vat} EGP`);
  finalPrice += vat;
  console.log(`Final Amount to Pay: ${finalPrice} EGP`);
};
