<template>
    <div class="margin-left is-flex">
        <template v-if="!searching">
            <span class="icon" style="cursor: pointer;" @click="searching=true">
                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
        </template>
        <template v-else>
            <p class="control">
                <input type="text" class="input is-small">
            </p>
            <button class="button is-small">Search</button>
            <button class="button is-small" @click="searching=false">
                <span class="icon">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                </span>
            </button>
        </template>
    </div>
</template>

<script>

  export default {
    name: 'SearchBar',
    data() {
      return {
        searching: false
      }
    }
  }

</script>