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

    rounded: {
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
        "btn--rounded": this.rounded,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @apply transition-all duration-300;
  @apply px-4 py-1.5 rounded-md;
  @apply font-bold text-sm;
  @apply box-border;
  @apply border-2 border-skin-button-fill;

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
    @apply bg-skin-fill;
    @apply text-mode-text-button;

    &:not(.btn--disabled) {
      @apply hover:opacity-80;
    }
  }

  &--flat {
    @apply bg-skin-fill bg-opacity-0;
    @apply text-skin-text-button-flat;
    @apply border-skin-button-flat;

    &:not(.btn--disabled) {
      @apply hover:bg-skin-fill hover:bg-opacity-20;
    }
  }

  //sizes
  &--small {
    @apply px-3 py-1;
  }

  &--large {
    @apply px-6 py-2;
  }

  //form
  &--rounded {
    @apply rounded-full;
    @apply w-9 h-9;
    @apply p-0;
    @apply text-xl;

    .content .icon-wrap {
      @apply pr-0;
    }

    &.btn--small {
      @apply w-7 h-7;
      @apply p-0;
    }

    &.btn--large {
      @apply w-10 h-10;
      @apply p-0;
    }
  }

  //states
  &--disabled {
    @apply opacity-50;
    @apply cursor-not-allowed;
  }
}
</style>