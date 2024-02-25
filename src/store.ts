import { createApp } from "vue"
import { createStore } from "vuex"

// Create a new store instance.
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

const app = createApp({
  /* your root component */
})

// Install the store instance as a plugin
app.use(store)
