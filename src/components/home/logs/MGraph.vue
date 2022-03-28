<template>
  <div class="graph">
    <h1>Dynamic</h1>
    <MCard>
      <MChart></MChart>
    </MCard>
  </div>
</template>

<script>
import MCard from "../../base/MCard.vue";
import MChart from "../../base/MChart.vue";

export default {
  components: {
    MCard,
    MChart,
  },
};
</script>

<style lang="scss" scoped>
.graph {
  @apply w-full md:w-3/5;

  h1 {
    @apply font-bold text-2xl;
    @apply py-3;
  }
}
</style>