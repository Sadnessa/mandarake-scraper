 <template>
  <div class="log-list">
    <h1>Price changes</h1>
    <MCard>
      <p>Price</p>
      <p>Date</p>
    </MCard>
  </div>
</template>

<script>
import MCard from "./base/MCard.vue";

export default {
  components: {
    MCard,
  },
};
</script>

<style lang="scss" scoped>
.log-list {
  @apply w-full md:w-2/5;
  @apply pl-0 sm:pl-3;

  h1 {
    @apply font-bold text-2xl;
    @apply py-3;
  }

  .card {
    @apply flex justify-between;
    @apply py-2 px-6;
  }
}
</style>

