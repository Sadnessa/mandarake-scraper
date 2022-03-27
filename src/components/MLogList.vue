 <template>
  <div class="log-list">
    <h1>Price changes</h1>
    <MCard v-for="log in logs" :key="log.date">
      <p>{{ log.price }}</p>
      <p>{{ log.date }}</p>
    </MCard>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.log-list {
  @apply w-full md:w-2/5;
  @apply pl-0 md:pl-3;

  h1 {
    @apply font-bold text-2xl;
    @apply py-3;
  }

  .card {
    @apply flex justify-between;
    @apply py-2 px-6;
    @apply mb-3;
  }
}
</style>

