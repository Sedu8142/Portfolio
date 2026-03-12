<script setup>
import {useProfileStore} from '@/stores/profile'


const profile = useProfileStore()

</script>

<template>
  <div class="main-container">
    <div class="content">
      <div class="descContainer">
        <h1>{{profile.name}}</h1>
        <p style="font-size: 25px;">{{ profile.title }}</p>
        <p style="font-size: 18px; padding-right: 100px; margin-top: 20px;">{{ profile.description }}</p>
        <a class="resume-link" href="/Resume.pdf" target="_blank" style="width: 30%;">
          <button class="resume-button"><img src="../assets/resumeLogo.svg" alt="resume logo">Download Resume</button>
        </a>
      </div>
      <div class="mainPhotoContainer">
        <div class="photoContainer">
          <img :src="profile.photo" :alt="profile.alt">
        </div>
      </div>
    </div>
    <div class="content">
      <div class="skillContainer">
          <h3 style="font-size: 30px; margin-top: 0;">My <span style="color: #3B82F6; font-size: 1em;">Skills:</span></h3>
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
        </div>
    </div>
  </div>
  
  
</template>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  color: whitesmoke;
}


.main-container {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  gap: 30px;

}

.content {
  display: flex;
  width: 90%;
  min-height: 85%;
  border-radius: 10px;
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
  justify-content: space-evenly;
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
  flex-wrap: wrap;
  gap: 20px;
}

.skillContainer {
  width: 100%;
  padding: 20px;
}

.infoDivs {
  border-radius: 10px;
  flex: 1;
  padding: 2%;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  box-shadow: 0 0 15px 3px inset black;
}

.infoDivs:hover {
  transform: scale(1.02);
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
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

.resume-link {
  text-decoration: none;
}

.resume-button {
  background-color: #3B82F6;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.resume-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 5px 5px 0.5px black;
}
</style>
