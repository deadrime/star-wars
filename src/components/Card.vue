<template>
  <router-link :to="link" class="card">
    <div class="card__name">
      {{ title }}
    </div>
    <div class="card__description">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['link', 'title'],
  computed: {
    info() {
      return convertData(this.data)
    }
  }
}

function convertData(data) {
  Object.entries(data).map(([key, value]) => {
    if (value === 'unknown') {
      data[key] = '?'
    }
  })
  return data
}
</script>

<style lang="stylus" scoped>
.card {
  text-decoration none
  background: #fff;
  border-radius: 10px;
  padding: 0.8em 1em .5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__name {
    color: #7476c8;
    width: 100%;
    text-align: center;
    margin: 0 0 0.5em;
    position: relative;
    font-size 1.33em
    line-height: 1.1em;
    text-decoration none
  }

  &__description {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction column;
  }
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
    font-weight: bold;
    text-align: center;
  }
}
</style>
