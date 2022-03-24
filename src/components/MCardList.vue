<template>
  <div class="cards-sec" ref="list">
    <TransitionGroup name="list">
      <MItemCard
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        @delete="deleteItem"
      ></MItemCard>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCards } from "../store/cards";
import MItemCard from "../components/MItemCard.vue";

export default {
  components: {
    MItemCard,
  },

  computed: {
    ...mapState(useCards, ["cards"]),
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
  },

  watch: {
    cards (newValue, oldValue) {
      if(!oldValue) {
        return
      }
      if (newValue.length - oldValue.length == 1) {
        this.onCardAdded()
      }
    }
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
  @apply pb-5;

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
