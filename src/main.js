import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faSortUp,
  faSortDown,
  faTimes,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faInstagram,
 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import router
import router from './router'

// add font-awesome bars icon to library and register the font-awesome icon component
library.add(faBars)
library.add(faSortUp)
library.add(faSortDown)
library.add(faTimes)
library.add(faFacebook)
library.add(faTwitter)
library.add(faInstagram)
library.add(faPhone)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
