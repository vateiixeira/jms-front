<template>

  <div class="container">
              <button
            @click="alterarEtapa"
            class="btn btn-warning"
            style="margin-top: 15px;"
          >Alterar etapa!</button>
        <p class="text-muted">
          Botão para alterar etapa, ele não ficará disponivel depois.. apenas para testes.
        </p>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        color="#fff"
        background-color="#12263f"
        :width="loadConfig.width"
        :height="loadConfig.height"
        :opacity="loadConfig.opacity"
      ></loading>
    </div>
    <br />

    <!-- SEGUNDO CARD -->
    <div v-if="!nextEtapa">
      <div class="card">
  <div class="card-body text-center">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-10">

        <!-- Image -->
        <img src="../assets/img/illustrations/happiness.svg" alt="..." class="img-fluid mt-n5 mb-4" style="max-width: 272px;">

        <!-- Title -->
        <h2 class="mb-2">
          Bem-vindo a primeira etapa do planejamento de motos!
        </h2>

        <!-- Content -->
        <p class="text-muted">
          Escolha o modelo e distribua as quantidades de cada para o respectivo mês.
          Pode ir trocando e mudando como quiser.
          Quando terminar, não esqueça de clicar no botão para salvar suas alterações, Ok ?
        </p>
      </div>
    </div> <!-- / .row -->
  </div>
</div>
    <br />
    <h2>Modelo</h2>
    <select
      class="custom-select"
      id="modelo"
      v-model="modelo"
      @change="modeloChange($event), modeloChecked($event)"
    >
      <option
        v-for="(key, index) in dados.modelo"
        :key="index"
        :value="index"
      >{{index}} {{isActiveModelo[index] ? '&#xf00c;' : ''}}</option>
    </select>
    <div class="card">
      <div class="card-body">
        <!-- Chart -->
        <div>
          <span>Total previsto:{{totalPrevistoModelo}}</span>
          <br />
          <span>Soma aplicado:{{totalSomaAplicadoModelo}}</span>
          <bar-chart-modelo
            :title="modelo"
            :listPreviso="previstoModelo"
            :listAplicado="aplicadoModelo"
            v-if="loadedModelo"
          ></bar-chart-modelo>
          <div class="row flex-nowrap">
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                type="number"
                :value="aplicadoModelo[0]"
                @change="mudaData($event,0)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[1] "
                @change="mudaData($event,1)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[2]"
                @change="mudaData($event,2)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[3]"
                @change="mudaData($event,3)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[4]"
                @change="mudaData($event,4)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[5]"
                @change="mudaData($event,5)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[6]"
                @change="mudaData($event,6)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[7]"
                @change="mudaData($event,7)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[8]"
                @change="mudaData($event,8)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[9]"
                @change="mudaData($event,9)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[10]"
                @change="mudaData($event,10)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoModelo[11]"
                @change="mudaData($event,11)"
              />
            </div>
          </div>
          <button
            @click="submitFirstEtapa"
            class="btn btn-success"
            style="margin-top: 15px;"
          >Salvar Primeira etapa!</button>
        </div>
      </div>
    </div>
    </div>
    <!-- SEGUNDO CARD -->
    <div v-else>
    <div class="card">
      <div class="card-body text-center">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">

            <!-- Image -->
            <img src="../assets/img/illustrations/scale.svg" alt="..." class="img-fluid mt-n5 mb-4" style="max-width: 272px;">

            <!-- Title -->
            <h2 class="mb-2">
              Bem-vindo a segunda etapa do planejamento de motos!
            </h2>

            <!-- Content -->
            <p class="text-muted">
              Agora você irá distribuir os modelos para as cidades e os vendedores da sua região.
            </p>
          </div>
        </div> <!-- / .row -->
      </div>
