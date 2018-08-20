<template>
  <div class="full-width center-content">
    <img src="assets/images/logo.png" >
    <welcome-message name="World" />
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/WelcomeMessage'

export default {
  components: {
    WelcomeMessage
  }
}
</script>
