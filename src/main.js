import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'

import Video from 'video.js'
import 'video.js/dist/video-js.css'

import './style/style.scss'

Vue.prototype.$video = Video

Vue.config.productionTip = false

// axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
