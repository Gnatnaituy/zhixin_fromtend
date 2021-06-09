import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home"
import Main from "../views/Main"
import ContactUs from "../views/ContactUs"

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    },
    {
      path: '/:typePath/:subTypeId',
      name: 'Main',
      component: Main,
    },
    {
      path: '/:typePath/:subTypeId/:moduleId',
      name: 'Module',
      component: Main,
    }
  ]
})

export default router
