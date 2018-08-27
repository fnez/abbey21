import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Furniture from '@/components/Furniture'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/products',
      name: 'Products',
      component: Contact
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
