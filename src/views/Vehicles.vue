<template>
  <div>
    <Search v-model="query" @change="handleSearch" />
    <div class="cards" v-loading="loading">
      <Card
        v-for="item in data"
        :title="item.name"
        :key="item.model"
        :link="`/vehicles/${item.id}`"
      >
        <div class="spec">
          <span class="spec__unit">Length</span>
          <span class="spec__value">{{
            item.length ? item.length + ' metres' : '?'
          }}</span>
        </div>
        <div class="spec">
          <span class="spec__unit">Passengers</span>
          <span class="spec__value">{{ item.passengers || '?' }}</span>
        </div>
      </Card>
    </div>
    <Pagination :page.sync="page" :total="total" @change="handleChangePage" />
  </div>
</template>

<script>
import requester from '@/utils/requester'
import Search from '@/components/Search'
import Pagination from '@/components/Pagination'
import Card from '@/components/Card'
import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      data: [],
      query: null,
      loading: false,
      total: 0,
      page: 1
    }
  },
  created() {
    this.page = Number(this.$route.query.page) || 1
    this.fetchData(this.page)
    this.handleSearch = debounce(this.handleSearch, 300)
  },
  methods: {
    handleSearch() {
      this.page = 1
      this.$router.push({ query: { page: 1 } })
      this.fetchData()
    },
    async fetchData(page) {
      this.loading = true
      const { count, results } = await requester.get('/vehicles', {
        params: {
          page,
          search: this.query
        }
      })
      this.total = count
      this.data = results
      this.loading = false
    },
    handleChangePage(page) {
      this.$router.push({ query: { page } })
      this.fetchData(page)
    }
  },
  components: {
    Search,
    Pagination,
    Card
  }
}
</script>

<style lang="stylus" scoped>
.cards {
  margin: 2em 0 1em;
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns repeat(auto-fit, minmax(300px, 1fr) )
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

@media screen and (max-width: 380px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    grid-template-columns: 1fr
  }
}

.spec {
  text-align: left;
  font-size: 14px;
  display flex
  justify-content space-between

  &__value {
    color: #f5606c;
    font-size: 1.1em;
    font-weight: bold;
  }

  &__unit {
    padding-right: 0.3em;
    color: #5a5a5a;
    font-size: 0.9em;
  }
}
</style>
