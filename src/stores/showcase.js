import { defineStore } from "pinia";

export const useShowcaseStore = defineStore('showcase', {
  state: () => ({
    projects: [
      {
        title: 'PharmAssist', 
        description: 'A smart medicine storage solution with integrated IoT features, designed to assist elderly users in managing their medications. The system monitors medicine intake, maintains detailed logs, and triggers alarms to notify users according to their prescribed schedules, promoting adherence and safety.', 
        image: new URL('../assets/PharmAssist.jpeg', import.meta.url).href,
        alt: 'PharmAssist Image',
        status: 'done'
      },
      {
        title: 'Breasy', 
        description: 'A portable, solar-powered nebulizer paired with a health monitoring application. Breasy tracks and logs vital data such as heart rate and session duration during medication, providing users with insights into their respiratory health while ensuring energy-efficient, on-the-go usability.', 
        image: new URL('../assets/Breasy.png', import.meta.url).href,
        alt: 'Breasy Image',
        status: 'done'
      },
      {
        title: 'Tips and Eats', 
        description: 'A social media platform tailored for food enthusiasts, connecting people who love cooking or exploring new cuisines. Users can share recipes, discover culinary tips, and engage with a community of like-minded food hobbyists, fostering interaction and inspiration around food experiences.', 
        image: new URL('../assets/TipsAndEats.png', import.meta.url).href,
        alt: 'Tips and Eats Image',
        status: 'done'
      },
      {
        title: 'Finance Tracker', 
        description: 'A web-based personal finance management tool that helps users track their income and expenses. The app computes remaining funds in real-time and visualizes spending patterns through interactive charts, categorized by type and date. This enables users to analyze their financial habits, make informed budgeting decisions, and gain better control over their finances.', 
        image: new URL('../assets/financeTracker.png', import.meta.url).href,
        alt: 'Finance Tracker Image',
        status: 'done'
      },
    ]
  })
})