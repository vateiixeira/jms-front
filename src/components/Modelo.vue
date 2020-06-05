<template>
<div class="main-content">
        <div class="container-fluid">
            <div class="header-body mt-n5 mt-md-n3">
                <div class="row align-items-end">
                    <!-- <div class="col-auto">
                        <div class="avatar avatar-xxl header-avatar-top" >
                            <img :src="data.avatar" alt="..." class="avatar-img rounded">
                        </div>
                    </div> -->
                    <div class="col mb-3 ml-n3 m1-md-n2">
                    <h1 class="header-title" v-if="data.cidades.length > 0">
                        Cidades
                    </h1>
                    <h4 class="header-pretitle" v-for=" cidade in data.cidades" :key="cidade.index">
                         -{{cidade}}
                    </h4>
                    <h1 class="header-title" v-if="data.modelos.length > 0">
                        Modelos
                    </h1>
                    <h4 class="header-pretitle" v-for="modelo in data.modelos" :key="modelo.index">
                        -{{modelo}}
                    </h4>
                    <h1 class="header-title" v-if="data.vendedores.length > 0">
                        Vendedores
                    </h1>
                    <h4 :v-if="data.vendedor" class="header-pretitle" v-for="vendedor in data.vendedores" :key="vendedor.index">
                        -{{vendedor}}
                    </h4>
                    </div>
                </div>
            </div>
            </div>
            <!-- CARDS BODY -->
            <div class="container-fluid">
                <div class="row">
                    <!-- CARD PLANEJADO / REALIZADO -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            VALOR PLANEJADO
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
                            VALOR REALIZADO
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            ${{data.realizado_modelo}}
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
                        </div>
                    </div>
                    </div>
                    </div>
                    <!-- CARD QUANTIDADE REALIZADA / PLANEJADA -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            QUANTIDADE PLANEJADA
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            20
                            </span>

                            <!-- Badge -->
                            <!-- <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            QUANTIDADE REALIZADA
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.quantidade_modelo}}
                            </span>

                            <!-- Badge
                            <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            QUANTIDADE TOTAL MODELOS
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.quantidade_total}}
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
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <!-- SEGUNDA LINHA DE CARDS -->
                <div class="row">
                    <!-- CARD PLANEJADO / REALIZADO -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            PARTICIPAÇÃO VALOR
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.participacao_realizado}}%
                            </span>

                            <!-- Badge -->
                            <!-- <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            PARTICIPAÇÃO QUANTIDADE
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.participacao_quantidade}}%
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
                        </div>
                    </div>
                    </div>
                    </div>
                    <!-- CARD QUANTIDADE REALIZADA / PLANEJADA -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            TICKET MÉDIO
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            ${{data.ticket_medio}}
                            </span>

                            <!-- Badge -->
                            <!-- <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <div class="chart chart-sparkline">
                                <canvas class="chart-canvas"  id="sparklineChartSocialOne"></canvas>
                            </div>
                        </div>

                        <div class="col-auto">

                            <!-- Icon -->
                            <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>

                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <!-- TERCEIRA LINHA DE CARDS -->
                <div class="row">
                    <!-- CARD PLANEJADO / REALIZADO -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            MARGEM VALOR
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.margem}}
                            </span>

                            <!-- Badge -->
                            <!-- <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            MARGEM UNITÁRIO
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.margem_unitario}}
                            </span>

                            <!-- Badge
                            <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                              </div>

                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            PARTICIPAÇÃO MARGEM UNITARIO
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            {{data.participacao_margem}}%
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
                        </div>
                    </div>
                    </div>
                    </div>
                    <!-- CARD QUANTIDADE REALIZADA / PLANEJADA -->

                    <div class="col-12 col-lg-6 col-xl">
                    <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Title -->
                            <h6 class="text-uppercase text-muted mb-2">
                            ESTOQUE DIA
                            </h6>

                            <!-- Heading -->
                            <span class="h2 mb-0">
                            INDEFINIDO
                            </span>

                            <!-- Badge -->
                            <!-- <span class="badge badge-soft-success mt-n1">
                            +3.5%
                            </span> -->
                        </div>
                        <div class="col">

                            <div class="chart chart-sparkline">
                                <canvas class="chart-canvas"  id="sparklineChartSocialOne"></canvas>
                            </div>
                        </div>

                        <div class="col-auto">

                            <!-- Icon -->
                            <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>

                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        <!--  CONTEUDO DO MEIO -->
        <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Title -->
                    <h4 class="card-header-title">
                      TOTAIS GERAIS
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
                <table class="table table-sm table-nowrap card-table">
                  <thead>
                    <tr>
                      <th>
                          FORMA
                      </th>
                      <th>
                          VALOR
                      </th>
                      <th>
                          PARTICIPAÇÃO
                      </th>
                      <th>
                          PARTICIPAÇÃO MARGEM
                      </th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>
                          A vista
                      </td>
                      <td>
                        <span><h3>{{data.avista}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_avista}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_avista_lucratividade}} %
                      </td>
                    </tr>
                    <tr>
                      <td>
                          Cartão
                      </td>
                      <td>
                        <span><h3>{{data.cartao}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_cartao}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_cartao_lucratividade}} %
                      </td>
                    </tr>
                    <!-- <tr>
                      <td>
                          C/ Apresentação
                      </td>
                      <td>
                        <span><h3>{{data.capresentacao}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_capresentacao}}
                      </td>
                      <td>
                          indefinido, falta programar
                      </td>
                    </tr> -->
                    <tr>
                      <td>
                          CDC
                      </td>
                      <td>
                        <span><h3>{{data.cdc}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_cdc}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_cdc_lucratividade}} %
                      </td>
                    </tr>
                    <tr>
                      <td>
                          CDCP
                      </td>
                      <td>
                        <span><h3>{{data.cdcp}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_cdcp}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_cdcp_lucratividade}} %
                      </td>
                    </tr>
                    <tr>
                      <td>
                          CNH
                      </td>
                      <td>
                        <span><h3>{{data.cnh}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_cnh}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_cnh_lucratividade}} %
                      </td>
                    </tr>
                    <tr>
                      <td>
                          CONS
                      </td>
                      <td>
                        <span><h3>{{data.cons}}</h3></span>
                      </td>
                      <td >
                        {{data.porcen_cons}} %
                      </td>
                      <td>
                          {{data.lucratividade_formas_pgto.porcen_cons_lucratividade}} %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
    </div>
</template>

<script>

export default {
  props: { data: Object },
  mounted () {
    console.log(this.data)
  }

}
</script>

<style>
    .header-body {
        margin-bottom: 20px;
    }

</style>
