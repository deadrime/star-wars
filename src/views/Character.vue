<template>
  <div v-loading="loading">
    <router-link class="back" to="/characters">
      <Icon name="left_arrow" />&nbsp;Сharacters
    </router-link>
    <div class="page" v-if="data">
      <Tooltip>
        <h1 class="page__name">{{ data.name }}</h1>
      </Tooltip>
      <div>
        Birth Year:
        <span class="value">{{ data.birth_year }}</span>
      </div>
      <div>
        Eye Color:
        <span
          class="value"
          :style="{ color: data.eye_color !== 'black' && data.eye_color }"
          >{{ data.eye_color }}</span
        >
      </div>
      <div>
        Hair color:
        <span class="value">{{ data.hair_color }}</span>
      </div>
      <div>
        Height:
        <span class="value">{{ data.height }} cm</span>
      </div>
      <div>
        Mass:
        <span class="value">{{ data.mass }} kg</span>
      </div>
      <div>
        Skin color:
        <span class="value">{{ data.skin_color || '?' }}</span>
      </div>

      <div class="page__subtitle" v-if="starships.length">Starships:</div>
      <div v-for="starship in starships" :key="starship.model">
        <Tooltip>
          <router-link :to="`/starships/${starship.id}`" class="links">
            {{ starship.name }}
            ({{ starship.model }})
          </router-link>
        </Tooltip>
      </div>
      <div class="page__subtitle" v-if="vehicles.length">Vehicles:</div>
      <div v-for="vehicle in vehicles" :key="vehicle.id">
        <Tooltip>
          <router-link :to="`/vehicles/${vehicle.id}`" class="links">
            {{ vehicle.name }}
            ({{ vehicle.model }})
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
      films: [],
      vehicles: [],
      loading: true
    }
  },
  async created() {
    this.data = await requester.get(`/people/${this.$route.params.id}`)
    await Promise.all([
      this.fetchStarships(),
      this.fetchFilms(),
      this.fetchVehicles()
    ])
    this.loading = false
  },
  methods: {
    async fetchStarships() {
      this.starships = await Promise.all(
        this.data.starships.map(url => requester.get(url))
      )
    },
    async fetchVehicles() {
      this.vehicles = await Promise.all(
        this.data.vehicles.map(url => requester.get(url))
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
