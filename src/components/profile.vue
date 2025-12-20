<script setup>
import {useProfileStore} from '@/stores/profile'


const profile = useProfileStore()

</script>

<template>
  <div class="content">
    <div class="descContainer">
      <h1>{{profile.name}}</h1>
      <p>{{ profile.title }}</p>
      <p>{{ profile.location }}</p>
      <p>{{ profile.description }}</p>
      <div class="skillContainer">
        <div>
          <h3>My <span style="color: #3B82F6; font-size: 1em;">Skills:</span></h3>
        </div>
        <div class="lower-container">
          <div class="infoDivs">
            <p>Front End:</p>
            <li><ul v-for="stack in profile.stack.frontEnd"><img :src="stack.icon" :alt="stack.alt">{{stack.name}}</ul></li>
          </div>
          <div class="infoDivs">
            <p>Back End:</p>
            <li><ul v-for="stack in profile.stack.backEnd"><img :src="stack.icon" :alt="stack.alt">{{stack.name}}</ul></li>
          </div>
          <div class="infoDivs">
            <p>Database:</p>
            <li><ul v-for="stack in profile.stack.database"><img :src="stack.icon" :alt="stack.alt">{{stack.name}}</ul></li>
          </div>
        </div>
        <p>Download my <span><a href="/MY-CV.pdf" target="_blank" style="font-size: 1.25em; color: #3B82F6;">Resume</a></span></p>
      </div>
    </div>
    <div class="mainPhotoContainer">
      <div class="photoContainer">
        <img :src="profile.photo" :alt="profile.alt">
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  color: whitesmoke;
}

.content {
  display: flex;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.159);
}

.descContainer {
  padding: 1% 2% 2% 2%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  color: #3B82F6;
  font-family: 'Audiowide', sans-serif;
  font-style: italic;
  margin-top: 0;
}

p {
  font-size: 1.3rem;
  margin: 0rem;
  transition: color 0.25s ease-out;
}

.mainPhotoContainer {
  display: flex;
  justify-content: end;
  width: 55%;
  height: 100%;
}

.photoContainer {
  width: 100%;
  height: 100%;
}

.photoContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lower-container {
  display: flex;
  flex-grow: 1;
  gap: 5%;
  padding: 2%;
}

.infoDivs {
  border-radius: 10px;
  width: 30%;
  padding: 2%;
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  box-shadow: 0 0 15px 3px inset black;
}

.infoDivs:hover {
  transform: scale(1.08);
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  box-shadow: 0 0 10px 1px whitesmoke;
  color: whitesmoke;
}

.infoDivs:hover p {
  color: #3B82F6;
  transition: color 0.25s ease-out;
}

.infoDivs li {
  list-style-type: none;
}

ul {
  display: flex;
  gap: 5%;
  align-items: center;
}

ul img {
  height: 1.2em;
  width: auto;
}

.infoDivs p {
  font-family: 'Audiowide', sans-serif;
}

h3 {
  font-size: 1.25rem;
}
</style>