</div>
        <p class="text-muted">
          Você está localizado na região: {{regiao}}
        </p>
    <br />
    <h2>Cidade</h2>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Aplicado : {{totalCidadeAplicado}}
    </p>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Pré-Aplicado : {{totalCidadePreaplicado}}
    </p>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Previsto : {{totalCidadePrevisto}}
    </p>
    <!-- <div v-for="(key, index) in isActiveModeloCidade" :key="index"></div> -->
    <select class="custom-select" v-model="cidadeModelo" @change="cidadeChangeFirst(cidadeModelo,currentModelo)">
      <option v-for="(key, index) in dados.cidade" :key="index">{{index}} {{isActiveCidadeCidade[index] ? '&#xf00c;' : ''}}</option>
    </select>
    <select class="custom-select" v-model="modeloCidade" @change="cidadeChange" id="modeloCidade">
      <option v-for="(key, index) in dados.modelo" :key="index" :value="index" >{{index}} {{isActiveModeloCidadeF(index) ? '&#xf00c;' : ''}}</option>
    </select>
    <div class="card">
      <div class="card-body">
        <!-- Chart -->
        <div class>
          <span>Previsto:{{totalPrevistoCidade}}</span>
          <br />
          <span>Pré-aplicado:{{totalPreaplicadoCidade}}</span>
          <br />
          <span>Aplicado:{{totalSomaAplicadoCidade}}</span>
          <bar-chart-cidade
            :title="cidadeModelo"
            :listPreviso="previstoCidade"
            :listAplicado="aplicadoCidade"
            :listPreaplicado="preaplicadoCidade"
            v-if="loadedCidade"
          ></bar-chart-cidade>
          <div class="row flex-nowrap">
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                type="number"
                :value="aplicadoCidade[0]"
                @change="mudaDataCidade($event,0)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[1]"
                @change="mudaDataCidade($event,1)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[2]"
                @change="mudaDataCidade($event,2)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[3]"
                @change="mudaDataCidade($event,3)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[4]"
                @change="mudaDataCidade($event,4)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[5]"
                @change="mudaDataCidade($event,5)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[6]"
                @change="mudaDataCidade($event,6)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[7]"
                @change="mudaDataCidade($event,7)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[8]"
                @change="mudaDataCidade($event,8)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[9]"
                @change="mudaDataCidade($event,9)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[10]"
                @change="mudaDataCidade($event,10)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoCidade[11]"
                @change="mudaDataCidade($event,11)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SEGUNDO CARD -->
    <br />
    <h2>Vendedor</h2>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Aplicado : {{totalVendedorAplicado}}
    </p>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Pré-Aplicado : {{totalVendedorPreaplicado}}
    </p>
    <p class="text-muted" style="margin-bottom: 2px;">
      Total Previsto : {{totalVendedorPrevisto}}
    </p>
    <select class="custom-select" v-model="vendedorModelo" >
      <option v-for="(key, index) in dados.vendedor" :key="index">{{index}}</option>
    </select>
    <select class="custom-select" v-model="modeloVendedor" @change="vendedorChange">
      <option v-for="(key, index) in dados.modelo" :key="index" :value="index">{{index}}</option>
    </select>
    <div class="card">
      <div class="card-body">
        <!-- Chart -->
        <div>
          <span>Previsto:{{totalPrevistoVendedor}}</span>
          <br />
          <span>Pré-aplicado:{{totalPreaplicadoVendedor}}</span>
          <br />
          <span>Aplicado:{{totalSomaAplicadoVendedor}}</span>
          <bar-chart-vendedor
            :title="modeloVendedor"
            :listPreaplicado="preaplicadoVendedor"
            :listPreviso="previstoVendedor"
            :listAplicado="aplicadoVendedor"
            v-if="loadedVendedor"
          ></bar-chart-vendedor>
          <div class="row flex-nowrap">
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                type="number"
                :value="aplicadoVendedor[0]"
                @change="mudaDataVendedor($event,0)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[1]"
                @change="mudaDataVendedor($event,1)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[2]"
                @change="mudaDataVendedor($event,2)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[3]"
                @change="mudaDataVendedor($event,3)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[4]"
                @change="mudaDataVendedor($event,4)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[5]"
                @change="mudaDataVendedor($event,5)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[6]"
                @change="mudaDataVendedor($event,6)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[7]"
                @change="mudaDataVendedor($event,7)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[8]"
                @change="mudaDataVendedor($event,8)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[9]"
                @change="mudaDataVendedor($event,9)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[10]"
                @change="mudaDataVendedor($event,10)"
              />
            </div>
            <div class="butao">
              <input
                class="form-control form-control-rounded"
                :value="aplicadoVendedor[11]"
                @change="mudaDataVendedor($event,11)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
            <p class="text-muted">
          Após aplicar todos os dados, não se esqueça de salvar, clicando no botão abaixo!!
        </p>
                  <button
            @click="submitDados"
            class="btn btn-warning"
            style="margin-top: 15px;"
          >Salvar Planejamento!</button>
  </div>
  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs'
