<template>
  <div id='app'>
    <router-view></router-view>
  </div><!-- #app -->
</template>

<style lang='scss'>
@import '../sass/app';
</style>

<script>
import store from "../vuex"
import { data } from '../mixins/data'

export default {
  data: function() {
    return {
    }
  },
  mixins: [ data ],
  watch: {
    '$route' (to, from) {
      //let n = this.getIDFromPage(to.path)
      //store.commit("setSlideNumber", n);
    },
  },
  computed: {
    
  },
  methods: {

  },
  created: {

  },
  mounted: function () {

  }
}
</script>