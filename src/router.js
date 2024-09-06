import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import TireSearch from './views/TireSearch.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Home - Car Mechanic Shop' } },
  { path: '/services', component: Services, meta: { title: 'Services - Car Mechanic Shop' } },
  { path: '/tire-search', component: TireSearch, meta: { title: 'Tire Search - Car Mechanic Shop' } },
  { path: '/about', component: About, meta: { title: 'About Us - Car Mechanic Shop' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact Us - Car Mechanic Shop' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Car Mechanic Shop'
  next()
})

export default router