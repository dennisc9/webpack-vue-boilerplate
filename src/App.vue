<template>
  <div class="container center-content">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./sass/app";
</style>

<script>

export default {
  name: "App",
  components: {},
  extends: '',
  mixins: [],
  props: {

  },
  data: function () {
    return {

    }
  },
  computed: {},
  watch: {
    '$route' (to, from) {

    }
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {},
  methods: {}
}
</script>
