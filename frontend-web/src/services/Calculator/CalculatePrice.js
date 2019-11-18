const CalculatePrice = {
  calculatePriceWithPlan (tariff, minutes, planMinutes) {
    const INCREASE = 1.1;
    let withPlan = 0;

    const overMinutes = minutes - planMinutes;

    if (overMinutes > 0) {
      withPlan = overMinutes * tariff * INCREASE;
    }

    return withPlan.toFixed(2);
  },

  calculatePriceWithoutPlan (tariff, minutes) {
    const withoutPlan = minutes * tariff;

    return withoutPlan.toFixed(2);
  },
};

export default CalculatePrice;
