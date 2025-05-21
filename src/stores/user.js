import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', () => {

  const data = ref({})

  const setUser = (user) => {
    data.value = user
  }

  const setToken = (token) => {
    data.value.token = token
  }

  const setEmail = (email) => {
    data.value.email = email
  }

  const clearUser = () => {
    data.value = {}
    console.log('clearUser')
  }

  return { data, setUser, setToken, setEmail, clearUser }

})
