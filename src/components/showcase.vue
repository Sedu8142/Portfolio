<script setup>
import { useShowcaseStore } from '@/stores/showcase';

const showcase = useShowcaseStore()


</script>

<template>
  <div class="main-container">
    <div class="mainDiv">
      <h1>Projects</h1>
      <div class="mainProject">
        <div class="projectContainer" v-for="project in showcase.projects">
          <div class="projectContent">
            <h2>{{project.title}}</h2>
          </div>
          <div class="projectDetails">
            <div class="projectDescription">
              <p>{{ project.description }}</p>
              <div class="status">
                <p><span style="font-size: 1em; color: #3B82F6;">Status:  </span>{{ project.status }}</p>
                <img v-if="project.status == 'done'" src="../assets/done.svg" alt="">
              </div>
            </div>
            <div class="imgContainer">
              <img :src="project.image" :alt="project.alt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainDiv {
  width: 90%;
  height: 90%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.159);
}

h1 {
  font-size: 3rem;
  margin: 0;
  box-sizing: border-box;
  color: #3B82F6;
}

.mainProject {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.projectContainer {
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  color: whitesmoke;
  overflow-y: hidden;
  padding: 0 1% 0 1%;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  border-radius: 10px;
  transition: box-shadow 0.5s ease-out, height 0.5s ease-out;
  box-shadow: 0 0 10px 1px inset black;
}

.projectContainer:hover {
  height: 80%;
  transition: box-shadow 0.5s ease-out, height 0.5s ease-out;
  box-shadow: 0 0 10px 1px whitesmoke;
}

.projectContent {
  width: 100%;
  display: flex;
  justify-content: center;
}

.projectContainer h2 {
  position: relative;
  right: 0;
  font-size: 1.75rem;
  font-weight: lighter;
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  margin: 0;
  transition: color 0.5s ease-out, right 0.5s ease-out;
}

.projectContainer:hover h2 {
  position: relative;
  right: 40%;
  color: #3B82F6;
  text-align: start;
  transition: color 0.5s ease-out, right 0.5s ease-out;
}

.projectContainer:hover img {
  bottom: 15%;
  transition: bottom 0.5s ease-out;
}

.projectContainer img {
  z-index: 1;
  position: relative;
  bottom: 0%;
  transition: bottom 0.5s ease-out;
  border-radius: 10px;
}

.projectContainer img:active {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 80vh;
  border-radius: 0px;
}

.projectDetails {
  width: 100%;
  height: 100%;
  display: flex;
}

.projectDescription {
  width: 50%
}

.imgContainer {
  width: 50%;
  display: flex;
  justify-content: center;
}

.imgContainer img {
  width: auto;
  height: 40vh;
  object-fit: cover;
}

.projectDescription p {
  font-family: 'Poppins', sans-serif;
}

.status {
  display: flex;
  gap: 0.5%;
}

</style>