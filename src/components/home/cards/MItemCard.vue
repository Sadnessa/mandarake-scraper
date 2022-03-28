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
          <MButton size="small" @click="doShowModal = true">Delete</MButton>
        </div>
      </div>
    </div>
    <MModal v-model="doShowModal" @confirm="$emit('delete', id)">
      Do you really want to delete this card?
    </MModal>
  </MCard>
</template>

<script>
import MButton from "../../base/MButton.vue";
import MCard from "../../base/MCard.vue";
import MModal from "../../base/MModal.vue";

export default {
  components: {
    MButton,
    MCard,
    MModal,
  },

  data() {
    return {
      doShowModal: false,
    };
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
      type: Number,
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

