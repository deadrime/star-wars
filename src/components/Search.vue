<template>
  <div class="search">
    <input
      v-model="input"
      @input="handleSearch"
      class="search__input"
      name="search"
      type="search"
      placeholder="Search..."
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
    />
    <Icon name="search" class="search__icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: null
    }
  },
  methods: {
    handleSearch() {
      this.$emit('change', this.input)
      this.$emit('input', this.input)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search {
  position: relative;
  display: flex;
  font-size 16px
  align-items: center;
  border-bottom: 2px solid #f5606c;

  &__icon {
    width: 2em;
    height: 2em;
    color: #f5606c;
  }

  &__input {
    outline: none;
    color: #f5606c;
    margin-right: 0.5em;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 2em
    line-height: 1;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.05em 0;
  }
}

@media screen and (max-width: 380px) {
  .search {
    font-size 14px
  }
}
</style>
