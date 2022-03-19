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
      <MItemCard
        v-for="card in cards"
        :key="card"
        :date="card.date"
        :price="card.price"
        :title="card.title"
      ></MItemCard>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";
import MItemCard from "./MItemCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MItemCard,
  },

  data() {
    return {
      cards: [
        {
          title: "Mandarake",
          price: "4000",
          date: "20 JUN 2021",
        },

        {
          title: "Ыыы",
          price: "4000",
          date: "20 JUN 2021",
        },
      ],

      searchText: "",
    };
  },

  computed: {
    disableButton() {
      if (this.searchText.length <= 2) {
        return true
      }
    }
  }
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
      * {
        @apply mr-2;

        &:last-child {
          @apply mr-0;
        }
      }
    }
  }

  .card {
    @apply mb-4;

    &:last-child {
      @apply mb-0;
    }
  }
}
</style>