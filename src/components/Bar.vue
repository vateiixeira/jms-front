<template>
<div class="">
<canvas :id="title"  height="90px"></canvas>
</div>

</template>
<script>
// import { Bar } from 'vue-chartjs'
import Chart from 'chart.js'

export default {
  props: {
    title: String,
    listPreviso: Array,
    listAplicado: Array,
    listPreaplicado: Array
  },
  mounted () {
    const ctx = document.getElementById(this.title).getContext('2d')
    return new Chart(ctx, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{

          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Aplicado',
          data: this.listAplicado,
          borderColor: 'rgb(254, 30, 0)',
          fill: false
        },
        {
          label: 'Previsto',
          data: this.listPreviso,
          borderColor: 'rgb(59, 166, 253)',
          fill: false
        },
        {
          label: 'Pré-Aplicado',
          data: this.listPreaplicado,
          borderColor: 'rgba(255,255,255,0.9)',
          fill: false
        },
        {
          label: 'Potencial',
          data: [2, 2, 3, 2, 3, 4, 4, 4, 4, 4, 4, 3],
          borderColor: 'rgba(135,145,24,0.9)',
          fill: false
        }
        ]
      }
    })
  }
}
</script>

<style>
</style>
