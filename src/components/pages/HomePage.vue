<template>
  <CHeader></CHeader>
  <RouterLink to="/about"> СТРАНИЦА ABOUT </RouterLink>
  <div class="image__list">
    <div class="image">
      <img :src="imagePng" alt="png" />
    </div>
    <div class="image">
      <img :src="imageJpeg" alt="jpeg" />
    </div>
    <div class="image">
      <iconSvg></iconSvg>
    </div>
  </div>

  <div class="home-page">HOME PAGE COMPONENT</div>
</template>

<script setup>
import CHeader from '@/components/CHeader/CHeader.vue';
import imagePng from '@/assets/images/image.png';
import imageJpeg from '@/assets/images/image.jpeg';
import iconSvg from '@/assets/images/icon.svg?component';
</script>

<style>
.image__list {
  display: flex;
  gap: 24px;
}

.image {
  width: 100px;
  height: auto;
}

.image img {
  width: 100%;
  height: 100%;
}
</style>
