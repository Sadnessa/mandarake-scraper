<template>
   <div class="signup">
    <h1>Mandarake scraper</h1>
    <MSignupCard></MSignupCard>
  </div>
</template>

<script>
import MSignupCard from '../components/MSignupCard.vue'

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
    @apply font-bold text-4xl;
    @apply mb-4;
  }
}
</style>