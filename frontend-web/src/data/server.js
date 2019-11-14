export default {
  tariff: [
    {
      origin: '011',
      destiny: '016',
      minute_price: 1.9,
    },
    {
      origin: '016',
      destiny: '011',
      minute_price: 2.9,
    },
    {
      origin: '011',
      destiny: '017',
      minute_price: 1.7,
    },
    {
      origin: '017',
      destiny: '011',
      minute_price: 2.7,
    },
    {
      origin: '011',
      destiny: '018',
      minute_price: 0.9,
    },
    {
      origin: '018',
      destiny: '011',
      minute_price: 1.9,
    },
  ],
  localesDDD: ['011', '016', '017', '018'],
  plans: [
    {
      minutes: 30,
      description: 'FaleMais 30',
    },
    {
      minutes: 60,
      description: 'FaleMais 60',
    },
    {
      minutes: 120,
      description: 'FaleMais 120',
    },
  ],
};
