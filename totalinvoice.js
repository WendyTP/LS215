function getTotalFromInvoice(inv) {
  let total = {total: 0,};

  Object.keys(inv).forEach(key => {
    total['total'] += inv[key];
  })

  return total;
}



let myInvoice = { phone: 10000, internet: 8000, tax: 3000, };
console.log(getTotalFromInvoice(myInvoice))