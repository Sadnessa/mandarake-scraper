<template>
  <div class="content">
    <div class="search-sec">
      <h1>Mandarake scraper</h1>
      <div class="col">
        <MInput placeholder="Paste link here"></MInput>
        <MButton size="large" disabled>Add link</MButton>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";

export default {
  components: {
    MButton,
    MInput,
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply px-20;

  .search-sec {
    @apply flex justify-between items-center;
    @apply py-5;

    h1 {
      @apply font-bold text-3xl;
    }

    .col {
      * {
        @apply mr-3;

        &:last-child {
          @apply mr-0;
        }
      }
    }
  }
}
</style>