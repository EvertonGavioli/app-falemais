const Plan = {
  listPlans: [
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

  plansOptions: function() {
    return this.listPlans.map(plan => ({
      value: plan.minutes,
      label: plan.description,
    }));
  },
};

export default Plan;
