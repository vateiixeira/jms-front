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
      <h2>Região</h2>
      <select class="custom-select" v-model="regiao" @change="regionChange" >
        <option v-for="(key, index) in dados.regiao" :key="index">{{index}}</option>
    </select>
    <div class="card">
    <div class="card-body">
        <!-- Chart -->
        <bar-chart-regiao
        :title='regiao'
        :listValues="cardRegiao"
        v-if="loaded"></bar-chart-regiao>
        <div class="row flex-nowrap">
          <div class="butao">
            <input class="form-control form-control-rounded" v-model="jan" @change="mudaData">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div >
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>
          <div class="butao">
            <input class="form-control form-control-rounded">
          </div>

        </div>
    </div>
    </div>
    <!-- SEGUNDO CARD -->
      <br>
      <h2>Modelo</h2>
      <select class="custom-select" v-model="modelo" @change="modeloChange">
        <option v-for="(key, index) in dados.modelo" :key="index">{{index}}</option>
    </select>
    <div class="card">
    <div class="card-body">
        <!-- Chart -->
        <div class="chart">
        <bar-chart-modelo
        :title ='modelo'
        :listValues ='cardModelo'
        v-if="loadedModelo"> </bar-chart-modelo>
        </div>
    </div>
    </div>
    <!-- SEGUNDO CARD -->
      <br>
      <h2>Cidade</h2>
      <select class="custom-select" v-model="cidade" @change="cidadeChange" >
        <option v-for="(key, index) in dados.cidade" :key="index">{{index}}</option>
    </select>
    <div class="card">
    <div class="card-body">
        <!-- Chart -->
        <div class="chart">
        <bar-chart-cidade
        :title ='cidade'
        :listValues ='cardCidade'
        v-if="loadedCidade"></bar-chart-cidade>
        </div>
    </div>
    </div>
    <!-- SEGUNDO CARD -->
      <br>
      <h2>Vendedor</h2>
      <select class="custom-select" v-model="vendedor" @change="vendedorChange">
        <option v-for="(key, index) in dados.vendedor" :key="index">{{index}}</option>
    </select>
    <div class="card">
    <div class="card-body">
        <!-- Chart -->
        <div class="chart">
        <bar-chart-vendedor
        :title ='vendedor'
        :listValues ='cardVendedor'
        v-if="loadedVendedor"></bar-chart-vendedor>
        </div>
    </div>
    </div>

  </div>

</template>

<script>
// import { Bar } from 'vue-chartjs'
import BarChart from './Bar'
import axios from 'axios'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    'bar-chart-modelo': BarChart,
    'bar-chart-vendedor': BarChart,
    'bar-chart-cidade': BarChart,
    'bar-chart-regiao': BarChart,
    Loading
  },
  data: () => ({
    jan: 20,
    dados: '',
    regiao: 'JNB',
    modelo: '',
    cidade: '',
    vendedor: '',
    cardRegiao: [0, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
    cardModelo: [0, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
    cardCidade: [0, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
    cardVendedor: [0, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
    loaded: false,
    loadedModelo: false,
    loadedCidade: false,
    loadedVendedor: false,
    isLoading: false,
    fullPage: true,
    loadConfig: {
      width: 90,
      height: 90,
      opacity: 0.9
    }
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
    regionChange: async function () {
      this.loaded = false
      try {
        const response = await axios.get(`/sazonalidade/${this.regiao}`)
        this.cardRegiao = response.data.lista
        this.loaded = true
      } catch (err) {
        console.log(err)
      }
    },
    modeloChange: async function () {
      this.loadedModelo = false
      try {
        const response = await axios.get(`/sazonalidade/modelo/${this.modelo}`)
        this.cardModelo = response.data.lista
        console.log(this.cardModelo)
        this.loadedModelo = true
      } catch (err) {
        console.log(err)
      }
    },
    cidadeChange: async function () {
      this.loadedCidade = false
      try {
        const response = await axios.get(`/sazonalidade/cidade/${this.cidade}`)
        this.cardCidade = response.data.lista
        this.loadedCidade = true
      } catch (err) {
        console.log(err)
      }
    },
    vendedorChange: async function () {
      this.loadedVendedor = false
      try {
        const response = await axios.get(`/sazonalidade/vendedor/${this.vendedor}`)
        this.cardVendedor = response.data.lista
        this.loadedVendedor = true
      } catch (err) {
        console.log(err)
      }
    },
    mudaData: function () {
      this.loaded = false
      var valor = parseInt(this.jan)
      this.cardRegiao[0] = valor
      setTimeout(() => { this.loaded = true }, 100)
      console.log(this.cardRegiao)
    }
  }
}
</script>

<style>
  .butao{
    width: 110px;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
