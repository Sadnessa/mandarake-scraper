<template>
  <div class="logs" v-if="card !== undefined">
    <div class="item-title">
      <MCard>
        <router-link to="/">
          <MButton rounded>
            <template #icon>
              <span class="material-icons-round"> keyboard_backspace </span>
            </template>
          </MButton>
        </router-link>
        <div class="title-text">
          <h1>{{ card.title }}</h1>
          <div class="price-sec">
            <p>Current price:</p>
            <p class="num">{{ card.price }}</p>
          </div>
        </div>
      </MCard>
    </div>
    <div class="main">
      <MGraph :logs="logs"></MGraph>
      <MLogList :logs="logs"></MLogList>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCards } from "../../store/cards";
import { getLogs } from "../../api";
import MCard from "../../components/base/MCard.vue";
import MButton from "../../components/base/MButton.vue";
import MGraph from "../../components/home/logs/MGraph.vue";
import MLogList from "../../components/home/logs/MLogList.vue";

export default {
  components: {
    MCard,
    MButton,
    MGraph,
    MLogList,
  },

  data() {
    return {
      logs: [],
    };
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
    getLogs(this.$route.params["id"]).then((value) => {
      this.logs = value;
    });
  },
};
</script>

<style lang="scss" scoped>
.logs {
  @apply flex flex-col;
  @apply overflow-hidden;

  .item-title {
    @apply mb-4;

    .card {
      @apply flex items-center;

      .btn {
        @apply mr-4;
      }

      .title-text {
        @apply flex justify-between items-center;
        @apply w-full;

        .price-sec {
          @apply flex items-center;

          p {
            @apply text-neutral-500;
            @apply text-base uppercase;
          }

          .num {
            @apply text-lg;
            @apply text-black;
            @apply pl-2;
          }
        }
      }
    }

    h1 {
      @apply font-bold text-2xl;
    }
  }

  .main {
    @apply flex flex-col md:flex-row;
    @apply grow;
    @apply overflow-hidden;
  }
}
</style>