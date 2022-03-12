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
  @apply transition-colors duration-300 hover:bg-purple-400 bg-purple-500 px-3 py-2 rounded-md text-white font-bold text-sm;

  &--small {
    @apply px-3 py-1;
  }

  &--large {
    @apply px-6 py-2;
  }

  &--disabled {
    @apply opacity-50 hover:bg-purple-500
  }
}
</style>