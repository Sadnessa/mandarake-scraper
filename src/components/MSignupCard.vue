<template>
  <MCard>
    <MInput></MInput>
    <MButton>fdfdfd</MButton>
  </MCard>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";
import MCard from "./base/MCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MCard,
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex flex-col;
  @apply max-w-sm;
}
</style>