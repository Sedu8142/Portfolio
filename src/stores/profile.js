import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: "Mark Allen Siddayao",
    title: "Computer Engineering Graduate - Cum Laude",
    description: "Computer Engineering graduate specializing in full-stack web development. Experienced in building modern web applications using HTML, CSS, JavaScript, Vue, Java, Python, and PHP, with database integration through MySQL and Firebase. Passionate about developing scalable software systems and integrating web technologies with emerging platforms such as IoT.",
    location: "Marikina City, NCR",
    photo: new URL('../assets/MyPhoto.jpg', import.meta.url).href,
    alt: "php icon",
    stack: {
      frontEnd: [
        { name: "HTML", icon: new URL('../assets/html.png', import.meta.url).href, alt: "html icon" },
        { name: "CSS", icon: new URL('../assets/css.png', import.meta.url).href, alt: "css icon" },
        { name: "JavaScript", icon: new URL('../assets/javascript.png', import.meta.url).href, alt: "javascript icon" },
        { name: "Vue", icon: new URL('../assets/vue.png', import.meta.url).href, alt: "vue icon" }
      ],
      backEnd: [
        { name: "Java", icon: new URL('../assets/java.png', import.meta.url).href, alt: "java icon" },
        { name: "Python", icon: new URL('../assets/python.png', import.meta.url).href, alt: "python icon" },
        { name: "PHP", icon: new URL('../assets/php.svg', import.meta.url).href, alt: "php icon" }
      ],
      database: [
        { name: "MySQL", icon: new URL('../assets/mysql.png', import.meta.url).href, alt: "mysql icon" },
        { name: "Firebase", icon: new URL('../assets/firebase.png', import.meta.url).href, alt: "firebase icon" },
        { name: "Derby", icon: new URL('../assets/derby.png', import.meta.url).href, alt: "derby icon" }
      ],
    }
  })
});
