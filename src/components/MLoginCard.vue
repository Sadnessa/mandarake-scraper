<template>
  <div class="login-card">
    <h1>Log in</h1>
    <p>Username</p>
    <MInput></MInput>
    <p>Password</p>
    <MInput></MInput>
    <div class="btns">
      <MButton>Log in</MButton>
      <router-link to="/signup">
        <MButton>Sign up</MButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";

export default {
  components: {
    MButton,
    MInput,
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  @apply flex flex-col;
  @apply w-full max-w-sm;
  @apply bg-white;
  @apply p-6;
  @apply shadow;
  @apply rounded-lg;

  h1 {
    @apply border-b-2 border-dashed border-purple-500;
    @apply mb-3 pb-2;
    @apply font-bold text-lg text-center;
  }

  p {
    @apply font-semibold text-xs;
    @apply pb-1;
    @apply text-neutral-500;
  }

  .inpt {
    @apply mb-3;
  }

  .btns {
    @apply flex;

    button {
      @apply w-full;
      @apply mr-1.5;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>