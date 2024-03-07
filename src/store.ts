// stores/counter.js

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return {
//       user: {
//         loggedIn: false,
//         isSubscribed: false,
//       },
//     }
//   },
//   getters: {
//     auth(state) {
//       return state.user
//     },
//   },
// })

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Иван')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

// import { createApp } from 'vue'
// import { createStore } from 'vuex'

// export const store = createStore({
//   state() {
//     return {
//       user: {
//         loggedIn: false,
//         isSubscribed: false,
//       },
//     }
//   },
//   getters: {
//     auth(state) {
//       return state.user
//     },
//   },
// })

// const app = createApp({})

// app.use(store)
