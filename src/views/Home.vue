<template>
    <div  id="app" class="main-content">

      <!-- HEADER -->
      <div class="header">
        <div class="container-fluid">

          <!-- Body -->
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">

                <!-- Pretitle -->
                <h6 class="header-pretitle">
                  {{this.$store.state.username}}
                </h6>

                <!-- Title -->
                <h1 class="header-title">
                  Dashboard
                </h1>

              </div>
              <div class="col-auto">

                <!-- Button -->
                <a class="btn btn-primary lift">
                  Apresentacao
                </a>

              </div>
            </div> <!-- / .row -->
          </div> <!-- / .header-body -->

        </div>
      </div> <!-- / .header -->

      <!-- CARDS -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6 col-xl">

            <!-- Value  -->
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      PLANEJADO
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      $6.000
                    </span>

                    <!-- Badge -->
                    <!-- <span class="badge badge-soft-success mt-n1">
                      +3.5%
                    </span> -->
                  </div>
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      REALIZADO
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      $4.500
                    </span>

                    <!-- Badge
                    <span class="badge badge-soft-success mt-n1">
                      +3.5%
                    </span> -->
                  </div>

                  <div class="col-auto">

                    <!-- Icon -->
                    <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>

                  </div>
                </div> <!-- / .row -->
              </div>
            </div>

          </div>
          <div class="col-12 col-lg-6 col-xl">

            <!-- MOTOS -->
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      PLANEJADO MOTOS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      123123
                    </span>

                  </div>
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      REALIZADO MOTOS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      {{cabecalho.moto}}
                    </span>

                  </div>
                  <div class="col-auto">

                    <!-- Icon -->
                    <span class="h2 fe fe-circle text-muted mb-0"></span>

                  </div>
                </div> <!-- / .row -->
              </div>
            </div>

          </div>
          <div class="col-12 col-lg-6 col-xl">

            <!-- MOTOS -->
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      PLANEJADO COTAS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      123123
                    </span>

                  </div>
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      REALIZADO COTAS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      {{cabecalho.cota}}
                    </span>

                  </div>
                  <div class="col-auto">

                    <!-- Icon -->
                    <span class="h2 fe fe-trending-up text-muted mb-0"></span>

                  </div>
                </div> <!-- / .row -->
              </div>
            </div>

          </div>
          <div class="col-12 col-lg-6 col-xl">

            <!-- MOTOS -->
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      PLANEJADO VISITAS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      123123
                    </span>

                  </div>
                  <div class="col">

                    <!-- Title -->
                    <h6 class="text-uppercase text-muted mb-2">
                      REALIZADO VISITAS
                    </h6>

                    <!-- Heading -->
                    <span class="h2 mb-0">
                      1500
                    </span>

                  </div>
                  <div class="col-auto">

                    <!-- Icon -->
                    <span class="h2 fe fe-home text-muted mb-0"></span>

                  </div>
                </div> <!-- / .row -->
              </div>
            </div>

          </div>
        </div><!-- / .row -->
      </div> <!-- fecha card -->
            <!-- TIMELINE -->
            <div class="container-fluid">
            <div class="card">
              <div class="card-header">

                <!-- Title -->
                <h4 class="card-header-title">
                  Timeline
                </h4>

              </div>
              <div class="card-body">

                <!-- CONTEUDO TIME LINE -->
                time line ficara aqui **********

              </div>
            </div>
          </div>

        <div class="container-fluid">
                  <div class="row">
                    <div class="col-6 col-md-4">
                    <div class="card">
          <div class="card-header">

            <h4 class="card-header-title">
              Sintético
            </h4>
              </div>
            <div class="card-body">
            <div class="row" style="margin-top: 10px;">
            <!-- <button type="button" class="btn btn-primary" @click="getSinteticoModelo">Analítico Modelo</button> -->
            <button type="button" class="btn btn-primary" v-if="showAnalitico" @click="analitico" >Filtrar!</button>
             </div>
            <div class="row" style="margin-top: 10px;">
                  <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="moto.modelo" @click="switchSituacaoVisualizacao">
                  <label class="custom-control-label" for="moto.modelo">{{textToggleAnalitico}}</label>
                </div>
              </div>

                </div>
                </div>
                  </div>
          </div>
        </div>
          <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-md-4">

            <!-- Regiao -->
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h4 class="card-header-title">
                      Regiao JNB
                    </h4>
                    </div>

                    <div class="col" style="margin-left: -30px;">
                    <button  class="btn btn-rounded-circle btn-white">
                      <span @click="desRegiao" class="fe fe-search"> </span>
                    </button>
                      <span>Visualizar total região</span>
                    </div>

                  <div class="col-auto">

                    <!-- Button -->
                    <a href="#!" class="btn btn-sm btn-white">
                      Apresentacao
                    </a>

                  </div>
                </div> <!-- / .row -->
              </div>

              <div class="table-responsive mb-0" >
                <!-- TABELA ANALITICO CIDADES -->
                <table class="table table-sm table-nowrap card-table" v-if="!showAnalitico">
                  <thead>
                    <tr>
                      <th>
                          CIDADES
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          VISITAS
                      </th>
                    </tr>
                  </thead>
                  <tbody :key="i.nome" v-for="i in cidades" :class="{active:i.nome == selected}" @click="selected = i.nome">
                    <tr>
                      <td>
                          <div @click="desempenho($event); getCidadeSintetico($event)" v-bind:id="i.nome" style=" width: 120px;" >
                            {{i.nome.slice(0,20)}}
                          </div>
                      </td>
                      <td >
                        <!-- <span v-bind:class="[ i.desempenho === 'warning' ? warningClass : successClass ]"><h3>{{i.moto}}</h3></span> -->
                        <span v-bind:class="desempenhoClass(i.desempenho)"><h3>{{i.moto}}</h3></span>
                        <h5>{{i.desempenho_porcen}}%</h5>
                      </td>
                      <td >
                        <span v-bind:class="desempenhoClass(i.desempenho_cota)"><h3>{{i.cota}}</h3></span>
                        <h5>{{i.porcen_desempenho_cota}}%</h5>
                      </td>
                      <td>
                        <span class="badge badge-soft-success"><h3>**</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
                <!-- TABELA SINTETICO CIDADES -->
                <table class="table table-sm table-nowrap card-table" v-else>
                  <thead>
                    <tr>
                      <th>

                      </th>
                      <th>
                          CIDADES
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          VISITAS
                      </th>
                    </tr>
                  </thead>
                  <tbody :key="i.nome" v-for="i in cidades" >
                    <tr>
                    <td class="goal-date">
                        <div class="checklist">
                        <div class="custom-control custom-checkbox checklist-control">
                          <input class="custom-control-input" :id="i.nome" type="checkbox" @click="marcaCidade" />
                          <label class="custom-control-label" :for="i.nome"></label>
                        </div>
                      </div>
                      <td>
                          <div v-bind:id="i.nome" style=" width: 120px;" >
                            {{i.nome.slice(0,20)}}
                          </div>
                      </td>
                      <td >
                        <!-- <span v-bind:class="[ i.desempenho === 'warning' ? warningClass : successClass ]"><h3>{{i.moto}}</h3></span> -->
                        <span v-bind:class="desempenhoClass(i.desempenho)"><h3>{{i.moto}}</h3></span>
                        <h5>{{i.desempenho_porcen}}%</h5>
                      </td>
                      <td >
                        <span v-bind:class="desempenhoClass(i.desempenho_cota)"><h3>{{i.cota}}</h3></span>
                        <h5>{{i.porcen_desempenho_cota}}%</h5>
                      </td>
                      <td>
                        <span class="badge badge-soft-success"><h3>**</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-4">

            <!-- TIME -->
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h4 class="card-header-title">
                      Time
                    </h4>

                  </div>
                  <div class="col-auto">

                    <!-- Button -->
                    <a href="#!" class="btn btn-sm btn-white">
                      Apresentacao
                    </a>

                  </div>
                </div> <!-- / .row -->
              </div>

              <div class="table-responsive-sm" data-toggle="lists" data-options="{&quot;valueNames&quot;: [&quot;goal-project&quot;, &quot;goal-status&quot;, &quot;goal-progress&quot;, &quot;goal-date&quot;]}">
                <!-- TABELA SINTÉTICO EQUIPE  -->
                <table class="table table-sm table-nowrap card-table" v-if="!showAnalitico">

                  <thead>
                    <tr>
                      <th>
                          NOME
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          VISITAS
                      </th>
                    </tr>
                  </thead>
                  <tbody class="list" v-bind:id="i.nome"
                  v-for="i in equipe" :key="i.nome" :class="{active:i.nome == selected}" @click="selected = i.nome; desVendedor(i.cpf); getVendedorSintetico($event)">
                    <tr>
                      <td class="goal-project" >
                        <div class="avatar avatar-xs">
                          <img v-bind:src="i.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div v-bind:id="i.cpf">{{ i.nome ? i.nome.slice(0,20) : i.nome}} </div>
                      </td>
                      <td class="goal-status">
                        <span class="badge badge-soft-success"><h3>{{i.moto}}</h3></span>
                      </td>
                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{i.cota}}</h3></span>
                      </td>
                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{i.visita}}</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
                <!-- TABELA ANALITICO EQUIPE  -->
                <table class="table table-sm table-nowrap card-table" v-else>

                  <thead>
                    <tr>
                      <th>

                      </th>
                      <th>
                          NOME
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          VISITAS
                      </th>
                    </tr>
                  </thead>
                  <tbody class="list" v-bind:id="i.nome"
                  v-for="i in equipe" :key="i.nome" >
                    <tr>
                      <td class="goal-date">
                        <div class="checklist">
                        <div class="custom-control custom-checkbox checklist-control">
                          <input class="custom-control-input" :id="i.cpf" type="checkbox" @click="marcaEquipe" />
                          <label class="custom-control-label" :for="i.cpf"></label>
                        </div>
                      </div>
                      </td>
                      <td class="goal-project" >
                        <div class="avatar avatar-xs">
                          <img v-bind:src="i.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div v-bind:id="i.cpf">{{ i.nome ? i.nome.slice(0,20) : i.nome}} </div>
                      </td>
                      <td class="goal-status">
                        <span class="badge badge-soft-success"><h3>{{i.moto}}</h3></span>
                      </td>
                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{i.cota}}</h3></span>
                      </td>
                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{i.visita}}</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
          <div class="col-6 col-md-4">

            <!-- Produtos -->
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h4 class="card-header-title">
                      Produtos
                    </h4>

                  </div>
                  <div class="col-auto">

                    <!-- Button -->
                    <a href="#!" class="btn btn-sm btn-white">
                      Apresentacao
                    </a>

                  </div>
                </div> <!-- / .row -->
              </div>
              <div class="table-responsive-sm" data-toggle="lists" data-options="{&quot;valueNames&quot;: [&quot;goal-project&quot;, &quot;goal-status&quot;, &quot;goal-progress&quot;, &quot;goal-date&quot;]}">
                <!-- TABELA SINTETICO MOTOS -->
                <table class="table table-sm card-table" v-if="!showAnalitico">
                  <thead>
                    <tr>
                      <th>
                          NOME
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          AREA MOTO
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          AREA COTA
                      </th>

                    </tr>
                  </thead>

                  <tbody  v-for="moto in motos" :key="moto.count"  :class="{active:moto.modelo == selected}"
                        @click="selected = moto.modelo; desModelo($event) ;getModeloSintetico($event)" ref="tableProduto">
                    <tr>
                      <td class="goal-status">
                        <div class="avatar avatar-xs">
                          <img v-bind:src="moto.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div :id="moto.modelo" style="width: 110px;" >{{moto.modelo.slice(0,20)}}</div>
                      </td>
                      <td class="goal-status" >
                        <span class="badge badge-soft-success" ><h3>{{moto.moto}}</h3> </span>
                        <h5>5,5652</h5>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{moto.area_moto}}%</h3></span>
                      </td>

                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{moto.cota}}</h3></span>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{moto.area_cota}}%</h3></span>
                      </td>

                    </tr>
                  </tbody>
                </table>
                <!-- TABELA ANALITICO MOTOS -->
                <table class="table table-sm card-table" v-else >
                  <thead>
                    <tr>
                      <th>
                          #
                      </th>
                      <th>
                          NOME
                      </th>
                      <th>
                          MOTOS
                      </th>
                      <th>
                          AREA MOTO
                      </th>
                      <th>
                          COTAS
                      </th>
                      <th>
                          AREA COTA
                      </th>

                    </tr>
                  </thead>

                  <tbody  v-for="moto in motos" :key="moto.count" ref="tableProduto">
                    <tr>
                      <td class="goal-date">
                        <div class="checklist">
                        <div class="custom-control custom-checkbox checklist-control">
                          <input class="custom-control-input" :id="moto.modelo" type="checkbox" @click="marcaModelo" />
                          <label class="custom-control-label" :for="moto.modelo"></label>
                        </div>
                      </div>
                      </td>
                      <td class="goal-status">
                        <div class="avatar avatar-xs">
                          <img v-bind:src="moto.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div :id="moto.modelo" style="width: 110px;" >{{moto.modelo.slice(0,20)}}</div>
                      </td>
                      <td class="goal-status" >
                        <span class="badge badge-soft-success" ><h3>{{moto.moto}}</h3> </span>
                        <h5>5,5652</h5>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{moto.area_moto}}%</h3></span>
                      </td>

                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{moto.cota}}</h3></span>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{moto.area_cota}}%</h3></span>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> <!-- / .row -->
          </div><!-- / .container fluid cards meio -->
        <div class="container-fluid">
        <div class="row">
          <div class="col-12">

            <!-- Mensagem rodape -->
            <div class="card card-fill">
              <div class="card-header">

                <!-- Title -->
                <h4 class="card-header-title">
                  Titulo
                </h4>

              </div>
              <div class="card-body">
                Desenvolva seu time e obtenha resultados incriveis. Etc
                Lugar A DEFINIR APOS DADOS ESTAREM PRONTOS ****

                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="element">
          <div class="container-fluid" v-if="showModelo">
            <Modelo :data=this.propModelo />
         </div>
        </div>
        </div> <!-- / .row -->

