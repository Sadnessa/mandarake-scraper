<template>
  <div class="logs" v-if="card !== undefined">
    <div class="item-title">
      <MCard>
        <MButton rounded>
          <template #icon>
            <span class="material-icons-round"> keyboard_backspace </span>
          </template>
        </MButton>
        <h1>{{ card.title }}</h1>
      </MCard>
    </div>
    <div class="main">
      <div class="graph">
        <MCard></MCard>
      </div>
      <div class="log-list">
        <MCard></MCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCards } from "../../store/cards";
import MCard from "../../components/base/MCard.vue";
import MButton from "../../components/base/MButton.vue";

export default {
  components: {
    MCard,
    MButton,
  },

  computed: {
    ...mapState(useCards, ["cards"]),

    card() {
      return this.cards.find((el) => {
        return (el.id = this.$route.params["id"]);
      });
    },
  },

  methods: {
    ...mapActions(useCards, ["loadCards"]),
  },

  created() {
    this.loadCards();
  },
};
</script>

<style lang="scss" scoped>
.logs {
  @apply flex flex-col;
  @apply h-screen;

  .item-title {
    @apply mb-4;

    .card {
      @apply flex;
    }
  }

  .main {
    @apply flex flex-row;

    .graph {
      @apply w-3/5;
    }

    .log-list {
      @apply w-2/5;
      @apply pl-3;
    }
  }
}
</style>