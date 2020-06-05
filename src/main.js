import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from 'vue-simple-alert'
import axios from 'axios'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto')

Vue.use(VueSimpleAlert)
Vue.use(VueScrollTo)
Vue.use(axios)

axios.defaults.baseURL = 'https://jms-backend.herokuapp.com/api/'

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

new Vue({
  axios,
  router,
  store,
  VueScrollTo,
  VueSimpleAlert,
  render: h => h(App)
}).$mount('#app')
