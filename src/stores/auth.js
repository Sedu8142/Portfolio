import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    username: "Test",
    password: "Test123"
  }),
  actions: {
    login() {
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout() {
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn', 'false')
    }
  }
});