</template>

<script>
// @ is an alias to /src
import '../assets/css/theme-dark.min.css'
import '../assets/fonts/feather/feather.css'
import '../assets/libs/flatpickr/dist/flatpickr.min.css'
import '../assets/libs/quill/dist/quill.core.css'
import '../assets/libs/highlightjs/styles/vs2015.css'
import axios from 'axios'
import { mapState } from 'vuex'
import Modelo from '../components/Modelo'

export default {
  name: 'Home',
  components: {
    Modelo
  },
  data: function () {
    return {
      cabecalho: '',
      regiao: '',
      equipe: [],
      forest: [],
      existeCidade: false,
      motos: [],
      cidades: [],
      desempenhoMoto: [],
      detalheCidade: false,
      detalheMoto: false,
      detalheVendedor: false,
      selected: undefined,
      fullPage: false,
      dia: 20,
      mes: 11,
      ano: 2019,
      equipeModelo: [],
      cidadeModelo: [],
      isActive: false,
      activeClass: 'active',
      cidadeVendedor: [],
      modeloVendedor: [],
      selectMotos: [],
      selectCidades: [],
      selectVendedores: [],
      selectedRegiao: '',
      selectedModelo: '',
      selectedCidade: '',
      selectedVendedor: '',
      arrSelectedModelo: [],
      arrSelectedEquipe: [],
      arrSelectedCidade: [],
      propModelo: {},
      showModelo: false,
      showAnalitico: false,
      textToggleAnalitico: 'Ativar modo analitico'
    }
  },
  mounted () {
    this.regiao = this.$store.state.regiao
    this.id = this.$store.state.id
    var vm = this
    const config = {
      headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }
    axios.get(`https://jms-backend.herokuapp.com/api/modelo/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.motos = response.data
        vm.selectMotos = response.data
      })
    axios.get(`https://jms-backend.herokuapp.com/api/listagem/cidade/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.cidades = response.data
        vm.selectCidades = response.data
      })
    axios.get(`https://jms-backend.herokuapp.com/api/desempenho/regiao/geral/${vm.regiao}/${vm.id}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.equipe = response.data.equipe
        vm.selectVendedores = response.data.equipe
      })
    axios.get(`https://jms-backend.herokuapp.com/api/desempenho/geral/cabecalho/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.cabecalho = response.data
      })
  },
  computed: mapState(['authUser']),
  methods: {
    desempenhoClass: function (tipo) {
      return {
        'badge badge-soft-success': tipo === 'success',
        'badge badge-soft-danger': tipo === 'error',
        'badge badge-soft-warning': tipo === 'warning'
      }
    },
    desempenho: function (event) {
      this.modeloVendedor = []
      this.equipeModelo = []
      this.cidadeModelo = []
      this.cidades = []
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`https://jms-backend.herokuapp.com/api/listagem/cidade/${this.regiao}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then(response => {
          this.cidades = response.data
          this.selectCidades = response.data
        })
      // LOADER
      // const loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.tableProduto,
      //   canCancel: true,
      //   onCancel: this.onCancel
      // })
      // PEGA NOME DA CIDADE CLICADA
      var cidade = event.target.id
      // APAGA LISTA DA ANTIGA CIDADE
      this.desempenhoMoto = []
      // APAGA LISTA DE MOTOS GERAIS
      // this.motos = []
      // REQUEST PARA PEGAR DADOS DESTA CIDADE
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/${cidade}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then(response => {
          this.equipe = response.data.equipe
          this.forest = response.data.forest
          this.motos = response.data.moto
          // loader.hide()
        })
        .catch(error => {
          console.log(error)
          // loader.hide
        })
    },
    desModelo: function (event) {
      this.isActive = true
      this.equipe = []
      this.cidades = []
      var modelo = event.target.id
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/modelo/${modelo}/${this.regiao}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then((response) => {
          this.cidades = response.data.cidade
          this.equipe = response.data.equipe
        })
    },
    desVendedor: function (cpf) {
      this.motos = []
      this.cidades = []
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/vendedor/${cpf}/${this.regiao}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then((response) => {
          // this.detalheVendedor = true
          this.cidades = response.data.cidade
          this.motos = response.data.moto
          // this.
        })
    },
    desRegiao: function () {
      this.arrSelectedModelo = []
      this.arrSelectedEquipe = []
      this.arrSelectedCidade = []
      this.cidades = []
      this.motos = []
      this.equipe = []

      this.regiao = this.$store.state.regiao
      this.id = this.$store.state.id
      var vm = this
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/modelo/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.motos = response.data
        })
      axios.get(`https://jms-backend.herokuapp.com/api/listagem/cidade/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.cidades = response.data
        })
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/regiao/geral/${vm.regiao}/${vm.id}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.equipe = response.data.equipe
        })
      axios.get(`https://jms-backend.herokuapp.com/api/desempenho/geral/cabecalho/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.cabecalho = response.data
        })
    },
    getSinteticoModelo: function () {
      if (this.selectedModelo === '') { return this.$alert('Você deve escolher um modelo!', 'Error!', 'error') }
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
        // params: {
        //   modelos: this.arrSelectedModelo.reduce((f, s) => `${f},${s}`)
        // }
      }
      if (this.selectedCidade === '' && this.selectedVendedor === '') {
        axios.get(`https://jms-backend.herokuapp.com/api/produto/${this.selectedModelo}/${this.dia}/${this.mes}/${this.ano}/${this.regiao}`, config)
          .then(response => {
            this.showModelo = true
            this.propModelo = response.data
            this.data = response.data
            console.log('modelo')
            if (response.data[0] === 'error') { return this.$alert('Não existem dados para a sua pesquisa. Escolha outros campos e tente novamente', 'Ops!', 'error') }
          })
          .catch(error => {
            console.log(error)
          })
      } else if (this.selectedVendedor === '') {
        axios.get(`https://jms-backend.herokuapp.com/api/produto/${this.selectedModelo}/${this.dia}/${this.mes}/${this.ano}/${this.selectedCidade}/cidade`, config)
          .then(response => {
            this.showModelo = true
            this.propModelo = response.data
            this.data = response.data
            console.log(response.data)
            console.log('cidade - modelo')
          })
          .catch(error => {
            console.log(error)
          })
      } else if (this.selectedCidade === '') {
        axios.get(`https://jms-backend.herokuapp.com/api/produto/${this.selectedModelo}/${this.dia}/${this.mes}/${this.ano}/${this.selectedVendedor}/vendedor`, config)
          .then(response => {
            this.showModelo = true
            this.propModelo = response.data
            this.data = response.data
            console.log(response.data)
            console.log('vendedor - modelo')
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        axios.get(`https://jms-backend.herokuapp.com/api/produto/${this.selectedModelo}/${this.dia}/${this.mes}/${this.ano}/${this.selectedVendedor}/${this.selectedCidade}`, config)
          .then(response => {
            this.showModelo = true
            this.propModelo = response.data
            this.data = response.data
            console.log(response.data)
            console.log('vendedor - cidade - modelo')
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.$scrollTo('#element', 1000, { easing: 'linear' })
    },
    getCidadeSintetico: function (event) {
      this.selectedCidade = event.target.id
    },
    getVendedorSintetico: function (event) {
      this.selectedVendedor = event.target.id
    },
    getModeloSintetico: function (event) {
      this.selectedModelo = event.target.id
    },
    marcaModelo: function (event) {
      if (event.target.checked === false) {
        var index = this.arrSelectedModelo.indexOf(event.target.id)
        if (index !== -1) { this.arrSelectedModelo.splice(index, 1) }
        console.log('removido')
      } else {
        this.arrSelectedModelo.push(event.target.id)
        console.log('add')
      }
      console.log(this.arrSelectedModelo)
    },
    marcaEquipe: function (event) {
      if (event.target.checked === false) {
        var index = this.arrSelectedEquipe.indexOf(event.target.id)
        if (index !== -1) { this.arrSelectedEquipe.splice(index, 1) }
        console.log('removido')
      } else {
        this.arrSelectedEquipe.push(event.target.id)
        console.log('add')
      }
      console.log(this.arrSelectedEquipe)
    },
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
    analitico: function () {
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        params: {
          ...(this.arrSelectedModelo.length > 0 ? { modelos: this.arrSelectedModelo.reduce((f, s) => `${f},${s}`) } : {}),
          ...(this.arrSelectedCidade.length > 0 ? { cidades: this.arrSelectedCidade.reduce((f, s) => `${f},${s}`) } : {}),
          ...(this.arrSelectedEquipe.length > 0 ? { vendedores: this.arrSelectedEquipe.reduce((f, s) => `${f},${s}`) } : {})
        }
      }
      axios.get(`https://jms-backend.herokuapp.com/api/analitico/${this.dia}/${this.mes}/${this.ano}`, config)
        .then(response => {
          console.log(response.data)
          this.showModelo = true
          this.propModelo = response.data
          this.$scrollTo('#element', 1000, { easing: 'linear' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    switchSituacaoVisualizacao: function (event) {
      if (event.target.checked === false) {
        this.showAnalitico = false
        this.textToggleAnalitico = 'Você está no modo sintético'
        console.log('mostrando analitico')
      } else {
        this.showAnalitico = true
        console.log('mostrando sintético')
        this.textToggleAnalitico = 'Você está no modo analítico '
      }
    }
  }
}
</script>

<style >
  h3 {
    margin-bottom: 0.24375rem;
  }
  .active{
    background-color: rgb(96, 142, 202);
  }
  .forest{
    background-color: rgb(224, 230, 174, 0.2);
  }
  .btn-primary {
    margin-left: 10px;
  }
</style>
