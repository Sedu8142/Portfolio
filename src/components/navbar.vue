<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

/** 
const logout = () => {
  auth.logout()
  router.push('/login')  // redirect to login
}
  */
</script>

<template>
  <nav>
    <div class="title flexItem">
      <h1>MAS | <span style="font-size: 1em; color: #3B82F6;">Portfolio</span></h1>
    </div>
    <div class="navButtons flexItem">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/showcase">Showcase</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/creative">Creative</router-link>
    </div>
    <!--
    <div class="logoutBtn flexItem">
      <button v-if="auth.isLoggedIn" @click="logout">Logout</button>
    </div>
    -->
  </nav>
</template>

<style scoped>
* {
  color: whitesmoke;
  }

nav {
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: black;
}

.title {
  position: relative;
  padding-left: 2%;
  box-sizing: border-box;
}

.flexItem {
  flex-grow: 1;
}

.logoutBtn {
  position: relative;
  padding-right: 2%;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
}

nav a {
  text-decoration: none;
  box-sizing: border-box;
}

button {
  background-color: black;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: black;
  border: 2px solid #3B82F6;
  cursor: pointer;
}

.navButtons {
  display: flex;
  justify-content: space-evenly;
}

.router-link-active {
  border-bottom: 2px solid #3B82F6;
  color: #3B82F6;
}

h1 {
  font-size: 1.5rem;
}
</style>