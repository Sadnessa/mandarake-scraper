<template>
  <div class="home">
    <MHeader></MHeader>
    <MContent></MContent>
  </div>
</template>

<script>
import MHeader from "../components/MHeader.vue";
import MContent from "../components/MContent.vue";

export default {
  name: "Home",
  components: {
    MHeader,
    MContent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply h-screen;
  @apply flex flex-col;

  .content {
    @apply grow;
    @apply overflow-hidden;
  }
}
</style>