<template>
  <div class="header">
    <h1 class="title">Welcome, user</h1>
    <div class="btns">
      <MButton>Log in</MButton>
      <MButton>Log in</MButton>
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

  .title {
    @apply flex items-center;
    @apply font-bold text-3xl;
  }
}
</style>