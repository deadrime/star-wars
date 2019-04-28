<template>
  <div class="pagination" v-if="total > 0">
    <span class="pagination__item" @click="handlePrevPage">
      ←&nbsp;Back
    </span>
    <span class="pagination__pages">
      Page
      {{ currentPage }}
      of
      {{ totalPages }}
    </span>
    <span class="pagination__item" @click="handleNextPage">
      Next&nbsp;→
    </span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.page
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    }
  },
  methods: {
    handleNextPage() {
      if (this.currentPage >= this.totalPages) return
      this.currentPage++
      this.$emit('change', this.currentPage)
    },
    handlePrevPage() {
      if (this.currentPage <= 1) return
      this.currentPage--
      this.$emit('change', this.currentPage)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pagination {
  padding .5em 0
  color #fff
  &__pages {
    padding 0 1em
  }
  &__item {
    cursor pointer
  }
}

@media screen and (max-width: 380px) {
  .pagination {
    font-size .9em
    text-align center
  }
}
</style>
