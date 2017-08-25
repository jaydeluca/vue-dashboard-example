<template>
    <div class="margin-left is-flex">
        <template v-if="!searching">
            <span class="icon" style="cursor: pointer;" @click="searching=true">
                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
        </template>
        <template v-else>
            <p class="control">
                <input type="text" class="input is-small" v-model="searchTerm">
            </p>
            <button class="button is-small" @click="searchTerm=''">Search</button>
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
        searching: false,
        searchTerm: ''
      }
    }
  }
</script>