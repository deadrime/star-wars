<template>
  <main>
    <Search v-model="query" @change="handleSearch" />
    <div class="cards" v-loading="loading">
      <Card
        v-for="item in data"
        :title="item.name"
        :key="item.model"
        :link="`/characters/${item.id}`"
      >
        <div class="specs">
          <div>
            <div class="spec">
              <span class="spec__value">{{ item.height || '?' }}</span>
              <span class="spec__unit">cm</span>
            </div>
            <div class="spec">
              <span class="spec__value">{{ item.mass || '?' }}</span>
              <span class="spec__unit">kg</span>
            </div>
          </div>
          <div class="birth">
            <span class="birth__subtitle">Birth year</span>
            <span class="birth__value">{{ item.birth_year || '?' }}</span>
          </div>
        </div>
      </Card>
    </div>
    <Pagination :page="page" :total="total" @change="handleChangePage" />
  </main>
</template>

<script>
import requester from '@/utils/requester'
import debounce from 'lodash/debounce'
import Search from '@/components/Search'
import Pagination from '@/components/Pagination'
import Card from '@/components/Card'

export default {
  data() {
    return {
      data: [],
      loading: false,
      query: null,
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
    async fetchData(page) {
      this.loading = true
      const data = await requester.get('/people', {
        params: {
          search: this.query,
          page
        }
      })
      const { results, count } = data
      this.total = count
      this.data = results
      this.loading = false
    },
    handleSearch() {
      this.fetchData()
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

.specs {
  display flex
  justify-content space-evenly
}

.spec {
  text-align: left;
  font-size: 14px;

  &__value {
    color: #f5606c;
    font-size: 1.2em;
    font-weight: bold;
  }

  &__unit {
    padding-left: 0.2em;
    color: #5a5a5a;
    font-size: 0.9em;
  }
}

.birth {
  padding-top: 0.28em;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  &__subtitle {
    color: #5a5a5a;
    font-size: 0.9em;
  }

  &__value {
    color: #f5606c;
    font-size: 1.2em;
    padding-top 2px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
