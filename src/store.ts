import { createApp } from 'vue'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {
        loggedIn: false,
        isSubscribed: false,
      },
    }
  },
  getters: {
    auth(state) {
      return state.user
    },
  },
})

const app = createApp({})

app.use(store)
