<template>
    <line-chart :data="chartData"
                :options="options"
                css-classes="chart">
    </line-chart>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    name: 'EarningsChart',
    components: {LineChart},
    data() {
      return {
        chartData: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              label: 'Earnings This Week',
              backgroundColor: '#e6f3d9',
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