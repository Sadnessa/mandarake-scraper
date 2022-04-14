<template>
  <div class="cards-sec" ref="list">
    <TransitionGroup name="list">
      <div class="empty-list" v-if="noCardsMessage">
        There is nothing to show.
      </div>
      <MItemCard
        v-else  
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        @delete="onDelete"
      ></MItemCard>
    </TransitionGroup>
    <MModal ref="modal" v-model="doShowModal">
      Do you really want to delete this card?
    </MModal>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCards } from "../../store/cards";
import MItemCard from "../../components/home/cards/MItemCard.vue";
import MModal from "../../components/base/MModal.vue";

export default {
  components: {
    MItemCard,
    MModal,
  },

  data() {
    return {
      doShowModal: false,
    };
  },

  computed: {
    ...mapState(useCards, ["cards", "isLoading"]),
    noCardsMessage() {
      return this.cards.length === 0 && !this.isLoading ? true : false
    }
  },

  methods: {
    ...mapActions(useCards, ["loadCards", "deleteItem"]),

    scrollListToBottom() {
      this.$refs.list.scrollTo({
        top: this.$refs.list.scrollHeight,
        behavior: "smooth",
      });
    },

    onCardAdded() {
      this.$nextTick(() => {
        this.scrollListToBottom();
      });
    },

    onDelete(id) {
      this.$refs.modal.show().then((result) => {
        if (result == true) {
          this.deleteItem(id);
        }
      });
    },
  },

  watch: {
    cards(newValue, oldValue) {
      if (!oldValue) {
        return;
      }
      if (newValue.length - oldValue.length == 1) {
        this.onCardAdded();
      }
    },
  },

  created() {
    this.loadCards();
  },
};
</script>

<style lang="scss">
.cards-sec {
  position: relative;
  @apply overflow-y-auto;
  @apply overflow-x-hidden;
  @apply grow;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  @apply mb-10;

  .card {
    @apply mb-4;

    &:last-child {
      @apply mb-1.5;
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
