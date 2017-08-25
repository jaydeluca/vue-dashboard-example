<template>
    <div class="columns margin-top">
        <div class="column is-4">
            <p class="subheading is-marginless">
                This month
            </p>
            <p class="is-bold is-size-5 is-marginless">
                {{ metrics.month.total }}
            </p>
            <percentage :delta="metrics.month.delta"></percentage>
        </div>
        <div class="column is-4">
            <p class="subheading is-marginless">
                This week
            </p>
            <p class="is-bold is-size-5 is-marginless">
                160
            </p>
            <percentage :delta="metrics.week.delta"></percentage>
        </div>
        <div class="column is-4">
            <p class="subheading is-marginless">
                Average
            </p>
            <p class="is-bold is-size-5 is-marginless">
                24.3
            </p>
            <percentage :delta="metrics.average.delta"></percentage>
        </div>
    </div>
</template>

<script>
    import Percentage from './Percentage';
    export default {
      components: {Percentage},
      name: 'ChartMetrics',
      props: ['metrics']
    }
</script>