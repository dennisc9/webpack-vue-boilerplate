<template>
  <div>
    <h3>Hellow {{ name }} from my Vue.js page, built with Webpack 4!</h3>
  </div>
</template>

<style lang="scss">
@import "./sass/welcome";
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
