<template>
    <line-chart :data="chartData" :options="options"/>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    components: {LineChart},
    data() {
      return {
        chartData: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              label: 'Sales This Week',
              backgroundColor: '#d1e7fc',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  }
</script>