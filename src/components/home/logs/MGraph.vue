<template>
  <div class="graph">
    <h1>Dynamic</h1>
    <MCard>
      <MChart :dataset="forDataset" :labels="forLabel"></MChart>
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

  props: {
    logs: {
      type: Array,
    },
  },

  computed: {
    forDataset() {
      return this.logs.map((obj) => obj.price);
    },

    forLabel() {
      return this.logs.map((obj) => obj.date);
    },
  },
};
</script>

<style lang="scss" scoped>
.graph {
  @apply w-full md:w-3/5;

  h1 {
    @apply font-bold text-2xl text-mode-base;
    @apply py-3;
  }
}
</style>