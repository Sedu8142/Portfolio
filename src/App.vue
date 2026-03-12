<script setup>
import Navbar from '@/components/navbar.vue'

</script>

<template>
  <Navbar></Navbar>
  <div class="viewRouter"><router-view /></div>
</template>

<style>
* {
  font-family: 'Audiowide', sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  background-image: url('./assets/bgImg.jpg');
  background-position: center;
  background-size: cover;
}

.viewRouter {
  margin: 0;
  width: 100%;
  height: 90vh;
  box-sizing: border-box;
}
</style>