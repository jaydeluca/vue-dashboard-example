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
            total: 720,
            delta: 16
          },
          week: {
            total: 160,
            delta: -3
          },
          average: {
            total: 160,
            delta: 9
          }
        },
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