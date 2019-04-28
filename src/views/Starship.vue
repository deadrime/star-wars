<template>
  <div v-loading="loading">
    <router-link class="back" to="/starships">
      <Icon name="left_arrow" />&nbsp;Starships
    </router-link>
    <div class="page" v-if="data">
      <Tooltip>
        <h1 class="page__name">{{ data.name }}</h1>
      </Tooltip>
      <div>
        Model:
        <span class="value">{{ data.model }}</span>
      </div>
      <div>
        Starship class:
        <span class="value">{{ data.starship_class }}</span>
      </div>
      <div>
        Manufacturer:
        <span class="value">{{ data.manufacturer }}</span>
      </div>
      <div>
        Passengers:
        <span class="value">{{ data.passengers }}</span>
      </div>
      <div>
        Maximum Megalights per hour:
        <span class="value">{{ data.MGLT }}</span>
      </div>
      <div>
        Length:
        <span class="value">{{ data.length }} metres</span>
      </div>

      <div class="page__subtitle" v-if="pilots.length">Pilots:</div>
      <div v-for="pilot in pilots" :key="pilot.id">
        <Tooltip>
          <router-link :to="`/characters/${pilot.id}`" class="links">{{
            pilot.name
          }}</router-link>
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
      pilots: [],
      films: [],
      loading: true
    }
  },
  async created() {
    this.data = await requester.get(`/starships/${this.$route.params.id}`)
    await Promise.all([this.fetchFilms(), this.fetchPilots()])
    this.loading = false
  },
  methods: {
    async fetchPilots() {
      this.pilots = await Promise.all(
        this.data.pilots.map(url => requester.get(url))
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
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1em;
}
</style>
