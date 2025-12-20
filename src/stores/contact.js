import { defineStore } from "pinia";

export const useContactStore = defineStore ('contact', {
  state: () => ({
    socials: [
      {name: 'LinkedIn', link: 'https://www.linkedin.com/in/mark-allen-y-siddayao-43803921b', icon: new URL('../assets/linkedin.webp', import.meta.url).href},
      {name: 'Facebook', link: 'https://www.facebook.com/markallen.siddayao', icon: new URL('../assets/fb.webp', import.meta.url).href}
    ]
  }),
  actions: {
    redirect(link) {
      window.open(link, '_blank');
    }
  }
})