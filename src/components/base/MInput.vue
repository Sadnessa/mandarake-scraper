<template>
  <div class="input">
    <div class="inpt" tabindex="0" :class="errorClass">
      <div class="icon-wrap" v-if="$slots.icon">
        <slot name="icon"></slot>
      </div>
      <input
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="v && v.$validate()"
      />
    </div>
    <div class="errors" v-if="v">
      <div class="error" v-for="error in v.$errors" :key="error.$uid">
        {{ error.$message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },

    modelValue: {
      type: String,
    },

    v: {
      type: Object,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    errorClass() {
      if (!this.v) {
        return {};
      }
      return {
        "inpt--error": this.v.$invalid && this.v.$dirty,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  @apply flex flex-col;

  .inpt {
    @apply flex;
    @apply bg-mode-input;
    @apply px-3 py-1.5 mb-1;
    @apply box-border rounded-lg;
    @apply cursor-text;

    &.inpt--error {
      @apply bg-red-300/40;
    }

    .icon-wrap {
      @apply flex items-center;
      @apply pr-2 mr-2;
      @apply select-none;
      @apply text-neutral-500 text-lg;
      @apply border-r-2 border-neutral-400;
    }

    input {
      @apply bg-transparent;
      @apply w-full py-1;
      @apply font-medium text-sm;

      &::placeholder {
        @apply font-bold text-neutral-500;
      }

      &:focus {
        @apply outline-none;
      }
    }

    &:focus,
    &:focus-within {
      @apply outline-dashed outline-2 outline-skin-line;
    }
  }

  .errors {
    @apply flex justify-around;
    @apply h-full;
    min-height: 16px;
    @apply font-bold;
    font-size: 10px;
    @apply text-red-500;
  }
}
</style>