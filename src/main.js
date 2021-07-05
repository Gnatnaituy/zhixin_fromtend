import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap'

Vue.use(ElementUI)
Vue.use(VueAMap)

Vue.config.productionTip = false
Vue.config.devtools = true

VueAMap.initAMapApiLoader({
  key: 'cfd8da5cf010c5f7441834ff5e764f5b',
  plugin: ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
