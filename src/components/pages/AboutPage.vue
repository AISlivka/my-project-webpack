<template>
  <CHeader></CHeader>
  <div class="about-page">ABOUT PAGE COMPONENT</div>
  <RouterLink :to="{ name: ROUTE_NAMES.HOME_PAGE }">
    {{ $t('homePage') }}
  </RouterLink>
</template>

<script setup>
import CHeader from '@/components/CHeader/CHeader.vue'
import { ROUTE_NAMES } from '@/constants/RouteNames'
</script>
