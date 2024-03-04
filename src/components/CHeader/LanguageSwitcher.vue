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
import Tr from "@/i18n/translation"

const { locale } = useI18n()

const supportedLocales = Tr.supportedLocales

const switchLanguage = async (event: any) => {
  const newLocale = event.target.value

  await Tr.switchLanguage(newLocale)
}

console.log(supportedLocales)
</script>
