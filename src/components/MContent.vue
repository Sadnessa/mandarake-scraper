<template>
  <div class="content">
    <MSearch></MSearch>
    <MCardList></MCardList>
  </div>
</template>

<script>
import { itemList, addItem, deleteItem } from "../api";
import MSearch from "../components/MSearch.vue";
import MCardList from "../components/MCardList.vue";

export default {
  components: {
    MSearch,
    MCardList,
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply container lg:px-36 px-2;
  @apply flex flex-col;
  @apply relative;

  &:after {
    content: "";
    @apply absolute left-0 right-0 bottom-0;
    @apply w-full h-28;
    @apply bg-gradient-to-t from-neutral-200 to-transparent;
    @apply pointer-events-none;
    @apply z-0;
  }
}
</style>