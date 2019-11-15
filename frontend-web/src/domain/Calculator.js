import data from '~/data/server';

export const localeOptions = data.localesDDD.map(locale => ({
  value: locale,
  label: locale,
}));

export const plansOptions = data.plans.map(plan => ({
  value: plan.minutes,
  label: plan.description,
}));

export function getTariff(origin, destiny) {
  const tariffObj = data.tariff.find(
    tariff => tariff.origin === origin && tariff.destiny === destiny
  );

  if (tariffObj) {
    return tariffObj.minute_price;
  }

  return undefined;
}

export function calculatePriceWithPlan(tariff, minutes, planMinutes) {
  const INCREASE = 1.1;
  let withPlan = 0;

  const overMinutes = minutes - planMinutes;

  if (overMinutes > 0) {
    withPlan = overMinutes * tariff * INCREASE;
  }

  return withPlan.toFixed(2);
}

export function calculatePriceWithoutPlan(tariff, minutes) {
  const withoutPlan = minutes * tariff;

  return withoutPlan.toFixed(2);
}
