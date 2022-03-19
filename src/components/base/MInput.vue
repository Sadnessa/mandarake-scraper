<template>
  <input
    class="inpt"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
  },
};
</script>

<style lang="scss" scoped>
.inpt {
  @apply bg-neutral-300;
  @apply px-3 py-3 box-border rounded-lg;
  @apply font-bold text-xs;

  &:focus {
    @apply outline-dashed outline-2 outline-purple-500;
  }

  &::placeholder {
    @apply text-neutral-500;
  }
}
</style>