import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from '../stores/auth';

import Login from '@/components/login.vue';
import Profile from '@/components/profile.vue';
import Showcase from '@/components/showcase.vue';
import Contact from '@/components/contact.vue';
import Creative from '@/components/creative.vue';
import Showcase2 from '@/components/showcase2.vue';

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile},
  { path: '/showcase', component: Showcase},
  { path: '/showcase2', component: Showcase2},
  { path: '/contact', component: Contact},
  { path: '/creative', component: Creative}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

/** 
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    // Protect routes
    next('/login')
  } else if (to.path === '/login' && auth.isLoggedIn) {
    // Prevent logged-in users from going back to login
    next('/profile')
  } else {
    // Allow navigation
    next()
  }
})
*/


export default router

