<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const auth = useAuthStore()
const router = useRouter()

const login = () => {
  if(auth.username === username.value && auth.password === password.value){
    auth.login()
    router.push('/profile')
  } else {
    alert("Incorrect Username or Password!")
  }
}
</script>

<template>
  <div class="mainDiv">
    <div class="loginDiv">
      <h1>LOGIN</h1>
      <p>GET TO KNOW ME MORE!</p>
      <div class="mainForm">
        <input type="text" placeholder="Username" v-model="username" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <button type="submit" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.mainDiv {
  width: 100vw;
  height: 110vh;
  background-color: whitesmoke;
  box-sizing: border;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginDiv {
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  padding: 3rem 1rem;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.219), 0 0 30px 20px inset #a5a5a536;
}

.mainForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  text-align: center;
  margin-top: 0;
  font-size: 2rem;
}

p {
  text-align: center;
  margin-top: 0;
  font-size: 1.2rem;
}

input {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
}

input:focus {
  border-color: #2563eb;
  outline: none;
}

button {
  width: 70%;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  padding: 1%;
}

button:hover {
  background: #1e40af;
}

</style>