
"use strict";

import Vue from 'vue'
import App from './slides/App.vue'
import store from './vuex'
import router from './router'

require('./index.html')
require('normalize-css');

Vue.use(router)

const app = new Vue({
  el: '#app-container',
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
})

// I dont love making these global,
// but this helps me access from outside vue components
// like when clicking on a map pin
global.store = store
global.app = app
global.router = router

export {app, store, router}
