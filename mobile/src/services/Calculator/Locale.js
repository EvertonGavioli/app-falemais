const Locale = {
  listLocales: ['011', '016', '017', '018'],

  localeOptions: function() {
    return this.listLocales.map(locale => ({
      value: locale,
      label: locale,
    }));
  },
};

export default Locale;
