<template>
  <div class="index col-8">
    <!-- <h2>Currencies</h2>
    <div class="currencies" v-for="(currency, index) in currencies" :key="index">
      <p>id: {{ currency.id }} </p>
      <p>iso: {{ currency.iso }} </p>
      <p>symbol: {{ currency.symbol }} </p>
      <hr>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['currencies']
}
</script>

<style lang="scss">
.index {
  .currencies {}
}
</style>
