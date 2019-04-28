<template>
  <div id="app">
    <StarsBg />
    <Header />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StarsBg from '@/components/StarsBg'

export default {
  data() {
    return {
      selections: []
    }
  },
  components: {
    Header,
    Footer,
    StarsBg
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

body {
  background: #000;
  margin: 0;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  max-width calc(10vw + 1000px)
  box-sizing border-box
  width 100%
  margin 0 auto
}

#app {
  font-family: 'Space Mono', 'Avenir', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  color: #b7b7b7;

  &__name {
    color: #fff;
    margin-top: 0;
    position: relative;

    &:before {
      content: '';
      bottom: 0;
      position: absolute;
      width: 8%;
      height: 5px;
      background: #fff;
    }
  }

  &__subtitle {
    font-weight: bold;
    padding: 1.2em 0 0.5em;
    font-size: 1.2em;
    color: #fff;
  }
}

.value {
  font-weight: bold;
  color: #d8d8d8;
}

.links {
  text-decoration: none;
  color: #7476c8;
}
</style>
