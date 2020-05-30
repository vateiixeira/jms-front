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
                <a href="#!" class="btn btn-primary lift">
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
              <p class="card-text">
                Selecione e busque pelos dados sintéticos abaixo:
              </p>
              <div class="row">
                <span>Regiao</span>
                <input class="custom-select" v-model="selectedRegiao" >

                <span>Modelo</span>
                <input class="custom-select" v-model="selectedModelo" >

                <span>Cidade</span>
                <input class="custom-select" v-model="selectedCidade">

                <span>Vendedor</span>
                <input class="custom-select" v-model="selectedVendedor">

              </div>
            <div class="row" style="margin-top: 10px;">
            <button type="button" class="btn btn-primary" @click="getRegiao">Filtrar Região</button>
            <button type="button" class="btn btn-primary" >Filtrar Cidade</button>
            <button type="button" class="btn btn-primary" >Filtrar Vendedor</button>
            <button type="button" class="btn btn-primary" >Filtrar Modelo</button>
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
                    <button  class="btn btn-rounded-circle btn-white">
                      <span @click="desRegiao" class="fe fe-search"></span>
                    </button>
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

              <div class="table-responsive mb-0" >
                <table   v-if="!detalheMoto && !detalheVendedor"  class="table table-sm table-nowrap card-table">
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
                <table  v-else-if="detalheMoto && !detalheVendedor"  class="table table-sm table-nowrap card-table">
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
                  <tbody :key="i.nome" v-for="i in cidadeModelo" :class="{active:i.nome == selected}" @click="selected = i.nome">
                    <tr>
                      <td>
                          <div @click="desempenho" v-bind:id="i.nome" style=" width: 120px;" >
                            {{i.nome.slice(0,20)}}
                          </div>
                      </td>
                      <td >
                        <!-- <span v-bind:class="[ i.desempenho === 'warning' ? warningClass : successClass ]"><h3>{{i.moto}}</h3></span> -->
                        <span v-bind:class="desempenhoClass(i.desempenho)"><h3>{{i.moto}}</h3></span>
                      </td>
                      <td >
                        <span v-bind:class="desempenhoClass(i.desempenho_cota)"><h3>{{i.cota}}</h3></span>
                      </td>
                      <td>
                        <span class="badge badge-soft-success"><h3>**</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </table>
                <table  v-else-if="!detalheMoto && detalheVendedor"  class="table table-sm table-nowrap card-table">
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
                  <tbody :key="i.nome" v-for="i in cidadeVendedor" :class="{active:i.nome == selected}" @click="selected = i.nome">
                    <tr>
                      <td>
                          <div @click="desempenho" v-bind:id="i.nome" style=" width: 120px;" >
                            {{i.nome.slice(0,20)}}
                          </div>
                      </td>
                      <td >
                        <!-- <span v-bind:class="[ i.desempenho === 'warning' ? warningClass : successClass ]"><h3>{{i.moto}}</h3></span> -->
                        <span v-bind:class="desempenhoClass(i.desempenho)"><h3>{{i.moto}}</h3></span>
                      </td>
                      <td >
                        <span v-bind:class="desempenhoClass(i.desempenho_cota)"><h3>{{i.cota}}</h3></span>
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
                <table class="table table-sm table-nowrap card-table">

                  <thead>
                    <tr>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-project">
                          NOME
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-status">
                          MOTOS
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-progress">
                          COTAS
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-date">
                          VISITAS
                        </a>
                      </th>
                    </tr>
                  </thead>
<!--
                  <tbody class="list" v-if="!existeCidade">
                    <tr>
                      <td class="goal-project" >
                        <div class="avatar avatar-xs">
                          <img src="{{ value.avatar.url}}" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div id="nome-vendedor" style="width: 30px;">{{value.vendedor}}</div>
                      </td>
                      <td class="goal-status">
                        <span class="badge badge-soft-success"><h3>{{value.moto}}</h3></span>
                      </td>
                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{value.cota}}</h3></span>
                      </td>
                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{value.visita}}</h3></span>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody> -->

                  <tbody class="list" v-bind:id="i.nome"
                  v-for="i in equipe" :key="i.nome" :class="{active:i.nome == selected}" @click="selected = i.nome; desVendedor(i.cpf); getVendedorSintetico($event)">
                    <tr>
                      <td class="goal-project" >
                        <div class="avatar avatar-xs">
                          <img v-bind:src="i.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div v-bind:id="i.nome">{{ i.nome ? i.nome.slice(0,20) : i.nome}} </div>
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
                  <!--  USUARIO QUE VENDERAM MAS NAO SAO DA EQUIPE -> MODEL FOREST -->
                  <tbody class="list" v-for="i in forest" :key="i.nome">
                    <tr class="forest" >
                      <td >
                        <!-- <div class="avatar avatar-xs">
                          <img v-bind:src="i.avatar" alt="..." class="avatar-img rounded-circle">
                        </div> -->
                        <div v-bind:id="i.nome" @click="getVendedorSintetico " >{{ i.nome ? i.nome.slice(0,20) : i.nome}}</div>
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
                  <tbody class="list" v-for="i in equipeModelo" :key="i.nome">
                    <tr >
                      <td >
                        <div class="avatar avatar-xs">
                          <img v-bind:src="i.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div v-bind:id="i.nome" @click="getVendedorSintetico ">{{ i.nome ? i.nome.slice(0,20) : i.nome}}</div>
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
                <table class="table table-sm card-table" >
                  <thead>
                    <tr>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-project">
                          NOME
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-status">
                          MOTOS
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-date">
                          AREA MOTO
                        </a>
                      </th>
                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-progress">
                          COTAS
                        </a>
                      </th>

                      <th>
                        <a href="#" class="text-muted sort" data-sort="goal-date">
                          AREA COTA
                        </a>
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

                    <!-- MOSTRA DETALHES DE CLICAR NA CIDADE -->
                    <!-- <tbody  v-for="x in desempenhoMoto" :key="x.moto" :class="{active:moto.modelo == selected}"
                            @click="selected = x.nome; getModeloSintetico($event)">
                    <tr>
                      <td class="goal-project">
                        <div class="avatar avatar-xs">
                          <img v-bind:src="x.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        <div :id="x.nome" style="width: 110px;" >{{x.nome.slice(0,20)}}</div>
                      </td>
                      <td hidden :id="x.nome" > 213123</td>
                      <td class="goal-status">
                        <span  class="badge badge-soft-success"><h3>{{x.moto}}</h3></span>
                      </td>
                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{x.area_moto}}%</h3></span>
                      </td>

                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{x.cota}}</h3></span>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{x.area_cota}}%</h3></span>
                      </td>
                    </tr>

                  </tbody> -->

                    <!-- MOSTRA DETALHES DE CLICAR NO VENDEDOR -->
                    <!-- <tbody >
                    <tr v-for="x in modeloVendedor" :key="x.modelo" >
                      <td class="goal-project">
                        <div class="avatar avatar-xs">
                          <img v-bind:src="x.avatar" alt="..." class="avatar-img rounded-circle">
                        </div>
                        {{x.modelo}}
                        vendedor
                      </td>
                      <td class="goal-status">
                        <span class="badge badge-soft-success"><h3>{{x.moto}}</h3></span>
                      </td>
                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{x.area_moto}}%</h3></span>
                      </td>

                      <td class="goal-progress">
                        <span class="badge badge-soft-success"><h3>{{x.cota}}</h3></span>
                      </td>

                      <td class="goal-date">
                        <span class="badge badge-soft-success"><h3>{{x.area_cota}}%</h3></span>
                      </td>
                    </tr>

                  </tbody> -->

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

