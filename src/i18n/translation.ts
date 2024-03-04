import i18n from '@/i18n'

const Trans = {
  get supportedLocales() {
    return 'en,ru'.split(',')
  },

  set currentLocale(newLocale: 'en' | 'ru') {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale: 'en' | 'ru') {
    Trans.currentLocale = newLocale
    document.querySelector('html').setAttribute('lang', newLocale)
  },

  async routeMiddleware(to: any, _from: any, next: any) {
    const paramLocale = to.params.locale
    console.log(paramLocale)

    // if (!Trans.isLocaleSupported(paramLocale)) {
    //   return next(Trans.guessDefaultLocale())
    // }

    await Trans.switchLanguage(paramLocale)

    return next()
  },
}

export default Trans
