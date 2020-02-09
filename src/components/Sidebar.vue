<template>
  <div class="sidebar col-4">
    <h2 @click="homePage">Currency List</h2>
    <ul class="sidebar-list">
      <li
        v-for="(currency, index) in currencies"
        :key="index"
        @click.stop="editCurrency(currency.id)"
        class="sidebar-list__item d-flex justify-content-between align-items-center"
      >
        {{ currency.iso }}
        <div
          @click.stop="deleteCurrency(currency.id)"
          class="sidebar-list__item-button"
        >Delete</div>
      </li>
    </ul>
    <div class="sidebar-button" @click.prevent="addCurrency()">Add Currency</div>
    Currencies: {{ currencies }}
    <br />
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['currencies'],
  data () {
    return {
      filtered: []
    }
  },
  methods: {
    deleteCurrency: function (id) {
      const filtered = this.currencies.filter(currency => {
        return currency.id !== id
      })
      this.emit(filtered)
    },
    addCurrency: function () {
      if (this.$route.path !== '/add') this.$router.push('/add')
    },
    editCurrency: function (id) {
      (this.$route.path !== '/edit?id=' + id) && this.$router.push({ path: '/edit', query: { id } })
    },
    homePage: function () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    emit: function (data) {
      this.$emit('filtered-items', data)
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  height: calc(100vh - 40px);
  overflow: hidden;
  overflow-y: auto;
  background-color: #eeeeee;
  max-width: 300px;
  h2 {
    color: #ff6600;
    display: flex;
    align-items: flex-end;
    font-weight: 400;
    font-size: 1rem;
    border-bottom: 1px solid #ff6600;
    height: 50px;
    align-content: flex-end;
    padding-bottom: 10px;
    cursor: pointer;
  }
  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    &__item {
      padding: 10px 0;
      border: 0;
      border-bottom: 1px solid #cccccc;
      cursor: default;
      &-button {
        border: 0;
        outline: none;
        font-size: 0.5rem;
        padding: 9px 10px;
        cursor: pointer;
      }
    }
  }
  &-button {
    color: #ff6600;
    width: 100%;
    text-align: left;
    padding: 14px 0;
    border: 0;
    border-bottom: 1px solid #cccccc;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
