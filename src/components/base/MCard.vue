<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply w-full;
  @apply bg-white;
  @apply p-6;
  @apply shadow;
  @apply rounded-lg;
}
</style>