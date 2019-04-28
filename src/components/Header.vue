<template>
  <header class="header">
    <Menu :show="showMenu" @close="showMenu = false" />
    <button class="menu" @click="showMenu = true">
      <span class="menu__line" />
    </button>
    <router-link to="/">
      <div class="logo"></div>
    </router-link>
    <div />
  </header>
</template>
<script>
import Menu from '@/components/Menu'

export default {
  data() {
    return {
      showMenu: false
    }
  },
  components: {
    Menu
  }
}
</script>

<style lang="stylus" scoped>
.header {
  display flex
  align-items center
  justify-content space-between
  padding 1.5em 30px 2em
}

.logo {
  background url('../assets/logo.svg')
  background-repeat no-repeat
  background-position center
  margin-right 40px;
  background-size cover
  width: 160px;
  height: 80px;
}

.menu {
  padding 0
  margin 0
  background none
  border none
  cursor pointer
  width 4em
  height 4em
  display flex
  font-size 10px
  align-items center
  justify-content center
  position relative

  &__line {
    width 2.2em
    height .28em
    left 0
    background #fff;
    border-radius 4px
    position absolute
    &:before, &:after {
      content: ''
      position absolute
      width 100%;
      height .28em
      background #fff;
      border-radius .3em
      left: 0;
    }
    &:before {
      width 4em
      bottom 1.1em
    }
    &:after {
      width 3.2em
      top: 1.1em
    }
  }
}
</style>
