<template>
  <div class="input">
    <div class="inpt" tabindex="0">
      <div class="icon-wrap" v-if="$slots.icon">
        <slot name="icon"></slot>
      </div>
      <input
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="v.$validate"
      />
    </div>
    <div class="errors">
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
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  @apply flex flex-col;

  .inpt {
    @apply flex;
    @apply bg-neutral-300;
    @apply px-3 py-1.5 mb-1; 
    @apply box-border rounded-lg;
    @apply cursor-text;

    .icon-wrap {
      @apply flex items-center;
      @apply pr-2 mr-2;
      @apply select-none;
      @apply text-neutral-500 text-lg;
      @apply border-r-2 border-neutral-400;
    }

    input {
      @apply bg-neutral-300;
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
      @apply outline-dashed outline-2 outline-purple-500;
    }
  }

  .errors {
    @apply flex flex-col items-center;
    @apply h-full;
    min-height: 16px;
    @apply text-xs font-bold;
  }
}
</style>