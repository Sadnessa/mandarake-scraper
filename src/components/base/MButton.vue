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

    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "flat"].includes(value),
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    compClass() {
      return {
        btn: true,
        [`btn--${this.size}`]: true,
        [`btn--${this.type}`]: true,
        "btn--disabled": this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @apply transition-colors duration-300;
  @apply px-4 py-2 rounded-md;
  @apply font-bold text-sm;

  //types
  &--solid {
    @apply bg-purple-500;
    @apply text-white;

    &:not(.btn--disabled) {
      @apply hover:bg-purple-400
    }
  }

  &--flat {
    @apply bg-transparent;
    @apply text-purple-500;
    @apply hover:bg-purple-200;
    @apply border-2 border-purple-400;
  }

  //sizes
  &--small {
    @apply px-3 py-1.5;
  }

  &--large {
    @apply px-6 py-2.5;
  }

  //states
  &--disabled {
    @apply opacity-50;
  }
}
</style>