import BarChart from './Bar'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    'bar-chart-modelo': BarChart,
    'bar-chart-vendedor': BarChart,
    'bar-chart-cidade': BarChart,
    Loading
  },
  data: () => ({
    arrAplicadoModelo: [],
    totalPrevistoModelo: 0,
    totalSomaAplicadoModelo: 0,
    arrAplicadCidade: [],
    totalPrevistoCidade: 0,
    totalSomaAplicadoCidade: 0,
    arrAplicadVendedor: [],
    totalPrevistoVendedor: 0,
    totalSomaAplicadoVendedor: 0,
    totalPreaplicadoCidade: 0,
    totalPreaplicadoVendedor: 0,
    preaplicadoCidade: [],
    preaplicadoVendedor: [],
    cidadeModelo: '',
    dados: '',
    formSave: {
      modelo: {},
      vendedor: {},
      cidade: {}
    },
    regiao: '',
    valor: 1000,
    modelo: '',
    modeloCidade: '',
    modeloVendedor: '',
    vendedorModelo: '',
    cidade: '',
    vendedor: '',
    aplicadoVendedor: [],
    aplicadoCidade: [],
    aplicadoModelo: [],
    previstoVendedor: [],
    previstoCidade: [],
    previstoModelo: [],
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
    },
    isActiveModelo: {},
    isActiveModeloCidade: {},
    isActiveCidadeCidade: {},
    formCidade: {},
    formVendedor: {},
    currentModelo: '',
    currentCidadeCidade: '',
    currentCidadeModelo: '',
    currentVendedorModelo: '',
    currentVendedorVendedor: '',
    nextEtapa: true,
    totalCidadePrevisto: 0,
    totalCidadeAplicado: 0,
    totalCidadePreaplicado: 0,
    totalVendedorPrevisto: 0,
    totalVendedorAplicado: 0,
    totalVendedorPreaplicado: 0
  }),
  async mounted () {
    if (localStorage.regiao) {
      this.regiao = localStorage.regiao
    }
    this.isLoading = true
    this.loaded = false
    try {
      const dataGeral = await axios.get(
        `/previsao/regiao/cota/${this.regiao}/${this.valor}`
      )
      this.dados = dataGeral.data
      this.loaded = true
      this.isLoading = false
    } catch (err) {
      console.log(err)
    }
    // ADICIONA AS KEYS DAS CIDADES NO FORM QUE GRAVA
    Object.keys(this.dados.cidade).map(keys => {
      this.formCidade[keys] = {
        totais: {
          previsto: 0,
          preaplicado: 0,
          aplicado: 0
        }
      }
      // adiciona as cidades ao dict do isactive
      this.isActiveModeloCidade[keys] = {}
    })
    Object.keys(this.dados.vendedor).map(keys => {
      this.formVendedor[keys] = {
        totais: {
          previsto: 0,
          preaplicado: 0,
          aplicado: 0
        }
      }
    })
  },
  methods: {
    modeloChange: function (event) {
      var modelo = event.target.value
      this.currentModelo = modelo
      var objeto = this.dados.modelo[modelo]
      var arr = []
      var somaAplicados = 0
      Object.values(objeto).map((key, index) => {
        arr.push(key)
      })
      this.totalPrevistoModelo = objeto.previsto_anual
      this.previstoModelo = arr.slice(0, 12)
      // checa se existe dados salvos no form
      var check = Object.keys(this.formSave.modelo)
      var existe = Object.values(check).map(value => {
        return value
      })
      if (check.length === 0 || !existe.includes(modelo)) {
        arr.slice(0, 12).map(key => {
          somaAplicados = somaAplicados + key
        })
        this.totalSomaAplicadoModelo = somaAplicados
        this.loadedModelo = false
        this.aplicadoModelo = arr.slice(0, 12)
        setTimeout(() => {
          this.loadedModelo = true
        }, 500)
        this.salvaForm(
          this.aplicadoModelo,
          modelo,
          'MODELO',
          this.totalPrevistoModelo,
          this.totalSomaAplicadoModelo
        )
      } else {
        arr = Object.values(this.formSave.modelo[modelo].dados)
        arr.slice(0, 12).map(key => {
          somaAplicados = parseInt(somaAplicados + key)
        })
        this.totalSomaAplicadoModelo = somaAplicados
        this.loadedModelo = false
        this.aplicadoModelo = arr
        setTimeout(() => {
          this.loadedModelo = true
        }, 500)
        this.salvaForm(
          this.aplicadoModelo,
          modelo,
          'MODELO',
          this.totalPrevistoModelo,
          this.totalSomaAplicadoModelo
        )
      }
    },
    cidadeChange: function (event) {
      var nomecidade = this.cidadeModelo
      if (this.cidadeModelo === '') {
        this.$alert(
          'OPS',
          'Selecione uma cidade!',
          'error'
        )
      }
      var nomemodelo = event.target.value
      this.currentCidadeCidade = nomecidade
      this.currentCidadeModelo = nomemodelo
      var objeto = this.formCidade[nomecidade]
      if (typeof objeto[nomemodelo] === 'undefined') {
        axios
          .get(`list/planejado/${nomemodelo}/${nomecidade}`, {
            previsto: this.totalPrevistoModelo,
            aplicado: this.totalSomaAplicadoModelo
          })
          .then(response => {
            if (response.data === 'error') {
              this.$alert(
                'Refaça a primeira etapa!',
                'Não foi encontrado planejamento para o modelo pesquisado.',
                'error'
              )
            }
            this.loadedCidade = false
            this.previstoCidade = JSON.parse(
              JSON.stringify(response.data.previsto)
            )
            this.aplicadoCidade = JSON.parse(
              JSON.stringify(response.data.preaplicado)
            )
            this.preaplicadoCidade = JSON.parse(
              JSON.stringify(response.data.preaplicado)
            )
            this.totalPreaplicadoCidade = response.data.total_preaplicado
            this.totalPrevistoCidade = response.data.total_previsto
            this.totalSomaAplicadoCidade = response.data.total_preaplicado
            // salva os dados
            var dici = {
              dados: this.aplicadoCidade,
              arrPrevisto: this.previstoCidade,
              previsto: response.data.total_previsto,
              aplicado: this.totalSomaAplicadoCidade,
              preaplicado: this.totalPreaplicadoCidade
            }
            var objeto = this.formCidade[nomecidade]
            objeto[nomemodelo] = dici
            setTimeout(() => {
              this.loadedCidade = true
            }, 500)
            // this.modeloCidadeChecked(nomemodelo, nomecidade)
            var objactive = this.isActiveModeloCidade[nomecidade]
            objactive[nomemodelo] = true
            // soma os totais do modelo
            this.totalCidadePrevisto = objeto.totais.previsto + this.totalPrevistoCidade
            this.totalCidadeAplicado = objeto.totais.aplicado + this.totalSomaAplicadoCidade
            this.totalCidadePreaplicado = objeto.totais.preaplicado + this.totalPreaplicadoCidade
            objeto.totais = {
              previsto: this.totalCidadePrevisto,
              aplicado: this.totalCidadeAplicado,
              preaplicado: this.totalCidadePreaplicado
            }
            // checa quais cidades faltam completar a analise
            var cidades = Object.keys(objeto)
            var falta = Object.keys(this.dados.modelo).filter(e => cidades.indexOf(e) !== -1)
            if (falta.length === Object.keys(this.dados.modelo).length) {
              console.log('acerto mizeravi')
              this.isActiveCidadeCidade[nomecidade] = true
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log(nomemodelo)

        this.loadedCidade = false
        this.previstoCidade = objeto[nomemodelo].arrPrevisto
        this.aplicadoCidade = objeto[nomemodelo].dados
        this.totalPrevistoCidade = objeto[nomemodelo].previsto
        this.totalSomaAplicadoCidade = objeto[nomemodelo].aplicado
        this.totalPreaplicadoCidade = objeto[nomemodelo].preaplicado
        setTimeout(() => {
          this.loadedCidade = true
        }, 500)
        // salva os dados
        var dici = {
          dados: this.previstoCidade,
          arrPrevisto: this.previstoCidade,
          previsto: this.totalPrevistoCidade,
          aplicado: this.totalSomaAplicadoCidade,
          preaplicado: this.totalPreaplicadoCidade
        }
        objeto = this.formCidade[nomecidade]
        objeto[nomemodelo] = dici
        // this.modeloCidadeChecked(nomemodelo, nomecidade)
        console.log(this.formCidade.length)
      }
    },
    vendedorChange: function (event) {
      if (this.vendedorModelo === '') {
        this.$alert(
          'Selecione o vendedor antes do Modelo',
          'Ops!',
          'error'
        )
      }
      var nomeVendedor = this.vendedorModelo
      var nomeModelo = event.target.value
      console.log(event.target.value)
      this.currentVendedorVendedor = nomeVendedor
      this.currentVendedorModelo = nomeModelo
      var objeto = this.formVendedor[nomeVendedor]
      if (typeof objeto[nomeModelo] === 'undefined') {
        axios
          .get(`list/planejado/vendedor/${nomeModelo}/${nomeVendedor}`, {
            previsto: this.totalPrevistoVendedor,
            aplicado: this.totalSomaAplicadoVendedor
          })
          .then(response => {
            if (response.data === 'error') {
              this.$alert(
                'Refaça a primeira etapa!',
                'Não foi encontrado planejamento para o modelo pesquisado.',
                'error'
              )
            }
            this.loadedVendedor = false
            this.previstoVendedor = JSON.parse(
              JSON.stringify(response.data.previsto)
            )
            this.aplicadoVendedor = JSON.parse(
              JSON.stringify(response.data.preaplicado)
            )
            this.preaplicadoVendedor = JSON.parse(
              JSON.stringify(response.data.preaplicado)
            )
            this.totalPreaplicadoVendedor = response.data.total_preaplicado
            this.totalPrevistoVendedor = response.data.total_previsto
            this.totalSomaAplicadoVendedor = response.data.total_preaplicado
            // salva os dados
            var dici = {
              dados: this.aplicadoVendedor,
              arrPrevisto: this.previstoVendedor,
              previsto: response.data.total_previsto,
              aplicado: this.totalSomaAplicadoVendedor,
              preaplicado: this.totalPreaplicadoVendedor
            }
            var objeto = this.formVendedor[nomeVendedor]
            objeto[nomeModelo] = dici
            // mostra na tela os valores e soma com o antigo
            this.totalVendedorPrevisto = objeto.totais.previsto + response.data.total_previsto
            this.totalVendedorAplicado = objeto.totais.aplicado + this.totalSomaAplicadoVendedor
            this.totalVendedorPreaplicado = objeto.totais.preaplicado + response.data.total_preaplicado
            // adiciona os totais
            objeto.totais.aplicado = this.totalVendedorPrevisto
            objeto.totais.previsto = this.totalVendedorPrevisto
            objeto.totais.preaplicado = this.totalVendedorPreaplicado
            setTimeout(() => {
              this.loadedVendedor = true
            }, 500)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.loadedVendedor = false
        this.previstoVendedor = objeto[nomeModelo].arrPrevisto
        this.aplicadoVendedor = objeto[nomeModelo].dados
        this.totalPrevistoVendedor = objeto[nomeModelo].previsto
        this.totalSomaAplicadoVendedor = objeto[nomeModelo].aplicado
        this.totalPreaplicadoVendedor = objeto[nomeModelo].preaplicado
        setTimeout(() => {
          this.loadedVendedor = true
        }, 500)
        // salva os dados
        var dici = {
          dados: this.previstoVendedor,
          arrPrevisto: this.previstoVendedor,
          previsto: this.totalPrevistoVendedor,
          aplicado: this.totalSomaAplicadoVendedor,
          preaplicado: this.totalPreaplicadoVendedor
        }
        objeto = this.formVendedor[nomeVendedor]
        objeto[nomeModelo] = dici
        // adiciona os totais
        this.totalVendedorPrevisto = objeto.totais.previsto
        this.totalVendedorAplicado = objeto.totais.aplicado
        this.totalVendedorPreaplicado = objeto.totais.preaplicado
      }
    },
    mudaData: function (event, position) {
      this.aplicadoModelo[position] = parseInt(event.target.value)
      var somaAplicados = 0
      this.aplicadoModelo.slice(0, 12).map(key => {
        somaAplicados = parseInt(somaAplicados + key)
      })
      this.totalSomaAplicadoModelo = somaAplicados
      this.loadedModelo = false
      setTimeout(() => {
        this.loadedModelo = true
      }, 200)
      this.salvaForm(
        this.aplicadoModelo,
        this.currentModelo,
        'MODELO',
        this.totalPrevistoModelo,
        this.totalSomaAplicadoModelo
      )
    },
    mudaDataCidade: function (event, position) {
      var objeto = this.formCidade[this.currentCidadeCidade]
      var objModelo = objeto[this.currentCidadeModelo]
      var aplicadoInicial = objModelo.aplicado
      this.aplicadoCidade[position] = parseInt(event.target.value)
      var somaAplicados = 0
      this.aplicadoCidade.map(key => {
        somaAplicados = parseInt(somaAplicados + key)
      })
      this.totalSomaAplicadoCidade = somaAplicados
      this.loadedCidade = false
      setTimeout(() => {
        this.loadedCidade = true
      }, 200)
      var dici = {
        dados: this.aplicadoCidade,
        previsto: this.totalPrevistoCidade,
        aplicado: this.totalSomaAplicadoCidade,
        preaplicado: this.totalPreaplicadoCidade
      }
      objeto = this.formCidade[this.currentCidadeCidade]
      objeto[this.currentCidadeModelo] = dici
      // add soma aplicado da cidade
      var diferenca = somaAplicados - aplicadoInicial
      objeto.totais.aplicado = objeto.totais.aplicado + diferenca
      this.totalCidadeAplicado = objeto.totais.aplicado
    },
    mudaDataVendedor: function (event, position) {
      var somaAplicados = 0
      var objeto = this.formVendedor[this.currentVendedorVendedor]
      var aplicadoInicial = objeto.totais.aplicado
      this.aplicadoVendedor[position] = parseInt(event.target.value)
      console.log(this.aplicadoVendedor)
      this.aplicadoVendedor.slice(0, 12).map(key => {
        somaAplicados = parseInt(somaAplicados + key)
      })
      this.totalSomaAplicadoVendedor = somaAplicados
      this.loadedVendedor = false
      setTimeout(() => {
        this.loadedVendedor = true
      }, 200)
      var dici = {
        dados: this.aplicadoVendedor,
        previsto: this.totalPrevistoVendedor,
        aplicado: this.totalSomaAplicadoVendedor,
        preaplicado: this.totalPreaplicadoVendedor
      }
      objeto = this.formVendedor[this.currentVendedorVendedor]
      objeto[this.currentVendedorModelo] = dici
      // add soma aplicado da cidade
      var diferenca = somaAplicados - aplicadoInicial
      objeto.totais.aplicado = objeto.totais.aplicado + diferenca
      this.totalVendedorAplicado = objeto.totais.aplicado
      console.log('somaaplicado', somaAplicados)
      console.log('diferenca', diferenca)
      console.log('inicial', aplicadoInicial)
    },
    salvaForm: function (
      arr,
      nome,
      tipo,
      vlprevisto,
      vlaplicado,
      nomeModelo = ''
    ) {
      var dict = {}
      if (tipo === 'MODELO') {
        dict = {
          dados: arr,
          previsto: vlprevisto,
          aplicado: vlaplicado
        }
        this.formSave.modelo[nome] = dict
        console.log('registro salvo:' + nome)
        console.log(this.formSave)
      } else if (tipo === 'cidade') {
        dict = {
          dados: arr,
          previsto: vlprevisto,
          aplicado: vlaplicado
        }
        this.formSave.cidade.nome[nomeModelo] = 'ok'
        console.log('registro salvo:' + nome)
        console.log(this.formSave)
      } else if (tipo === 'vendedor') {
        dict = {
          dados: arr,
          previsto: vlprevisto,
          aplicado: vlaplicado
        }
        this.formSave.vendedor[nome] = dict
        console.log('registro salvo:' + nome)
        console.log(this.formSave)
      }
    },
    confirmModeloRegiao: function (event) {
      var target = event.target.value
      console.log(target)
    },
    modeloChecked: function (valor) {
      console.log(this.formSave.modelo[valor.target.value])
      if (this.formSave.modelo[valor.target.value].dados.length > 1) {
        this.isActiveModelo[valor.target.value] = true
      } else {
        console.log('nao deu')
      }
    },
    modeloCidadeChecked: function (modelo, cidade) {
      var objeto = this.formCidade[this.cidadeModelo]
      var teste = objeto[modelo]
      if (teste) {
        var objActive = this.isActiveModeloCidade[cidade]
        objActive[modelo] = true
      } else {
        console.log('u')
      }
    },
    submitFirstEtapa: function () {
      axios
        .post('grava/planejado/cota/etapa1', {
          dados: this.formSave,
          ano: 2020,
          regiao: this.regiao
        })
        .then(response => {
          console.log(response)
          this.nextEtapa = true
        })
        .catch(err => {
          console.log(err)
        })
    },
    alterarEtapa: function () {
      this.nextEtapa = !this.nextEtapa
    },
    calcTotaisCidade: function () {
      var arr = Object.entries(this.formCidade)
      console.log(JSON.parse(JSON.stringify(arr)))
    },
    cidadeChangeFirst: function (nomecidade, nomemodelo) {
      this.currentCidadeCidade = nomecidade
      var objeto = this.formCidade[nomecidade]
      // puxa os dados totais da cidade em especifico
      this.totalCidadePrevisto = objeto.totais.previsto
      this.totalCidadeAplicado = objeto.totais.aplicado
      this.totalCidadePreaplicado = objeto.totais.preaplicado
    },
    isActiveModeloCidadeF: function (modelo = '') {
      var objeto = this.isActiveModeloCidade[this.currentCidadeCidade]
      var objmodelo = objeto
      if (typeof objmodelo === 'undefined') {
        return false
      } else if (objeto[modelo] === true) {
        return true
      } else {
        return false
      }
    },
    submitDados: function () {
      axios.post('salva/planejado/cota', {
        cidade: this.formCidade,
        vendedor: this.formVendedor,
        regiao: this.regiao
      })
        .then(resp => {
          console.log(resp)
        })
    }
  }
}
</script>

<style>
select {
  font-family: "FontAwesome", "Cerebri Sans";
}
.butao {
  width: 110px;
  margin-left: 20px;
  margin-right: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