export default {
  name: 'Home',
  components: {

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
      selectedVendedor: ''
    }
  },
  mounted () {
    this.regiao = this.$store.state.regiao
    this.id = this.$store.state.id
    var vm = this
    const config = {
      headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
        Authorization: `JWT ${this.$store.state.jwt}`,
        'Content-Type': 'application/json'
      }
    }
    axios.get(`http://127.0.0.1:8000/api/desempenho/modelo/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.motos = response.data
        vm.selectMotos = response.data
      })
    axios.get(`http://127.0.0.1:8000/api/listagem/cidade/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.cidades = response.data
        vm.selectCidades = response.data
      })
    axios.get(`http://127.0.0.1:8000/api/desempenho/regiao/geral/${vm.regiao}/${vm.id}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
      .then(function (response) {
        vm.equipe = response.data.equipe
        vm.selectVendedores = response.data.equipe
      })
    axios.get(`http://127.0.0.1:8000/api/desempenho/geral/cabecalho/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
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
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
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
      axios.get(`http://127.0.0.1:8000/api/desempenho/${cidade}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then(response => {
          this.existeCidade = true
          this.detalheCidade = true
          this.detalheMoto = false
          this.equipe = response.data.equipe
          this.forest = response.data.forest
          // this.desempenhoMoto = response.data.moto
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
      // this.cidades = []
      var modelo = event.target.id
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`http://127.0.0.1:8000/api/desempenho/modelo/${modelo}/${this.regiao}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then((response) => {
          this.detalheMoto = true
          this.cidadeModelo = response.data.cidade
          this.equipeModelo = response.data.equipe
        })
    },
    desVendedor: function (cpf) {
      this.detalheMoto = false
      this.detalheCidade = false
      this.motos = []
      // var cpf = event.target.id
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`http://127.0.0.1:8000/api/desempenho/vendedor/${cpf}/${this.regiao}/${this.dia}/${this.mes}/${this.ano}/`, config)
        .then((response) => {
          console.log(response.data)
          this.detalheVendedor = true
          this.cidadeVendedor = response.data.cidade
          this.motos = response.data.moto
          // this.
        })
    },
    desRegiao: function () {
      this.detalheCidade = false
      this.detalheMoto = false
      this.detalheVendedor = false
      this.existeCidade = false
      this.equipeModelo = []
      this.cidadeModelo = []
      this.cidadeVendedor = []
      this.modeloVendedor = []

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
      axios.get(`http://127.0.0.1:8000/api/desempenho/modelo/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.motos = response.data
        })
      axios.get(`http://127.0.0.1:8000/api/listagem/cidade/${vm.regiao}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.cidades = response.data
        })
      axios.get(`http://127.0.0.1:8000/api/desempenho/regiao/geral/${vm.regiao}/${vm.id}/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.equipe = response.data.equipe
        })
      axios.get(`http://127.0.0.1:8000/api/desempenho/geral/cabecalho/${vm.dia}/${vm.mes}/${vm.ano}/`, config)
        .then(function (response) {
          vm.cabecalho = response.data
        })
    },
    getRegiao: function () {
      const config = {
        headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      axios.get(`http://127.0.0.1:8000/api/produto/${this.selectedModelo}/${this.dia}/${this.mes}/${this.ano}/${this.selectedRegiao}`, config)
        .then(response => {
          this.data = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCidadeSintetico: function (event) {
      this.selectedCidade = event.target.id
    },
    getVendedorSintetico: function (event) {
      this.selectedVendedor = event.target.id
    },
    getModeloSintetico: function (event) {
      console.log(event.target)
      this.selectedModelo = event.target.id
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
