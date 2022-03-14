<template>
  <button :class="compClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium",
    },

    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    compClass() {
      return { btn: true, [`btn--${this.size}`]: true, "btn--disabled": this.disabled };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @apply transition-colors duration-300;
  @apply hover:bg-purple-400 bg-purple-500;
  @apply px-4 py-2 rounded-md;
  @apply text-white font-bold text-sm;

  &--small {
    @apply px-3 py-1.5;
  }

  &--large {
    @apply px-6 py-2.5;
  }

  &--disabled {
    @apply opacity-50 hover:bg-purple-500
  }
}
</style>