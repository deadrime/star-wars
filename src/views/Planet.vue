<template>
  <div v-loading="loading">
    <router-link class="back" to="/planets">
      <Icon name="left_arrow" />&nbsp;Planets
    </router-link>
    <div class="page" v-if="data">
      <Tooltip>
        <h1 class="page__name">{{ data.name }}</h1>
      </Tooltip>
      <div>
        Diameter: <span class="value">{{ data.diameter }} </span>
      </div>
      <div>
        Gravity: <span class="value">{{ data.gravity }}</span>
      </div>
      <div>
        Orbital period: <span class="value">{{ data.orbital_period }}</span>
      </div>
      <div>
        Rotation period:
        <span class="value">{{ data.rotation_period }} metres</span>
      </div>
      <div>
        Population: <span class="value">{{ data.population }}</span>
      </div>
      <div>
        Terrain: <span class="value">{{ data.terrain }}</span>
      </div>
      <div>
        Water percentage:
        <span class="value">{{ data.surface_water + '%' }}</span>
      </div>
      <div class="page__subtitle" v-if="residents.length">Residents:</div>
      <div v-for="resident in residents" :key="resident.id">
        <Tooltip>
          <router-link :to="`/characters/${resident.id}`" class="links">
            {{ resident.name }}
          </router-link>
        </Tooltip>
      </div>
      <div class="page__subtitle" v-if="films.length">Films:</div>
      <div v-for="film in films" :key="film.episode_id">
        <Tooltip>
          Episode {{ film.episode_id }}:
          <span class="value">{{ film.title }}</span>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import requester from '@/utils/requester'
import Tooltip from '@/components/Tooltip'

export default {
  data() {
    return {
      data: null,
      starships: [],
      residents: [],
      films: [],
      loading: true
    }
  },
  async created() {
    this.data = await requester.get(`/planets/${this.$route.params.id}`)
    await Promise.all([this.fetchFilms(), this.fetchResidents()])
    this.loading = false
  },
  methods: {
    async fetchResidents() {
      this.residents = await Promise.all(
        this.data.residents.map(url => requester.get(url))
      )
    },
    async fetchFilms() {
      this.films = await Promise.all(
        this.data.films.map(url => requester.get(url))
      ).then(data => data.sort((a, b) => a.episode_id - b.episode_id))
    }
  },
  components: {
    Tooltip
  }
}
</script>

<style lang="stylus" scoped>

.back {
  font-size 20px
  color: #fff
  text-decoration none
  margin-bottom 1em
}
</style>
