<template>
  <MCard>
    <h1>Sign up</h1>

    <p>Username</p>
    <MInput v-model="usernameText">
       <template #icon>
        <span class="material-icons-round"> person </span>
      </template>
    </MInput>

    <p>Email</p>
    <MInput v-model="emailText">
       <template #icon>
        <span class="material-icons-round"> alternate_email </span>
      </template>
    </MInput>

    <p>Password</p>
    <MInput v-model="passwordText">
      <template #icon>
        <span class="material-icons-round"> vpn_key </span>
      </template>
    </MInput>

    <p>Confirm password</p>
    <MInput v-model="confirmPasswordText">
      <template #icon>
        <span class="material-icons-round"> vpn_key </span>
      </template>
    </MInput>

    <div class="btns">
      <router-link to="/login">
        <MButton type="flat">Log in</MButton>
      </router-link>
      <router-link to="/">
        <MButton>Sign up</MButton>
      </router-link>
    </div>
  </MCard>
</template>

<script>
import MButton from "../base/MButton.vue";
import MInput from "../base/MInput.vue";
import MCard from "../base/MCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MCard,
  },

  data() {
    return {
      usernameText: "",
      emailText: "",
      passwordText: "",
      confirmPasswordText: "",
    }
  }
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