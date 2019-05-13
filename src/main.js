import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueFullPage from 'vue-fullpage.js'

Vue.use(Vuetify)

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})