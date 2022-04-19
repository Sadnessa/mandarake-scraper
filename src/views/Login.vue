<template>
  <div class="login">
    <h1>Mandarake scraper</h1>
    <MLoginCard></MLoginCard>
  </div>
</template>

<script>
import MLoginCard from "../components/login/MLoginCard.vue";

export default {
  components: {
    MLoginCard,
  },
};
</script>

<style lang="scss" scoped>
.login {
  @apply h-screen;
  @apply flex flex-col justify-center items-center;

  h1 {
    @apply font-bold text-4xl text-mode-base;
    @apply mb-4;
  }
}
</style>