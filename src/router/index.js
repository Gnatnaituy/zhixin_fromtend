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
      path: '/product',
      name: 'Product',
      component: Main,
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Main,
    },
    {
      path: '/news',
      name: 'News',
      component: Main,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    }
  ]
})

export default router
