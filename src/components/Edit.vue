<template>
  <div class="edit col-8">
    <h2>Edit Currency</h2>
    <form class="form">
      <div class="field d-flex justify-content-between align-items-center">
        <label for="code" class="label">Currency Code</label>
        <div class="input d-flex flex-column" :class="{'error': isoError}">
          <input
             type="text"
             name="code"
             class="input-field iso"
             v-model="iso"
          />
          <p class="input-message">{{ isoError }}</p>
        </div>
      </div>
      <div class="field d-flex justify-content-between align-items-center">
        <label for="symbol" class="label">Currency Symbol</label>
        <div class="input d-flex flex-column" :class="{'error': symbolError}">
          <input type="text" name="symbol" class="input-field" v-model="symbol"/>
          <p class="input-message">{{ symbolError }}</p>
        </div>
      </div>
      <div class="submit d-flex justify-content-end">
        <button class="button" @click.prevent="handleSubmit()">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  props: ['currencies'],
  data () {
    return {
      iso: '',
      symbol: '',
      isoError: '',
      symbolError: ''
    }
  },
  created () {
    this.getCurrency(this.id)
  },
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  watch: {
    id: function (id) {
      this.getCurrency(id)
    },
    iso: function (iso) {
      iso = iso.toUpperCase()
    }
  },
  methods: {
    getCurrency: function (id) {
      this.currencies.map(currency => {
        if (currency.id === id) {
          this.iso = currency.iso
          this.symbol = currency.symbol
        }
      })
    },
    handleSubmit: function () {
      if (!this.iso && !this.symbol) {
        this.isoError = 'Required'
        this.symbolError = 'Required'
      } else if (!this.symbol) {
        this.symbolError = 'Required'
        this.isoError = ''
      } else if (!this.iso) {
        this.isoError = 'Required'
        this.symbolError = ''
      } else if (this.iso.length !== 3) {
        this.isoError = 'Length must be 3 characters'
      } else {
        this.isoError = ''
        this.symbolError = ''
        const newCurrencies = this.currencies
        newCurrencies.map(c => {
          if (c.id === this.id) {
            c.iso = this.iso.toUpperCase()
            c.symbol = this.symbol
          }
        })
        this.emit(newCurrencies)
        this.$router.push('/')
      }
    },
    emit: function (data) {
      this.$emit('filtered-items', data)
    }
  }
}
</script>

<style lang="scss">
.edit {
  height: calc(100vh - 40px);
  overflow: hidden;
  overflow-y: auto;
  max-width: 900px;
  h2 {
    display: flex;
    align-items: flex-end;
    color: #FF6600;
    font-weight: 400;
    font-size: 1rem;
    border-bottom: 1px solid #FF6600;
    height: 50px;
    align-content: flex-end;
    padding-bottom: 10px;
  }
  .form {
    .field {
      border-bottom: 1px solid #cccccc;
      margin: 19px 0 10px;
      .label {
        font-size: 0.75rem;
      }
      .input {
        &.error {
          .input-field {
            color: #FF6600;
            border: 1px solid #ff6600;
          }
          .input-message {
            color: #FF6600;
            visibility: visible;
          }
        }
        &-field {
          outline: 0;
          box-shadow: none;
          padding: 0 10px;
          &.iso {
            text-transform: uppercase;
          }
        }
        &-message {
          font-size: 0.5rem;
          display: block;
          visibility: hidden;
          width: 100%;
          padding-left: 10px;
          margin-bottom: 0;
          height: 19px;
        }
      }
    }
    .submit {
      .button {
        outline: 0;
        color: #FFFFFF;
        background-color: #ff6600;
        border: 1px solid #ff6600;
        border-radius: 5px;
        padding: 3px 50px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
