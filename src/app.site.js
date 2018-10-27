import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './vuex';
import analytics from 'vue-analytics';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faThumbsUp);
Vue.component('font-awesome-icon', FontAwesomeIcon)

console.log("##### app.site.js :: process.env.NODE_ENV === ", process.env.NODE_ENV)

let gaDebug = {};
if (store.state.debug === true) {
  gaDebug = {
    enabled: true, // Default is false
    trace: false, // Default is false
    sendHitTask: true // Default is true
  }
}

let gaCode = '';

Vue.use(analytics, {
  id: [gaCode],
  checkDuplicatedScript: true,
  router,
  debug: gaDebug,
  autoTracking: {
    skipSamePath: true
  },
  commands: {
    trackEvent (eventCategory, eventAction, eventLabel) {
      this.$ga.event(eventCategory, eventAction, eventLabel)
    }
  }
});

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
