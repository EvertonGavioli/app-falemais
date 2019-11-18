const Tariff = {
  listTariffs: [
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

  getTariff(origin, destiny) {
    const tariff = this.listTariffs.find(
      tff => tff.origin === origin && tff.destiny === destiny
    );

    if (tariff) {
      return tariff.minute_price;
    }

    return undefined;
  },
};

export default Tariff;
