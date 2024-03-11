import { createI18n } from 'vue-i18n'
import { I18nLocale } from '@/assets/locales/I18nLocale'
import { ru } from '@/assets/locales/ru'
import { en } from '@/assets/locales/en'

let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, '$1')

export default createI18n<[I18nLocale], 'en' | 'ru'>({
  locale: locale.trim().length && locale != '/' ? '/' + locale : 'ru',
  globalInjection: true,
  legacy: false,
  messages: { en, ru },
})
