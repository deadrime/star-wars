import Vue from 'vue'
import App from './App.vue'
import router from './router'
import loaderDirective from './loaderDirective'
import Icon from '@/components/Icon'
import * as helpers from './helpers.js'

Object.keys(helpers).forEach(key => {
  Vue.filter(key, helpers[key])
})

Vue.config.productionTip = false

Vue.directive('loading', loaderDirective)
Vue.component('Icon', Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
