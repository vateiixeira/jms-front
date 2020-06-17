<template>
    <div class="flex">
               <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
        color="#fff"
        background-color="#12263f"
        :width="loadConfig.width"
        :height="loadConfig.height"
        :opacity="loadConfig.opacity"
        >
        </loading>
        </div>

            <span>PLANEJAMENTO DE MOTOS ANUAL</span>
            <hr>
        <div class="row">
          <span>Região</span>
        </div>
      <div class="row">
        <div class="col-2">
          <select class="custom-select" v-model="regiao" >
              <option v-for="x in regioes" :key="x">{{x}}</option>
        </select>
      </div>
        <div >
          <button type="submit" class="btn btn-white" @click="filtrarRegiao">Filtrar!</button>
      </div>
    </div>
      <div class="row">
        <div class="col-3">
          <input type="text" class="form-control form-control" placeholder="Digite a quantidade anual da região" v-model="qtdAnual">
        </div>
        </div>
      <br>
      <span>Cidades</span>
    <button type="submit" class="btn btn-primary" @click="saveCidade">SALVAR</button>
    <div class="" v-for="(x,value) in cidades" :key="x">
       <hr>
    <div class="row">
      <span :id="value">{{value}}</span>
    </div>
    <div class="row" >
      <div class="col-1" v-for="(i,index) in x" :key="index">
        <span>Mes: {{index+1}}</span>
        <input :id="value + (index+1)" type="text" class="form-control form-control" :placeholder="i" :value="i">
      </div>
    </div>
    </div>
      <br>
      <span>Vendedores</span>
    <button type="submit" class="btn btn-primary" @click="saveVendedor">SALVAR</button>
    <div class="" v-for="(x,value) in vendedores" :key="x">
       <hr>
    <div class="row">
      <span :id="value">{{value}}</span>
    </div>
    <div class="row" >
      <div class="col-1" v-for="(i,index) in x" :key="index">
        <span>Mes: {{index+1}}</span>
        <input :id="value + (index+1)" type="text" class="form-control form-control" :placeholder="i" :value="i">
      </div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  mounted () {
  },
  data: () => ({
    finalValueCidade: [],
    finalValueVendedor: [],
    previstoCidade: [],
    valorCidade: [],
    cidades: '',
    cidade: '',
    vendedores: '',
    vendedor: '',
    dados: '',
    regioes: ['JNB', 'JNR', 'SFC'],
    regiao: '',
    qtdAnual: '',
    isLoading: false,
    fullPage: true,
    loadConfig: {
      width: 90,
      height: 90,
      opacity: 0.9
    }
  }),
  methods: {
    cidadeChange: function () {
      axios.get(`sazonalidade/previsao/${this.cidade}/${this.qtdAnual}`)
        .then(resp => {
          this.previstoCidade = resp.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    vendedorChange: function () {
      console.log(this.vendedor)
    },
    filtrarRegiao: async function () {
      this.isLoading = true
      try {
        const response = await axios.get(`sazonalidade/previsao/regiao/${this.regiao}/${this.qtdAnual}`)
        this.cidades = response.data
        const resp = await axios.get(`sazonalidade/previsao/regiao/vendedor/${this.regiao}/${this.qtdAnual}`)
        this.vendedores = resp.data
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
    saveCidade: function () {
      for (var x in this.cidades) {
        var list = []
        for (var i = 1; i <= 12; i++) {
          var div = document.getElementById(`${x}${i}`)
          var value = div.value
          list.push(value)
        }
        this.finalValueCidade.push({
          cidade: x,
          mes: list
        })
      }
      // console.log(this.finalValueCidade)
      // FAZER POST PARA SALVAR NO BANCO
    },
    saveVendedor: function () {
      this.finalValueVendedor = []
      for (var x in this.vendedores) {
        var list = []
        for (var i = 1; i <= 12; i++) {
          var div = document.getElementById(`${x}${i}`)
          var value = div.value
          list.push(value)
        }
        this.finalValueVendedor.push({
          cidade: x,
          mes: list
        })
      }
      console.log(this.finalValueVendedor)
      // FAZER POST PARA SALVAR NO BANCO
    }
  }

}
</script>

<style>
.flex {
    padding: 60px 60px;
}
.row {
  padding: 10px 10px;
}

</style>
