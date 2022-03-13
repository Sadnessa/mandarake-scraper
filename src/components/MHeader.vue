<template>
  <div class="header">
    <h1>Welcome, user</h1>
    <div class="btns-col">
      <MButton>Login</MButton>
      <MButton>Sign up</MButton>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
export default {
  components: {
    MButton,
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply bg-white;
  @apply flex justify-between;
  @apply py-5 px-8 rounded-b-2xl;
  @apply shadow;

  h1 {
    @apply flex items-center;
    @apply font-bold text-3xl;
  }

  .btns-col {
    * {
      @apply mr-1;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>