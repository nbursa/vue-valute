<template>
  <div class="navbar col-12">
    <input class="navbar-search" type="text" v-model="search">
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['currencies'],
  data () {
    return {
      search: '',
      results: ''
    }
  },
  updated () {
    this.results = this.currencies.filter(c => {
      if (this.search) {
        if (this.$route.path !== '/') this.$router.push('/')
        if (c.iso.toLowerCase().includes(this.search.toLowerCase())) {
          return c.iso.toLowerCase().includes(this.search.toLowerCase())
        } else if (c.symbol.toLowerCase().includes(this.search.toLowerCase())) {
          return c.symbol.toLowerCase().includes(this.search.toLowerCase())
        } else if (c.id === parseInt(this.search, 10)) {
          return c.id === parseInt(this.search, 10)
        }
      }
    })
    this.$emit('results', this.results)
  }
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  background-color: #FF6600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-search {
    height: 25px;
    padding-left: 10px;
    font-size: 15px;
    outline: none;
    border-radius: 5px;
  }
}
</style>
