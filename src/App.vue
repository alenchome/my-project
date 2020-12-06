<template>
  <div id="app">
    <router-view/>
    <btmlist v-show="this.$route.meta.showbtmlist"/>
  </div>
</template>

<script>
import btmlist from './components/btmlist.vue'

export default {

  mounted() {
    this.$store.dispatch('getAddress')
  },
  components: {
    btmlist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
