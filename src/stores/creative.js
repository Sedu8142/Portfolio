import { defineStore } from "pinia";

export const useCreativeStore = defineStore('creative', {
  state: () => ({
    sliderIndex: 0,
    contents: [
      {
        title: 'My Academics', 
        description: 'I am a 4th-year Computer Engineering student at the Polytechnic University of the Philippines, on track for graduation and recognized as a candidate for Latin honors due to my strong academic performance. I previously completed my studies at the Institute of Technology within the same university, consistently excelling and graduating with a GWA of 1.38. Throughout my academic journey, I often took on leadership roles in group activities, including our thesis project, demonstrating my ability to guide teams, collaborate effectively, and apply both theoretical and practical engineering knowledge.', 
        image: new URL('../assets/academics.jpg', import.meta.url).href,
        index: 0
      },
      {
        title: 'Sports I like', 
        description: 'I have a strong passion for sports and staying active. I enjoy playing team sports such as basketball and volleyball, which allow me to develop teamwork and strategic thinking. I also enjoy running, which helps me maintain discipline, endurance, and focus. Sports play an important role in keeping me energized, balanced, and motivated both physically and mentally.', 
        image: new URL('../assets/sports.png', import.meta.url).href,
        index: 1
      },
      {
        title: 'Music Taste', 
        description: 'I have a deep appreciation for music and enjoy exploring different genres. I find inspiration in Christian songs, such as 10,000 Reasons, and also enjoy Original Pilipino Music (OPM) that reflects Filipino culture. Upbeat and lively tracks energize me and lift my mood, making music an important part of my daily life and personal expression.',
        image: new URL('../assets/music.webp', import.meta.url).href,
        index: 2
      },
      {
        title: 'Ambition in Life', 
        description: 'I am driven by the ambition to live a prosperous and peaceful life guided by my faith in God. I aspire to build a successful career in technology and aim to one day establish my own tech company. My goals are fueled by a desire for personal growth, meaningful contribution, and making a positive impact through innovation and dedication.', 
        image: new URL('../assets/ambition.jpg', import.meta.url).href,
        index: 3
      },
    ]
  }),

  actions: {
    slide(index) {
      this.sliderIndex = index
    }
  }
})
