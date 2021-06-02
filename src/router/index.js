import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home"
import Main from "../views/Main"
import About from "../views/About"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/:moduleType',
      name: 'Main',
      component: Main,
    }
  ]
})

export default router
