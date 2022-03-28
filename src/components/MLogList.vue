 <template>
  <div class="log-list">
    <h1>Price changes</h1>
    <div class="scroll-sec">
      <MCard v-for="log in logs" :key="log.date">
        <p class="price">{{ log.price }}</p>
        <p class="date">{{ log.date }}</p>
      </MCard>
    </div>
  </div>
</template>

<script>
import MCard from "./base/MCard.vue";

export default {
  components: {
    MCard,
  },

  props: {
    logs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.log-list {
  @apply flex flex-col;
  @apply w-full md:w-2/5;
  @apply pl-0 md:pl-3;
  @apply grow;

  h1 {
    @apply font-bold text-2xl;
    @apply py-3;
  }

  .scroll-sec {
    @apply mb-10;
    @apply overflow-y-scroll;
    @apply overflow-x-hidden;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    @apply grow;

    .card {
      @apply flex justify-between items-center;
      @apply py-2 px-6;
      @apply mb-3;

      &:last-child {
        @apply mb-1.5;
      }

      .date {
        @apply text-neutral-500;
        @apply text-base uppercase;
      }

      .price {
        @apply text-lg;
      }
    }
  }
}
</style>

