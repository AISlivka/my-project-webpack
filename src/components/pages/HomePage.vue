<template>
  <CHeader></CHeader>
  {{ $t('title') }}
  <div>
    <RouterLink :to="{ name: ROUTE_NAMES.ABOUT_PAGE }">
      СТРАНИЦА ABOUT
    </RouterLink>
  </div>
  <!-- <div>
    <RouterLink to="/login-page"> СТРАНИЦА LOGIN </RouterLink>
  </div>
  <div>
    <RouterLink to="/dashboard"> СТРАНИЦА DASHBOARD </RouterLink>
  </div>
  <div>
    <RouterLink to="/dashboard/movies"> СТРАНИЦА DASHBOARD/MOVIES </RouterLink>
  </div> -->

  <!-- <div class="home-page">
    <h2>Fetch API</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedFetchApi" />
      <button @click="submitJsonFetchApi">submitJsonFetchApi</button>
      <button @click="submitFormFetchApi">submitFormFetchApi</button>
    </div>
    <h2>Axios</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedAxios" />
      <button @click="submitJsonAxios">submitJsonAxios</button>
      <button @click="submitFormAxios">submitFormAxios</button>
    </div>
    <h2>useFetch</h2>
    <div class="home-page__buttons">
      <input type="file" @input="onImageUploadedUseFetch" />
      <button @click="submitJsonUseFetch">submitJsonUseFetch</button>
      <button @click="submitFormUseFetch">submitFormUseFetch</button>
    </div>
    <h2>UseFetchInterceptor</h2>
    <div class="home-page__buttons">
      <button @click="submitUseFetchInterceptor">
        submitUseFetchInterceptor
      </button>
      <button @click="submitAxiosInterceptor">submitAxiosInterceptor</button>
    </div>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
import CHeader from '@/components/CHeader/CHeader.vue'
import jsonPackage from '/package.json'
import axios from 'axios'
import { useFetch } from '@vueuse/core'
import { ROUTE_NAMES } from '@/constants/RouteNames'

const formData = ref(jsonPackage)

// interceptors
const submitAxiosInterceptor = async () => {
  const formData = new URLSearchParams()
  formData.append('name', 'Andrey')
  formData.append('surname', 'Slivka')

  axios.interceptors.request.use(
    (config) => {
      const formData = new URLSearchParams(config.data)
      formData.set('name', 'Adriano')
      config.data = formData
      alert('name изменен: ' + formData)
      return config
    },
    (error) => {
      console.log('Ошибка запроса:', error)
      return Promise.reject(error)
    },
  )

  axios.interceptors.response.use(
    (response) => {
      response.value = 'Данные в пути'
      alert('axios.interceptors.response сработал: ' + response.value)
      return response
    },
    (error) => {
      console.log('Ошибка запроса:', error)
      return Promise.reject(error)
    },
  )

  try {
    const response = await axios.post(
      'http://localhost:3001/form-content',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    alert('Форма Axios отправлена')
  } catch (error) {
    console.error('Ошибка Axios формы:', error)
  }
}

const submitUseFetchInterceptor = async () => {
  const { statusCode } = await useFetch(
    'http://localhost:3001/form-content',
    {
      body: new URLSearchParams({
        name: 'Andrey',
        surname: 'Slivka',
      }),
    },
    {
      beforeFetch({ options }) {
        options.body.set('name', 'Adriano')
        options.headers = {
          ...options.headers,
          ['Content-Type']: 'application/x-www-form-urlencoded',
        }
        alert('beforeFetch сработал: заменен name')
        return { options }
      },
      afterFetch({ response }) {
        response.value = 'Данные в пути'
        alert('afterFetch сработал: ' + response.value)
        return { response }
      },
    },
  ).post()
  if (statusCode.value === 200) {
    alert('Данные получены')
  } else {
    console.error('Ошибка useFetch формы:', error)
  }
}

// useFetch
const submitFormUseFetch = async () => {
  const { statusCode } = await useFetch(
    'http://localhost:3001/form-content',
    {
      body: new URLSearchParams({
        name: 'Andrey',
        surname: 'Slivka',
      }),
    },
    {
      beforeFetch({ options }) {
        options.headers = {
          ...options.headers,
          ['Content-Type']: 'application/x-www-form-urlencoded',
        }
        return { options }
      },
    },
  ).post()
  if (statusCode.value === 200) {
    console.log('Форма useFetch отправлена')
  } else {
    console.error('Ошибка useFetch формы:', error)
  }
}

const submitJsonUseFetch = async () => {
  const { statusCode } = await useFetch(
    'http://localhost:3001/form-json',
    {
      body: JSON.stringify(formData.value),
    },
    {
      beforeFetch({ options }) {
        options.headers = {
          ...options.headers,
          ['Content-Type']: 'application/json',
        }
        return { options }
      },
    },
  ).post()
  if (statusCode.value === 200) {
    console.log('json useFetch отправлена')
  } else {
    console.error('Ошибка useFetch json:', error)
  }
}

const onImageUploadedUseFetch = async (event) => {
  const img = event.target.files[0]
  const formData = new FormData()

  formData.append('image', img)

  const { statusCode } = await useFetch('http://localhost:3001/upload', {
    body: formData,
  }).post()
  if (statusCode.value === 200) {
    console.log('Image useFetch отправлена')
  } else {
    console.error('Ошибка useFetch image:', error)
  }
}

// Fetch API
const submitFormFetchApi = async () => {
  const formData = new URLSearchParams()
  formData.append('name', 'Andrey')
  formData.append('surname', 'Slivka')

  try {
    const response = await fetch('http://localhost:3001/form-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
    console.log('Форма fetch API отправлена')
  } catch (error) {
    console.error('Ошибка fetch API формы:', error)
  }
}

const submitJsonFetchApi = async () => {
  try {
    const response = await fetch('http://localhost:3001/form-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    })
    console.log('json fetch API отправлен:', jsonPackage.name)
  } catch (error) {
    console.error('Ошибка fetch API json:', error)
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
    })
    console.log('Файл fetch API отправлен:', img.name)
  } catch (error) {
    console.error('Ошибка fetch API image:', error)
  }
}

// axios

const submitFormAxios = async () => {
  const formData = new URLSearchParams()
  formData.append('name', 'Andrey')
  formData.append('surname', 'Slivka')

  try {
    const response = await axios.post(
      'http://localhost:3001/form-content',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    console.log('Форма Axios отправлена')
  } catch (error) {
    console.error('Ошибка Axios формы:', error)
  }
}

const submitJsonAxios = async () => {
  try {
    const response = await axios.post(
      'http://localhost:3001/form-json',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log('json Axios отправлен:', jsonPackage.name)
  } catch (error) {
    console.error('Ошибка Axios json:', error)
  }
}

const onImageUploadedAxios = async (event) => {
  try {
    const img = event.target.files[0]
    const formData = new FormData()
    formData.append('image', img)

    const response = await axios.post('http://localhost:3001/upload', formData)
    console.log('Файл Axios отправлен:', img.name)
  } catch (error) {
    console.error('Ошибка Axios image:', error)
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
