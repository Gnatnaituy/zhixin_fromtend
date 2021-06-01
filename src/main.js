import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
