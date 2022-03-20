<template>
  <div class="content">
    <div class="search-sec">
      <h1>Mandarake scraper</h1>
      <div class="col">
        <MInput placeholder="Paste link here" v-model="searchText"></MInput>
        <MButton size="large" :disabled="disableButton">Add link</MButton>
      </div>
    </div>

    <div class="cards-sec">
      <TransitionGroup name="list">
        <MItemCard
          v-for="card in cards"
          :key="card"
          :date="card.date"
          :price="card.price"
          :title="card.title"
          :id="card.id"
          @delete="onDelete"
        ></MItemCard>
      </TransitionGroup>
    </div>

    <MModal v-model="doShowModal" @confirm="deleteItem">
      Do you really want to delete this card?
    </MModal>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";
import MItemCard from "./MItemCard.vue";
import MModal from "./base/MModal.vue";

export default {
  components: {
    MButton,
    MInput,
    MItemCard,
    MModal,
  },

  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Mandarake",
          price: "4000",
          date: "20 JUN 2021",
        },

        {
          id: 2,
          title: "Ыыы",
          price: "4000",
          date: "20 JUN 2021",
        },
      ],

      searchText: "",

      doShowModal: false,

      deletedID: null,
    };
  },

  computed: {
    disableButton() {
      if (this.searchText.length <= 2) {
        return true;
      }
    },
  },

  methods: {
    onDelete(id) {
      this.deletedID = id;
      this.doShowModal = true;
    },

    deleteItem() {
      this.cards = this.cards.filter((card) => {
        return card.id !== this.deletedID;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply container lg:px-36 px-2;

  .search-sec {
    @apply flex items-center justify-between;
    @apply flex-col sm:flex-row;
    @apply py-5;

    h1 {
      @apply font-bold text-3xl;
      @apply sm:mb-0 mb-2.5;
    }

    .col {
      @apply flex items-center;

      * {
        @apply mr-2;

        &:last-child {
          @apply mr-0;
        }
      }
    }
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .list-leave-active {
    position: absolute;
  }

  .card {
    @apply mb-4;

    &:last-child {
      @apply mb-0;
    }
  }
}
</style>