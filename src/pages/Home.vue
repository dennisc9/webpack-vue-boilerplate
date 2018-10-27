<template>
  <div class="full-width center-content">
    <img src="assets/images/logo.png" >
    <welcome-message name="World" />
    <font-awesome-icon icon="thumbs-up" style="margin-right:5px; font-size: 2em;" />
    <Template />
  </div>
</template>

<script>
// Components
import WelcomeMessage from 'components/WelcomeMessage/WelcomeMessage';
import Template from 'components/Template/Template';

export default {
  name: "Home",
  components: {
    WelcomeMessage,
    Template
  },
  extends: '',
  mixins: [],
  props: {

  },
  data: function () {
    return {

    }
  },
  computed: {},
  watch: {},
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
