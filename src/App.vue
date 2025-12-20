<script setup>
import navbar from '@/components/navbar.vue'

</script>

<template>
  <navbar></navbar>
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
  width: 100vw;
  height: 90vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>