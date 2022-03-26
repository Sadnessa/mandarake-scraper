<template>
  <div class="graph">
    <h1>Dynamic</h1>
    <MCard></MCard>
  </div>
</template>

<script>
import MCard from "./base/MCard.vue";

export default {
  components: {
    MCard,
  },
};
</script>

<style lang="scss" scoped>
.graph {
  @apply w-3/5;

   h1 {
      @apply font-bold text-2xl;
      @apply py-3;
    }
}
</style>