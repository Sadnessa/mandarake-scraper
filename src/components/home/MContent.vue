<template>
  <div class="content">
    <MSearch></MSearch>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script>
import MSearch from "./MSearch.vue";

export default {
  components: {
    MSearch,
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply container lg:px-36 px-2;
  @apply flex flex-col;
  @apply relative;
}

//transition between pages
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>