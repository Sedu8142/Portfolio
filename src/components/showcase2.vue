<script setup>
import { useShowcaseStore } from '@/stores/showcase';
import { ref, watch } from 'vue';

const showcase = useShowcaseStore();
const showPopup = ref(false);
const selectedProject = ref(null);
let index = 0;

function nextSlide() {
  let slides = document.querySelector('.popup-image-container');

  if(index < selectedProject.value.imageLibrary.length - 1){
    index++;
    slides.style.transform = `translateX(-${index * 101}%)`;
  }
}

function previousSlide() {
  let slides = document.querySelector('.popup-image-container');

  if(index > 0){
    index--;
    slides.style.transform = `translateX(-${index * 101}%)`;
  }
}


function displayPopup(title) {
  const project = showcase.projects.find(p => p.title === title);
  selectedProject.value = project;
  showPopup.value = true;
}

function closePopup(title) {
  selectedProject.value = null;
  showPopup.value = false;
  index = 0;
}

watch(showPopup, (isOpen) => {
  if(isOpen){
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
})

</script>

<template>
  <div v-if="showPopup" class="popup-container">
    <div class="popup-contents">
      <img src="../assets/close.svg" alt="" class="close-btn" @click="closePopup">
      <h1>{{ selectedProject.title }}</h1>
      <div class="popup-image-div">
        <img src="../assets/previous.svg" alt="" @click="previousSlide" class="previous-btn">
        <div class="main-popup-image-container">
          <div class="popup-image-container">
            <img :src="imageUrl" alt="" v-for="imageUrl in selectedProject.imageLibrary"/>
          </div>
        </div>
        <img src="../assets/next.svg" alt="" @click="nextSlide" class="next-btn">
      </div>
      <p class="project-description-expanded">{{ selectedProject.description }}</p>
    </div>
  </div>
  <div class="main-container">
    <h1>My <span style="font-size: 1em; color: #3B82F6;">Projects</span></h1>
    <div class="project-container">
      <div class="project-cards" v-for="project in showcase.projects">
        <div class="img-container">
          <img :src="project.image" :alt="project.alt">
        </div>
        <div class="btn-container">
          <button class="project-btn" @click="displayPopup(project.title)">
            <h2>{{project.title}}</h2>
          </button>
        </div>
        <div class="description-container">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 30px;
}

h1 {
  text-align: center;
  color: white; 
  font-size: 40px;
  margin: 0;
}

.project-container {
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  overflow: hidden;
}

.project-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 400px;
  height: 500px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.159);
  overflow: hidden;
}

.img-container {
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.img-container img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}

.project-btn h2 {
  font-size: 18px;
  text-align: center;
  color: #3B82F6;
}

.project-btn {
  background-color: transparent;
  box-shadow: 0px 2px 5px 1px black;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  width: 50%;
  height: 60%;
}

.description-container {
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
}

.description-container p {
  color: white;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-align: justify;
}

.popup-container {
  display: flex;
  position: fixed;
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.767);
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.popup-contents {
  width: 70%;
  height: 85vh;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.159);
  padding: 5%;
  box-sizing: border-box;
  overflow-y: scroll;
}

.popup-image-div {
  display: flex;
  justify-content: space-between;
  gap: 1%;
}

.previous-btn, .next-btn {
  cursor: pointer;
  z-index: 2;
}

.main-popup-image-container {
  overflow: hidden;
}

.popup-image-container img {
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

.popup-image-container {
  display: flex;
  gap: 1%;
  transition: transform 0.4s ease;

}

.close-btn {
  cursor: pointer;
  position: fixed;
  top: 8%;
  left: 95%;
}

.project-description-expanded {
  color: white;
  font-family: arial;
}
</style>