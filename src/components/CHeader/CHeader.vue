<template>
  <div class="header">
    <div class="header-nav">
      <RouterLink :to="{ name: ROUTE_NAMES.HOME_PAGE }">
        {{ $t('homePage') }}
      </RouterLink>
      <RouterLink :to="{ name: ROUTE_NAMES.ABOUT_PAGE }">
        {{ $t('aboutPage') }}
      </RouterLink>
    </div>
    <!-- <LanguageSwitcher /> -->
    <div class="header__btns">
      <button class="header-button" @click="switchLangRu">RU</button>
      <button class="header-button" @click="switchLangEn">EN</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ROUTE_NAMES } from '@/constants/RouteNames'
// import LanguageSwitcher from "@/components/CHeader/LanguageSwitcher.vue"
const { locale } = useI18n({ useScope: 'global' })

const switchLangRu = () => {
  locale.value = 'ru'
  localStorage.setItem('lang', locale.value)
}

const switchLangEn = () => {
  locale.value = 'en'
  localStorage.setItem('lang', locale.value)
}
</script>

<style>
.header {
  background: #f6f6f6;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 25%);
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header__btns {
  display: flex;
  column-gap: 16px;
}

.header-button {
  cursor: pointer;
  border: 1px solid grey;
  padding: 4px 12px;
  transition: 0.2s ease-in-out;
}

.header-button:hover {
  background: grey;
}

.header-button:active {
  background: limegreen;
}

.header-nav {
  display: flex;
  column-gap: 12px;
}
</style>
