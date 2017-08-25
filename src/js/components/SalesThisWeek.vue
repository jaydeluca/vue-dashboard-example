<template>
    <div>
        <line-chart :data="chartData"
                    :options="options"
                    css-classes="chart">
        </line-chart>
        <div class="columns margin-top">
            <div class="column is-4">
                <p class="subheading is-marginless">
                    This month
                </p>
                <p class="is-bold is-size-5 is-marginless">
                    720
                </p>
                <p class="percent is-green">
                    <span class="icon">
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                    +16%
                </p>
            </div>
            <div class="column is-4">
                <p class="subheading is-marginless">
                    This week
                </p>
                <p class="is-bold is-size-5 is-marginless">
                    160
                </p>
                <p class="percent is-red">
                    <span class="icon">
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    -3%
                </p>
            </div>
            <div class="column is-4">
                <p class="subheading is-marginless">
                    Average
                </p>
                <p class="is-bold is-size-5 is-marginless">
                    24.3
                </p>
                <p class="percent is-green">
                    <span class="icon">
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                    +9%
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    name: 'SalesChart',
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