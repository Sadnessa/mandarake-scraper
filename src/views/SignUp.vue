<template>
   <div class="signup">
    <h1>Mandarake scraper</h1>
    <MSignupCard></MSignupCard>
  </div>
</template>

<script>
import MSignupCard from '../components/sign-up/MSignupCard.vue'

export default {
  components: {
    MSignupCard
  }
}
</script>

<style lang="scss" scoped>
.signup {
  @apply h-screen;
  @apply flex flex-col justify-center items-center;

  h1 {
    @apply font-bold text-4xl text-mode-base;
    @apply mb-4;
  }
}
</style>