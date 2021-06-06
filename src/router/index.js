import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home"
import Main from "../views/Main"
import ContactUs from "../views/ContactUs"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/:typePath',
      name: 'Main',
      component: Main,
    }
  ]
})

export default router
