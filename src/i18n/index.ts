import { createI18n } from 'vue-i18n'
import { I18nLocale } from '@/assets/locales/I18nLocale'
import { ru } from '@/assets/locales/ru'
import { en } from '@/assets/locales/en'

export default createI18n<[I18nLocale], 'ru' | 'en'>({
  locale: 'ru',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages: { en, ru },
})
