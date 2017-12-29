<template>
  <section class="page-sample">
    <h1>V Sample</h1>
  </section>
</template>

<style lang='scss'>
@import './sass/sample';
</style>

<script>
//require('../../images/home/home-icon-acip.png');

import { slide } from '../mixins/slide'
import { data } from '../../mixins/data'

export default {
  name: "v-sample",
  data: function() {
    return {
    }
  },
  mixins: [ slide, data ],
  components:{ },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    gotoPage(n){
      this.$router.push(this.getPageFromID(n))
    }
  }
}
</script>