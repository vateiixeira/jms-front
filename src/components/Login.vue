<template lang="html">
<div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary" >
   <!-- CONTENT
    ================================================== -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">

          <!-- Heading -->
          <h1 class="display-4 text-center mb-3">
            Bem-Vindo!
          </h1>

          <!-- Subheading -->
          <p class="text-muted text-center mb-5">
            Faça o login para acessar o sistema.
          </p>

          <!-- Form -->
          <form>

            <!-- Email address -->
            <div class="form-group">

              <!-- Label -->
              <label>Usuário</label>

              <!-- Input -->
              <input type="email" class="form-control" placeholder="Digite o usuario" v-model="username">

            </div>

            <!-- Password -->
            <div class="form-group">

              <div class="row">
                <div class="col">

                  <!-- Label -->
                  <label>Senha</label>

                </div>
                <div class="col-auto">

                  <!-- Help text -->
                  <a href="#" class="form-text small text-muted">
                    Esqueceu a senha ?
                  </a>

                </div>
              </div> <!-- / .row -->

              <!-- Input group -->
              <div class="input-group input-group-merge">

                <!-- Input -->
                <input type="password" class="form-control form-control-appended" placeholder="Digite sua senha" v-model="password">

                <!-- Icon -->
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fe fe-eye"></i>
                  </span>
                </div>

              </div>
            </div>

            <!-- Submit -->
            <button class="btn btn-lg btn-block btn-primary mb-3" style="margin-left: -3px;" @click.prevent="authenticate">
              Entrar!
            </button>

          </form>

        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    authenticate () {
      const payload = {
        username: this.username,
        password: this.password
      }
      axios.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
            // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
              withCredentials: true
            }
          }
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base)
          axiosInstance({
            url: '/user/',
            method: 'get',
            params: { }
          })
            .then((response) => {
              localStorage.setItem('regiao', response.data.regiao)
              localStorage.setItem('avatar', response.data.avatar)
              localStorage.setItem('id', response.data.id)
              localStorage.setItem('username', response.data.username)
              localStorage.setItem('cargo', response.data.cargo)
              this.$router.push({ name: 'Home' })
            })
        })
        .catch((error) => {
          console.log(error)
          console.debug(error)
          console.dir(error)
        })
    }
  }
}
</script>

<style>

</style>
