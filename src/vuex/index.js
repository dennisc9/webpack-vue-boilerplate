import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  string: true, // if any mutations occur outside of mutations handlers error is thrown
  state: {
    count: 0,
    n: -1,
    totalPages:6,
    isiExpanded:false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    forward (state) {
      state.n++
    },
    backward (state) {
      state.n--
    },
    setSlideNumber (state, value) {
      state.n = value;
    },
    setIsiExpanded (state, value) {
      state.isiExpanded = value;
    }
  }
})

export default store