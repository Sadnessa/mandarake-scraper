<template>
  <div class="header">
    <MCard>
      <h1>Welcome, user</h1>
      <div class="btns-col">
        <router-link to="/signup">
          <MButton type="flat">Sign up</MButton>
        </router-link>
        <router-link to="/login">
          <MButton>Log in</MButton>
        </router-link>
      </div>
    </MCard>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MCard from "./base/MCard.vue";

export default {
  components: {
    MButton,
    MCard,
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex justify-between items-center;
  @apply flex-col sm:flex-row;
  @apply py-5 px-8;
  @apply rounded-t-none rounded-b-2xl;

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