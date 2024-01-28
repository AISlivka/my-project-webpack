<template>
  <CHeader></CHeader>
  <RouterLink to="/about"> СТРАНИЦА ABOUT </RouterLink>

  <div class="home-page">HOME PAGE COMPONENT</div>
  <div class="home-page__buttons" style="padding: 24px;">
    <input type="file" @input="onImageUploaded">
    <button @click="submitJson">application/json</button>
    <button @click="submitForm">application/x-www-form-urlencoded</button>
  </div>
</template>

<script setup>
import CHeader from "@/components/CHeader/CHeader.vue"
import jsonPackage from '/package.json'
import { ref } from 'vue';

const formData = ref(jsonPackage);

const submitJson = async () => {
  try {
    const response = await fetch('http://localhost:3001/form-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });
    console.log('json отправлен:', jsonPackage.name);
  } catch (error) {
    console.error('Ошибка json:', error);
  }
}

const onImageUploaded = async (event) => {
  try {
    const img = event.target.files[0]
    const formData = new FormData()
        
    formData .append('image', img)

    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });
    console.log('Файл отправлен:', img.name);
  } catch (error) {
    console.error('Ошибка image:', error);
  }
}

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
