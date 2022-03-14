<template>
  <div class="content">
    <div class="search-sec">
      <h1>Mandarake scraper</h1>
      <div class="col">
        <MInput placeholder="Paste link here"></MInput>
        <MButton size="large" disabled>Add link</MButton>
      </div>
    </div>
    <div class="cards-sec">
      <MCard
        v-for="card in cards"
        :key="card"
        :date="card.date"
        :price="card.price"
        :title="card.title"
      ></MCard>
    </div>
  </div>
</template>

<script>
import MButton from "./base/MButton.vue";
import MInput from "./base/MInput.vue";
import MCard from "./MCard.vue";

export default {
  components: {
    MButton,
    MInput,
    MCard,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply px-28;

  .search-sec {
    @apply flex justify-between items-center;
    @apply py-5;

    h1 {
      @apply font-bold text-3xl;
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
  }
}
</style>