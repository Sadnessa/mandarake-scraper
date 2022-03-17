<template>
  <div class="header">
    <h1>Welcome, user</h1>
    <div class="btns-col">
      <router-link to="/login">
        <MButton>Login</MButton>
      </router-link>
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
  @apply flex justify-between items-center;
  @apply flex-col sm:flex-row;
  @apply py-5 px-8 rounded-b-2xl;
  @apply shadow;

  h1 {
    @apply font-bold text-3xl;
    @apply mb-2.5 sm:mb-0;
  }

  .btns-col {
    * {
      @apply mr-1.5;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>