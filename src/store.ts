// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
// import { ref } from 'vue'

export const useUserStore = defineStore('user-page', {
  state: () => ({
    isLoggedIn: true,
  }),
  actions: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = true
    },
  },
})
