<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply w-full;
  @apply bg-mode-card;
  @apply p-6;
  @apply shadow;
  @apply rounded-lg;
  @apply transition-all duration-300;
}
</style>