<template>
  <div id="app" class="container-flex d-flex flex-wrap">
    <Navigation></Navigation>
    <Sidebar :currencies="currencies" @filtered-items="receiveEventData"></Sidebar>
    <router-view :currencies="currencies" :id="id" @filtered-items="receiveEventData"/>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  data () {
    return {
      currencies: []
    }
  },
  computed: {
    id () {
      return this.currencies.length + 1
    }
  },
  methods: {
    receiveEventData (data) {
      this.currencies = data
    }
  },
  components: {
    Sidebar,
    Navigation
  }
}
</script>
<style lang="scss">
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
body {
  overflow: hidden;
}
#app {
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
  color: #737373;
  font-family: 'Open Sans', sans-serif;
}
</style>
