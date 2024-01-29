<template>
  <CHeader></CHeader>
  <RouterLink to="/about"> СТРАНИЦА ABOUT </RouterLink>

  <div class="home-page">
    <h2>Fetch API</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedFetchApi">
      <button @click="submitJsonFetchApi">submitJsonFetchApi</button>
      <button @click="submitFormFetchApi">submitFormFetchApi</button>
    </div>
    <h2>Axios</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedAxios">
      <button @click="submitJsonAxios">submitJsonAxios</button>
      <button @click="submitFormAxios">submitFormAxios</button>
    </div>
    <!-- <h2>useFetch</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedUseFetch">
      <button @click="submitJsonUseFetch">submitJsonUseFetch</button>
      <button @click="submitFormUseFetch">submitFormUseFetch</button>
    </div> -->
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import CHeader from "@/components/CHeader/CHeader.vue"
import jsonPackage from '/package.json'
import axios from 'axios';
// import { useFetch } from '@vueuse/core';

const formData = ref(jsonPackage);

// Fetch API
const submitFormFetchApi = async () => {
  const formData = new URLSearchParams();
  formData.append('name', 'Andrey');
  formData.append('surname', 'Slivka');

  try {
    const response = await fetch('http://localhost:3001/form-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    console.log('Форма fetch API отправлена');
  } catch (error) {
    console.error('Ошибка fetch API формы:', error);
  }
};

const submitJsonFetchApi = async () => {
  try {
    const response = await fetch('http://localhost:3001/form-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });
    console.log('json fetch API отправлен:', jsonPackage.name);
  } catch (error) {
    console.error('Ошибка fetch API json:', error);
  }
}

const onImageUploadedFetchApi = async (event) => {
  try {
    const img = event.target.files[0]
    const formData = new FormData()
        
    formData.append('image', img)

    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });
    console.log('Файл fetch API отправлен:', img.name);
  } catch (error) {
    console.error('Ошибка fetch API image:', error);
  }
}

// axios

const submitFormAxios = async () => {
  const formData = new URLSearchParams();
  formData.append('name', 'Andrey');
  formData.append('surname', 'Slivka');

  try {
    const response = await axios.post('http://localhost:3001/form-content', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log('Форма Axios отправлена');
  } catch (error) {
    console.error('Ошибка Axios формы:', error);
  }
};

const submitJsonAxios = async () => {
  try {
    const response = await axios.post('http://localhost:3001/form-json', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log('json Axios отправлен:', jsonPackage.name);
  } catch (error) {
    console.error('Ошибка Axios json:', error);
  }
}

const onImageUploadedAxios = async (event) => {
  try {
    const img = event.target.files[0];
    const formData = new FormData();
    formData.append('image', img);

    const response = await axios.post('http://localhost:3001/upload', formData);
    console.log('Файл Axios отправлен:', img.name);
  } catch (error) {
    console.error('Ошибка Axios image:', error);
  }
}

// useFetch


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

.home-page {
  padding: 24px;
  margin: 24px; 
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 50%);
  border-radius: 16px;
  max-width: 800px;
}

.home-page__buttons {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
