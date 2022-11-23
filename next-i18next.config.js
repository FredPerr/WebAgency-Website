const path = require('path');

module.exports = {
    ns: ['common',],
    defaultNS: 'common',
    fallbackLng: ['en', 'fr'],
    localePath: path.resolve("./public/locales"),
    reloadOnPrerender: true, // TODO: Set to false in Production mode 
    i18n: {
      defaultLocale: 'fr',
      locales: ['en', 'fr'],
    },
    react: { useSuspense: false },
};