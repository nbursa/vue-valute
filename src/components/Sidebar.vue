<template>
  <div class="sidebar col-4">
    <h2 @click="homePage">Currency List</h2>
    <ul class="sidebar-list">
      <li
        v-for="(currency, index) in currencies"
        :key="index"
        @click.stop="active = index; editCurrency(currency.id)"
        @blur="active = undefined"
        :class="{active: index == active, hover: index == hover}"
        class="sidebar-list__item d-flex justify-content-between align-items-center"
      >
        {{ currency.iso }}
        <div
          @click.stop="deleteCurrency(currency.id)"
          class="sidebar-list__item-button"
          @mouseover="hover = index"
          @mouseleave="hover = undefined"
        >Delete</div>
      </li>
    </ul>
    <div class="sidebar-button" @click.prevent="addCurrency()">Add Currency</div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['currencies'],
  data () {
    return {
      filtered: [],
      active: undefined,
      hover: undefined
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
      if (this.$route.path !== '/edit?id=' + id) this.$router.push({ path: '/edit', query: { id } })
    },
    homePage: function () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    emit: function (data) {
      this.$emit('filtered-items', data)
    }
  },
  destroyed () {
    this.filtered = []
    this.$props.curencies = []
    this.active = undefined
    this.hover = undefined
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
      border: 0;
      border-bottom: 1px solid #cccccc;
      height: 50px;
      cursor: default;
      &.hover {
        color: lighten(#737373, 15%);
        background-color: darken(#eeeeee, 3%);
        .sidebar-list__item-button {
          color: #737373;
          background-color: darken(#eeeeee, 12%);
        }
      }
      &-button {
        border: 0;
        outline: none;
        font-size: 0.5rem;
        padding: 9px 10px;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
      }
      &.active {
        background-color: darken(#eeeeee, 10%);
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
