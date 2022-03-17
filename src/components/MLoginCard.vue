<template>
  <div class="login-card">
    <p>Username</p>
    <MInput placeholder="Username"></MInput>
    <p>Password</p>
    <MInput placeholder="Password"></MInput>
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
  @apply flex flex-col;
  @apply w-full max-w-sm;
  @apply bg-white;
  @apply p-4;
  @apply rounded-lg;

  .inpt {
    @apply mb-2;
  }

  .btns {
    @apply flex justify-around;
  }
}
</style>