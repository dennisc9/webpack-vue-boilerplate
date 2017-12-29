import store from "../../vuex"

export const slide = {
  props: ['slideN'],
  methods: {
    getSlideNumber: function() {
      return this.slideN;
    }
  },
  mounted: function() {
    store.commit("setSlideNumber", this.slideN);
  }
}