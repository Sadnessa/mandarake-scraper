<template>
  <div class="card">
    <div class="rows">
      <div class="rows__top">
        <h1>Good name</h1>
        <p>27 jun 2022</p>
      </div>
      <div class="rows__bottom">
        <p>4000 rub</p>
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
  @apply shadow;

  .rows {
    @apply flex flex-col;

    &__top {
      @apply flex flex-row justify-between items-center;
      @apply my-2.5 mx-0.5;

      h1 {
        @apply font-bold text-2xl;
      }

      p {
        @apply text-neutral-500; 
        @apply text-base uppercase;
      }
    }

    &__bottom {
      @apply flex flex-row justify-between items-center;
      @apply my-2.5 mx-0.5;

      p {
        @apply text-xl;
        @apply py-2; 
      }

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

