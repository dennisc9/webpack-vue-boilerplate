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
  mixins: [],
  data: () => {
    return {}
  },
  computed: {},
  watch: {
    '$route' (to, from) {

    }
  },
  created: function () {},
  mounted: function () {},
  methods: {}
}
</script>
