<template>
  <div class="language-select">
    <select @change="switchLanguage">
      <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale">
        {{ $t(`locale.${sLocale}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n"
// import Trans from "@/i18n/translation"

const { locale } = useI18n({ useScope: "global" })

const Trans = {
  get supportedLocales() {
    return "en,ru".split(",")
  },

  set currentLocale(newLocale: any) {
    locale.value = newLocale
  },

  async switchLanguage(newLocale: any) {
    Trans.currentLocale = newLocale
    document.querySelector("html").setAttribute("lang", newLocale)
    localStorage.setItem("user-locale", newLocale)
  },
}

const supportedLocales = Trans.supportedLocales

const switchLanguage = async (event: any) => {
  const newLocale = event.target.value

  await Trans.switchLanguage(newLocale)
}

console.log(supportedLocales)
</script>
