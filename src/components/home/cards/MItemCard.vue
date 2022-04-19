<template>
  <MCard>
    <div class="rows">
      <div class="rows__top">
        <h1>{{ title }}</h1>
        <p>{{ date }}</p>
      </div>
      <div class="rows__bottom">
        <p>{{ price }}</p>
        <div class="btns-col">
          <router-link :to="'/logs/' + id">
            <MButton size="small" type="flat">View log</MButton>
          </router-link>
          <MButton size="small" @click="$emit('delete', id)">Delete</MButton>
        </div>
      </div>
    </div>
  </MCard>
</template>

<script>
import MButton from "../../base/MButton.vue";
import MCard from "../../base/MCard.vue";

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
    },

    id: {
      type: [Number, String],
    },
  },

  emits: ["delete"],

  methods: {
    onDelete() {
      this.doShowModal = true;
    },
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
        @apply font-bold text-2xl text-mode-base;
      }

      p {
        @apply text-mode-secondary;
        @apply text-base uppercase;
      }
    }

    &__bottom {
      @apply flex flex-row justify-between items-center;
      @apply my-2.5 mx-0.5;
      @apply py-2;

      p {
        @apply text-xl text-mode-base;
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

