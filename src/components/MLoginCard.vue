<template>
  <div class="login-card">
    <h1>Login</h1>
    <div class="btns">
      <MButton>dsds</MButton>
      <MButton>dsds</MButton>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue"
import MInput from "./base/MInput.vue"

export default {
  components: {
    MButton,
    MInput,
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  @apply bg-white;
  @apply max-w-xl ;
}
</style>