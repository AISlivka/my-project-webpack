<template>
  <div class="header">
    <h1>{{ $t("title") }}</h1>
    <button @click="switchLang">{{ $t("switchLang") }}</button>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { locale } = useI18n({ useScope: "global" })

const switchLang = () => {
  locale.value === "en" ? (locale.value = "ru") : (locale.value = "en")
  localStorage.setItem("lang", locale.value)
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
</style>
