<template>
  <span class="tooltip">
    <div class="tooltip__dot" v-if="text"></div>
    <div class="popup">
      <textarea
        class="popup__text"
        @input="edited = true"
        v-model="text"
        rows="1"
        placeholder="Add note..."
      />
      <div class="popup__buttons">
        <button class="popup__btn" v-if="text && edited" @click="handleSave">
          <Icon name="tick1" height="15" width="15" />
        </button>
        <button class="popup__btn" v-if="text" @click="handleDelete">
          <Icon name="cancel" height="12" width="12" />
        </button>
      </div>
    </div>
    <div class="tooltip__content" ref="mySlot">
      <slot></slot>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      edited: false
    }
  },
  mounted() {
    const tooltips = getAllTooltips()
    this.text = tooltips[this.uniqKey] || null
  },
  computed: {
    uniqKey() {
      const page = this.$route.path
      const text = encodeURIComponent(this.$refs.mySlot.innerText)
      return `${page}:${text}`
    }
  },
  methods: {
    handleSave() {
      const value = this.text
      addTooltip(this.uniqKey, value)
    },
    handleDelete() {
      this.text = null
      const tooltips = getAllTooltips()
      delete tooltips[this.uniqKey]
      localStorage.setItem('tooltips', JSON.stringify(tooltips))
    }
  }
}

function getAllTooltips() {
  const fromLocalStorage = localStorage.getItem('tooltips')
  if (fromLocalStorage) return JSON.parse(fromLocalStorage)
  else return {}
}

function addTooltip(key, value) {
  localStorage.setItem(
    'tooltips',
    JSON.stringify({
      ...getAllTooltips(),
      [key]: value
    })
  )
}
</script>

<style lang="stylus" scoped>
.tooltip {
  display: inline-block;
  position: relative;
  &:hover {
    border-box 1px 0 2px #fff
  }

  &__dot {
    position: absolute;
    top: 4px;
    left: -10px;
    width: 6px;
    height: 6px;
    background: #7476c8;
  }

  &:hover {
    .popup {
      display: flex;
    }
  }
}

.popup {
  background: #7476c8
  border-radius: 4px;
  display: none;
  position: absolute;
  bottom: calc(100% + 0px);
  bottom 100%
  left: -4px;
  padding: 4px;
  min-width 250px;
  box-sizing: border-box;
  //transform translateY(-4px)

  &__text {
    flex 1
    color #fff
    font-size: 14px;
    border: none;
    background: none;
    outline none
    min-height 20px
    &::placeholder {
      color: rgba(255, 255, 255, .5);
    }
  }

  &__buttons {
    display flex
    align-items center
  }

  &__btn {
    color #fff
    background: none;
    border: none;
    padding: 0.4em;
    &:first-child {
      margin-left 1em
    }
    &:last-child {
      margin-right 1em
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 12px 0 0;
    border-color: #7476c8 transparent transparent transparent;
  }
}
</style>
