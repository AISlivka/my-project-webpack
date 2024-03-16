// import { defineStore } from 'pinia'
// import { useRoute, useRouter } from 'vue-router'

// export const useAuthMiddleware = defineStore({
//   id: 'auth',
//   state: () => ({
//     isAuthenticated: false,
//     isGuest: false,
//   }),
//   actions: {
//     checkAuthAndGuestStatus() {
//       const route = useRoute()
//       const router = useRouter()

//       if (this.isAuthenticated && this.isGuest) {
//         if (route.name === 'auth') {
//           router.push('/dashboard')
//         }
//       } else if (!this.isAuthenticated && !this.isGuest) {
//         if (route.name !== 'auth') {
//           router.push('/login')
//         }
//       } else if (!this.isAuthenticated && this.isGuest) {
//         if (route.name !== 'guest') {
//           router.push('/guest')
//         }
//       }
//     },
//   },
// })
