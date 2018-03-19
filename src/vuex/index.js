import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // this should be set to false in production
  state: {
    degug: false,
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  }
});

export default store;
