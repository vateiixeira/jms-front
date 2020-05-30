import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from 'vue-simple-alert'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto')

Vue.use(VueSimpleAlert)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  VueScrollTo,
  VueSimpleAlert,
  render: h => h(App)
}).$mount('#app')
