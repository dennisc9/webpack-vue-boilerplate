<template>
  <div id="loader-view"
       :class="{'loading': serverIsBusy}"
  >
    <div id="spinner">
      <font-awesome-icon :icon="faSpinner" fixed-width pulse size="3x" />
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "./sass/loader";
</style>

<script>
// font awesome
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

export default {
  name: "Loader",
  components: {
    FontAwesomeIcon
  },
  mixins: [],
  data: () => ({
    faSpinner
  }),
  computed: {
    serverIsBusy: function () {
      return this.$store.state.serverIsBusy;
    }
  },
  watch: {},
  mounted: function () {},
  methods: {}
};
</script>
