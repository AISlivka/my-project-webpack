<template>
  <div class="test-page">TEST PAGE COMPONENT</div>
  <div>{{ $t(`testPage`) }}</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useI18n } from "vue-i18n"
const i18n = useI18n()
i18n.locale.value = "en"
const translate = i18n.t("testPage")
onMounted(() => {
  console.log(translate)
})
// console.log(translate)
</script>
