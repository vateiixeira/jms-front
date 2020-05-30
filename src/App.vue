<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
// import Login from './components/Login'
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'app',
  components: {
    // Login
  },
  data: function () {
    return {
    }
  },
  mounted () {
    // this.token = this.$store.state.jwt
    const token = localStorage.getItem('token')
    if (token) {
      var test = VueJwtDecode.decode(token)
      console.log(test.exp)
      var currentTime = new Date().getTime() / 1000
      console.log(currentTime)
      if (currentTime > test.exp) {
        console.log('expirou')
        this.$router.push({ name: 'Login' })
      } else {
        console.log('ainda esta valido')
        axios.post(this.$store.state.endpoints.refreshJWT, { token: token })
          .then((response) => {
            this.$store.state.jwt = response.data
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
</script>

<style>
</style>
