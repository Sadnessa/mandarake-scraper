<template>
  <button :class="compClass" :disabled="disabled">
    <div class="content">
      <div class="icon-wrap" v-if="$slots.icon">
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    </div>
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
  @apply px-4 py-1.5 rounded-md;
  @apply font-bold text-sm;
  @apply box-border;
  @apply border-2 border-purple-500;

  .content {
    @apply flex items-center justify-center;

    .icon-wrap {
      @apply flex items-center;
      @apply text-lg font-semibold;
      @apply pr-1.5;
    }
  }

  //types
  &--solid {
    @apply bg-purple-500;
    @apply text-white;

    &:not(.btn--disabled) {
      @apply hover:bg-purple-400 hover:border-purple-400;
    }
  }

  &--flat {
    @apply bg-transparent;
    @apply text-purple-500;
    @apply hover:bg-purple-200;
    @apply border-purple-400;
  }

  //sizes
  &--small {
    @apply px-3 py-1;
  }

  &--large {
    @apply px-6 py-2;
  }

  //states
  &--disabled {
    @apply opacity-50;
    @apply cursor-not-allowed;
  }
}
</style>