<template>
    <div>
        <line-chart :data="chartData"
                    :options="options"
                    css-classes="chart">
        </line-chart>
        <chart-metrics :metrics="metrics"></chart-metrics>
    </div>
</template>

<script>
  import LineChart from './LineChart'
  import ChartMetrics from './ChartMetrics'

  export default {
    name: 'EarningsChart',
    components: {LineChart, ChartMetrics},
    data() {
      return {
        metrics: {
          month: {
            total: '$6,540',
            delta: 4
          },
          week: {
            total: '$1,525',
            delta: -7
          },
          average: {
            total: '$9,352',
            delta: 35
          }
        },
        chartData: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              label: 'Earnings This Week',
              backgroundColor: '#e6f3d9',
              data: [220, 170, 200, 230, 300, 200, 400]
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