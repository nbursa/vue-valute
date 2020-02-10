<template>
  <div class="index col-8">
    <h5>Index</h5>
    <div class="result" v-for="(r, i) in result" :key="i">
      {{ i + 1 + '.' }} {{ r }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['result']
}
</script>
