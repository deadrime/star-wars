<template>
  <main class="home">
    <router-link
      v-for="item in menuItems"
      :key="item.link"
      class="section"
      :to="item.link"
    >
      <h1 class="section__title">{{ item.title }}</h1>
      <Icon :name="item.icon" class="section__icon" />
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      menuItems: [
        {
          title: 'Characters',
          link: '/characters',
          icon: 'darth_vader'
        },
        {
          title: 'Starships',
          link: '/starships',
          icon: 'millenium_falcon'
        },
        {
          title: 'Vehicles',
          link: '/vehicles',
          icon: 'test'
        },
        {
          title: 'Planets',
          link: '/planets',
          icon: 'geonosis'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.home {
  padding-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.section {
  color: #fff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3em 1em;
  border-radius: 10px;
  position: relative;

  &__icon {
    width: 100%;
    min-height: 200px;
    color: #1d2935;
  }

  &__title {
    font-size: 2em;
    margin-top: 0;
  }

  &:nth-child(1), &:nth-child(2) {
    &:before {
      z-index: -1;
      content: '';
      position: absolute;
      width: calc(100% - 20px);
      height: 40px;
      border-radius: 10px;
      background: #fff;
    }
  }

  &:nth-child(1) {
    &:before {
      top: -13px;
      right: 0;
    }
  }

  &:nth-child(2) {
    &:before {
      top: -13px;
      left: 0;
    }
  }

  &:nth-child(1) {
    background: #F5606C;

    &:before {
      background: #7476C8;
    }
  }

  &:nth-child(2) {
    background: #21BDDB;

    &:before {
      background: #F1B35B;
    }
  }

  &:nth-child(3) {
    background: #F1B35B;
  }

  &:nth-child(4) {
    background: #7476C8;
  }
}

@media screen and (max-width: 560px) {
  .section {
    padding 1.8em 1em
    &__icon {
      min-height: 120px;
    }

    &__title {
      font-size: 1em;
    }

    &:nth-child(1) {
      &:before {
        top: -8px;
        right: 0;
      }
    }

    &:nth-child(2) {
      &:before {
        top: -8px;
        left: 0;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .home {
    grid-template-columns: repeat(1, 1fr);
  }

  .section {
    &__title {
      font-size: 1.2em;
    }
    &:nth-child(1), &:nth-child(2) {
      &:before {
        display none
      }
    }
  }
}
</style>
