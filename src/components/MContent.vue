<template>
  <div class="content">
    <div class="search-sec">
      <h1>Mandarake scraper</h1>
      <div class="col">
        <MInput placeholder="Paste link here" v-model="searchText"></MInput>
        <MButton size="large" :disabled="disableButton" @click="addItem"
          >Add link</MButton
        >
      </div>
    </div>

    <div class="cards-sec">
      <TransitionGroup name="list">
        <MItemCard
          v-for="card in cards"
          :key="card.id"
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
import { itemList, addItem, deleteItem } from "../api";
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
      cards: [],

      searchText: "",

      doShowModal: false,

      deletedID: null,
    };
  },

  created() {
    itemList().then((value) => {
      this.cards = value;
    });
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
      deleteItem(this.deletedID).then((value) => {
        this.cards = value;
      });
    },

    addItem() {
      addItem(this.searchText).then((value) => {
        this.cards = value;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply container lg:px-36 px-2;
  @apply flex flex-col;
  height: 700px;

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

  .cards-sec {
    position: relative;
    @apply overflow-y-auto;
    @apply overflow-x-hidden;
    @apply grow;
    scrollbar-gutter: stable;
    scrollbar-width: thin;

    .card {
      @apply mb-4;
    }
  }
}

//transition group for cards
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>