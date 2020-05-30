import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  state: {
    authUser: {},
    regiao: localStorage.getItem('regiao'),
    avatar: localStorage.getItem('avatar'),
    cargo: localStorage.getItem('cargo'),
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'https://jms-backend.herokuapp.com/api/login/',
      refreshJWT: 'https://jms-backend.herokuapp.com/api/refresh-token/',
      baseUrl: 'https://jms-backend.herokuapp.com/api/'
    }
  },

  mutations: {
    setAuthUser (state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken (state, newToken) {
      localStorage.setItem('token', newToken)
      state.jwt = newToken
    },
    removeToken (state) {
      localStorage.removeItem('token')
      state.jwt = null
    }
  },
  actions: {
    checkToken () {
      const token = localStorage.getItem('token')
      if (token) {
        var test = VueJwtDecode.decode(token)
        var currentTime = new Date().getTime() / 1000
        if (currentTime > test.exp) {
          console.log('expirou')
          this.$router.push({ name: 'Login' })
        } else {
          console.log('ainda esta valido')
          console.log(token)
          axios.post(this.state.endpoints.refreshJWT, { token: token })
            .then((response) => {
              this.state.jwt = response.data
              // this.state.isAuthenticated = true
              console.log('TOKEN ATUALIZADO COM SUCESSO')
            })
        }
      } else if (token === null) {
        console.log('VSF TA NULO')
        this.$router.push({ name: 'Login' })
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
})
