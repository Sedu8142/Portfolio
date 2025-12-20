import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '../stores/auth';

import Login from '@/components/login.vue';
import Profile from '@/components/profile.vue';
import Showcase from '@/components/showcase.vue';
import Contact from '@/components/contact.vue';
import Creative from '@/components/creative.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/showcase', component: Showcase, meta: { requiresAuth: true } },
  { path: '/contact', component: Contact, meta: { requiresAuth: true } },
  { path: '/creative', component: Creative, meta: { requiresAuth: true } }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

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


export default router

