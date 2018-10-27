<template>
  <div class="full-width center-content">
    <img src="assets/images/logo.png" >
    <welcome-message name="World" />
    <font-awesome-icon icon="thumbs-up" style="margin-right:5px; font-size: 2em;" />
  </div>
</template>

<script>
// Components
import WelcomeMessage from 'components/WelcomeMessage/WelcomeMessage';

export default {
  components: {
    WelcomeMessage
  }
}
</script>
