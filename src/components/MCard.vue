<template>
  <div class="card">
    <div class="rows">
      <div class="rows__top">
        <h1>Good name</h1>
        <p>Date</p>
      </div>
      <div class="rows__bottom">
        <p>Price</p>
        <div class="btns-col">
          <MButton size="small">View log</MButton>
          <MButton size="small">Delete</MButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";

export default {
  components: {
    MButton,
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply py-2 px-6;
  @apply bg-white;
  @apply rounded-lg;

  .rows {
    @apply flex flex-col;

    &__top {
      @apply flex flex-row justify-between items-center;
      @apply my-2.5 mx-0.5;
    }

    &__bottom {
      @apply flex flex-row justify-between items-center;
      @apply my-2.5 mx-0.5;

      .btns-col {
        * {
          @apply mr-1;

          &:last-child {
            @apply mr-0;
          }
        }
      }
    }
  }
}
</style>

