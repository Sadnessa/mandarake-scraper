<template>
  <MCard>
    <h1>Log in</h1>

    <p>Username</p>
    <MInput v-model="usernameText">
      <template #icon>
        <span class="material-icons-round"> person </span>
      </template>
    </MInput>

    <p>Password</p>
    <MInput v-model="passwordText">
      <template #icon>
        <span class="material-icons-round"> vpn_key </span>
      </template>
    </MInput>

    <div class="btns">
      <router-link to="/signup">
        <MButton type="flat">Sign up</MButton>
      </router-link>
      <router-link to="/">
        <MButton>Log in</MButton>
      </router-link>
    </div>
  </MCard>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";
import MCard from "./base/MCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MCard,
  },

  data() {
    return {
      usernameText: "",
      passwordText: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex flex-col;
  @apply max-w-sm;

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
    @apply mt-2;

    & * {
      @apply w-full;
      @apply mr-1.5;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>