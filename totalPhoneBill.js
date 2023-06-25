function totalPhoneBill() {
    var bill = this.callSMS.split(',');
    var totalCost = 0;
    for (let i = 0; i < bill.length; i++) {
      const prod = bill[i].trim();
      if (prod.includes('call')) {
        totalCost = totalCost + 2.75;
      } else if (prod.includes('sms')) {
        totalCost = totalCost + 0.65;
      }
    }
    this.totalCost = 'R' + totalCost.toFixed(2);
  }
  