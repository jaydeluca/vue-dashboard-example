<template>
    <p :class="{ 'percent': true, 'is-red': isNegative(delta)}">
        <span class="icon">
            <i :class="carrotDirection(delta)" aria-hidden="true"></i>
        </span>
        {{ formatDelta(delta) }}
    </p>
</template>

<script>
  export default {
    name: 'Percentage',
    props: ['delta'],
    methods: {
      carrotDirection(delta) {
        return delta > 0 ? 'fa fa-caret-up' : 'fa fa-caret-down';
      },

      formatDelta(delta) {
        let prefix = delta > 0 ? '+' : '';
        return prefix + delta + '%';
      },

      isNegative(delta) {
        return delta < 0;
      }
    }
  }
</script>