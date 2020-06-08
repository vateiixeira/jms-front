<template>
  <div class="container">
         <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        color="#fff"
        background-color="#12263f"
        :width="loadConfig.width"
        :height="loadConfig.height"
        :opacity="loadConfig.opacity"
        >
        </loading>
        </div>
      <br>
      <h2>Cadastro de Vendedor</h2>
      <div class="flex-container">
      <div class="col-6">
      <input type="text" class="form-control form-control" v-model="cpf" placeholder="CPF">
      </div>
      <div class="col-6">
      <input type="text" class="form-control form-control" v-model="nome" placeholder="Nome">
      </div>
      </div>
      <br>
      <h2>Região</h2>
      <div class="flex-conainer">
        <div class="col-5">
      <select class="custom-select rounded" v-model="regiao"  >
        <option v-for="(key, index) in dados.regiao" :key="index">{{index}}</option>
    </select>
      </div>
        </div>
        <br>
      <h2 style="margin-left: 8px">Cidade</h2>
        <div class="flex-container" style="margin-left: 30px">
        <div class="col-5" v-for="(key, index) in dados.cidade" :key="index">
          <input type="checkbox" class="custom-control-input" :id="index" @click="marcaCidade($event)">
          <label class="custom-control-label" :for="index">{{index}}</label>
          <br>
      </div>
      </div>
      <br>
    <button class="btn btn-primary" @click="submitUser">Salvar!</button>

  </div>

</template>

<script>
// import { Bar } from 'vue-chartjs'
import axios from 'axios'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  data: () => ({
    nome: '',
    cpf: '',
    dados: '',
    regiao: 'JNB',
    modelo: '',
    cidade: '',
    loaded: false,
    isLoading: false,
    fullPage: true,
    loadConfig: {
      width: 90,
      height: 90,
      opacity: 0.9
    },
    cargo: 'VENDEDOR',
    arrSelectedCidade: []
  }),
  async mounted () {
    this.isLoading = true
    this.loaded = false
    try {
      const response = await axios.get(`/sazonalidade/${this.regiao}`)
      const dataGeral = await axios.get('/sazonalidade')
      this.dados = dataGeral.data
      this.cardRegiao = response.data.lista
      this.loaded = true
      this.isLoading = false
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    marcaCidade: function (event) {
      if (event.target.checked === false) {
        var index = this.arrSelectedCidade.indexOf(event.target.id)
        if (index !== -1) { this.arrSelectedCidade.splice(index, 1) }
        console.log('removido')
      } else {
        this.arrSelectedCidade.push(event.target.id)
        console.log('add')
      }
      console.log(this.arrSelectedCidade)
    },
    submitUser: async function () {
      this.Loading = true
      try {
        const responsePost = await axios.post('/new-user/', {
          cpf: this.cpf,
          nome: this.nome,
          cargo: this.cargo,
          regiao: this.regiao,
          cidade: this.arrSelectedCidade
        })
        console.log(responsePost)
        this.loaded = true
        this.isLoading = false
      } catch (err) {
        console.log(err)
        alert('CPF EXISTENTE.')
      }
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

</style>
