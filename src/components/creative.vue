<script setup>
import { computed } from 'vue'
import { useCreativeStore } from '@/stores/creative'

const creative = useCreativeStore()

const sliderStyle = computed(() => ({
  left: `${creative.sliderIndex * 25 + 2}%`,
  transition: 'left 0.25s ease-out'
}))
</script>


<template>
  <div class="mainDiv">
    <h1>Get to know me more</h1>
    <div class="content">
      <div class="sectionNav">
        <div class="slider" :style="sliderStyle"></div>
        <button class="navButton" @click="creative.slide(0)">Academics</button>
        <button class="navButton" @click="creative.slide(1)">Sports</button>
        <button class="navButton" @click="creative.slide(2)">Music</button>
        <button class="navButton" @click="creative.slide(3)">Ambition</button>
      </div>
      <div class="mainContent">
        <div class="perContent" v-for="content in creative.contents">
          <div class="perContent2" v-if="creative.sliderIndex == content.index">
            <div class="description">
              <h2>{{content.title}}</h2>
              <p>{{ content.description }}</p>
            </div>
            <div class="photo">
              <img :src="content.image" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped> 
  h1 {
    font-size: 3rem;
    margin: 0;
    box-sizing: border-box;
    color: #3B82F6;
  }

  .mainDiv {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    width: 90%;
    height: 90%;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
    border: 1px solid rgba(255, 255, 255, 0.159);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    gap: 5%;
  }

  .slider {
    position: absolute;
    height: 100%;
    width: 20%;
    left: 2%;
    border-radius: 10em;
    box-shadow: 0 0 10px 1px black inset;
    transition: left 0.25s ease-out;
  }

  .sectionNav {
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    margin-top: 1%;
  }

  .sectionNav button {
    background-color: transparent;
    border: none;
    color: whitesmoke;
    cursor: pointer;
    width: 25%;
  }

  .sectionNav button:focus {
    color: #3B82F6;
  }

  .mainContent {
    width: 100%;
    height: 90%;
    display: flex;
    overflow: hidden;
  }

  .perContent {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 70%;
    height: 80%;
    box-shadow: 0 0 10px 1px black inset;
    padding: 2%;
    box-sizing: border-box;
  }

  .perContent2 {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 5%;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    text-align: justify;
  }

  .description {
    width: 60%;
    color: whitesmoke;
  }

  .photo {
    width: 40%;
    height: 50vh;
    display: block;
    margin: auto;
  }

  img {
    height: 100%;
    max-width: 100%;
    display: block;
    margin: auto;
  }
  

</style>