<template>
  <div class="fullscreen" v-if="show">
    <Icon
      name="close"
      class="close-icon"
      fill="#fff"
      @click.native="handleClose"
    />
    <nav class="nav">
      <router-link
        v-for="item in menuItems"
        :key="item.link"
        tag="div"
        class="nav__item"
        :to="item.link"
        @click.native="handleClose"
      >
        <span class="saber" :style="{ backgroundImage: saberBb }" />
        {{ item.title }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['show'],
  methods: {
    handleClose() {
      this.$emit('close')
    }
  },
  computed: {
    saberBb() {
      return `url(${require('@/assets/saber1.svg')})`
    }
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Characters',
          link: '/characters'
        },
        {
          title: 'Starships',
          link: '/starships'
        },
        {
          title: 'Vehicles',
          link: '/vehicles'
        },
        {
          title: 'Planets',
          link: '/planets'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.close-icon {
  cursor pointer
  margin : 2.3em 0 0 1.3em;
  width 55px;
  height 55px;
}

.fullscreen {
  z-index 999
  width 100%;
  height 100%;
  background rgba(0,0,0,.9)
  left 0;
  top 0;
  position fixed;
  display flex
  flex-direction column
}

.nav {
  padding 10vh 48px
  display: flex;
  flex-direction column
  align-items: flex-start;
  width 200px

  &__item {
    cursor pointer
    color #fff
    font-size: 2.25rem;
    margin: 0 0 1.5rem;
    font-weight: bold;
    position relative

    &:before {
      z-index -1
      content: '';
      width: 70%;
      height: 55%;
      position: absolute;
      left: -20px;
      bottom: 0;
      transition width .4s cubic-bezier(0.2,1,0.3,1);
    }

    &:hover {
      &:before {
        width calc(100% + 40px);
      }
    }

    &:nth-child(1)::before  {
      background linear-gradient(45deg, #f5606c, darken(#f5606c, 10%))
    }

    &:nth-child(2)::before  {
      background linear-gradient(45deg, #21bddb, darken(#21bddb, 10%))
    }

    &:nth-child(3)::before  {
      background linear-gradient(45deg, #f1b35b, darken(#f1b35b, 10%))
    }

    &:nth-child(4)::before  {
      background linear-gradient(45deg, #7476c8, darken(#7476c8, 10%))
    }

    &:nth-child(5)::before  {
      background linear-gradient(45deg, #4CAF50, darken(#4CAF50, 10%))
    }
  }
}

.saber {
  background-size: cover;
  background-position: right;
  position: absolute;
  top: 6px;
  width: 80px;
  height: 60px;
  z-index: 1;
  left: -70px;
}
</style>
