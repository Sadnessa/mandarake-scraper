<template>
  <MCard>
    <div class="rows">
      <div class="rows__top">
        <h1> {{ title }}</h1>
        <p> {{ date }} </p>
      </div>
      <div class="rows__bottom">
        <p> {{ price }} </p>
        <div class="btns-col">
          <MButton size="small">View log</MButton>
          <MButton size="small">Delete</MButton>
        </div>
      </div>
    </div>
  </MCard>
</template>

<script>
import MButton from "./base/MButton.vue";
import MCard from "./base/MCard.vue";

export default {
  components: {
    MButton,
    MCard,
  },

  props: {
    title: {
      type: String,
    },

    date: {
      type: String,
    },

    price: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply py-2 px-6;

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
      @apply py-2;

      p {
        @apply text-xl;
      }

      .btns-col {
        * {
          @apply mr-1.5;

          &:last-child {
            @apply mr-0;
          }
        }
      }
    }
  }
}
</style>

