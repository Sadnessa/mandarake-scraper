<template>
  <MCard>
    <h1>Sign up</h1>

    <p>Username</p>
    <MInput v-model="usernameText" :v="v$.usernameText">
      <template #icon>
        <span class="material-icons-round"> person </span>
      </template>
    </MInput>

    <p>Email</p>
    <MInput v-model="emailText" :v="v$.emailText">
      <template #icon>
        <span class="material-icons-round"> alternate_email </span>
      </template>
    </MInput>

    <p>Password</p>
    <MInput v-model="passwordText" :v="v$.passwordText">
      <template #icon>
        <span class="material-icons-round"> vpn_key </span>
      </template>
    </MInput>

    <p>Confirm password</p>
    <MInput v-model="confirmPasswordText" :v="v$.confirmPasswordText">
      <template #icon>
        <span class="material-icons-round"> vpn_key </span>
      </template>
    </MInput>

    <div class="btns">
      <router-link to="/login">
        <MButton type="flat">Log in</MButton>
      </router-link>
      <router-link to="/">
        <MButton :disabled="v$.$invalid">Sign up</MButton>
      </router-link>
    </div>
  </MCard>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, sameAs } from "@vuelidate/validators";

import MButton from "../base/MButton.vue";
import MInput from "../base/MInput.vue";
import MCard from "../base/MCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MCard,
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      usernameText: "",
      emailText: "",
      passwordText: "",
      confirmPasswordText: "",
    };
  },

  validations() {
    return {
      usernameText: { required },
      emailText: { required },
      passwordText: { required },
      confirmPasswordText: { required, sameAsPassword: sameAs(this.passwordText) },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex flex-col;
  @apply max-w-sm;

  h1 {
    @apply border-b-2 border-dashed border-skin-button-fill;
    @apply mb-3 pb-2;
    @apply font-bold text-lg text-center text-mode-base;
  }

  p {
    @apply font-semibold text-xs;
    @apply pb-1;
    @apply text-mode-secondary;
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