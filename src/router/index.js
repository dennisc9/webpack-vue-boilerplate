import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from 'pages/Home';

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Home
  }
]

export default new Router({
  routes
})
