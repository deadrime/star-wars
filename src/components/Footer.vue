<template>
  <footer class="footer">
    <span class="footer__copyright">
      Made with
      <Icon class="footer__icon" name="heart" />
      by&nbsp;
      <a
        class="footer__link"
        href="https://github.com/deadrime"
        target="__blank__"
        >@deadrime</a
      >
    </span>
  </footer>
</template>

<style lang="stylus" scoped>
.footer {
  margin-top auto
  width 100%
  display flex
  justify-content center
  align-items center
  padding 2em 0

  &__copyright {
    font-size 12px
    color rgba(255,255,255, .5)
  }

  &__icon {
    height 14px
  }

  &__link {
    color: #f5606c;
    text-decoration none;
    font-weight bold
    opacity .8
    &:hover {
      opacity 1
    }
  }
}
</style>
