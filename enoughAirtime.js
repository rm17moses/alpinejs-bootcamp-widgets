function enoughAirtime() {
    var productCost = this.cost.split(',');
    var cost1 = 0;
    for (let i = 0; i < productCost.length; i++) {
      var usage = productCost[i].trim();
      if (usage === 'call') {
        cost1 = cost1 + 1.88;
      } else if (usage === 'data') {
        cost1 = cost1 + 12;
      } else if (usage === 'sms') {
        cost1 = cost1 + 0.75;
      }
    }
    var none = 0;
    if (this.airtime - cost1 > 0) {
      this.projectedAirtime = 'R' + (this.airtime - cost1).toFixed(2);
    } else {
      this.projectedAirtime = 'R' + none.toFixed(2);
    }
  }
  