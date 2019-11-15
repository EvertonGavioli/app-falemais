import data from '~/data/server';
import { formatPrice } from '~/utils/format';

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

export function calculatePrice(tariff, minutes, planMinutes) {
  const INCREASE = 1.1;

  let withPlan = 0;
  let withoutPlan = 0;

  const overMinutes = minutes - planMinutes;

  if (overMinutes > 0) {
    withPlan = overMinutes * tariff * INCREASE;
  }
  withoutPlan = minutes * tariff;

  return {
    withPlan: formatPrice(withPlan),
    withoutPlan: formatPrice(withoutPlan),
  };
}
