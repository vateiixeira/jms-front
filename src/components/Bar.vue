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
    listValues: Array
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
          label: 'Quantidade',
          data: this.listValues,
          backgroundColor: 'rgba(255,255,255,0.2)'
        }]
      }
    })
  }
}
</script>
