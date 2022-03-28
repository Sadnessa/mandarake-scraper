 <template>
  <div class="search-sec">
    <h1>Mandarake scraper</h1>
    <div class="col">
      <MInput placeholder="Paste link here" v-model="searchText"></MInput>
      <MButton size="large" :disabled="disableButton" @click="addItemClick">
        Add link
      </MButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCards } from "../../store/cards";
import MInput from "../base/MInput.vue";
import MButton from "../base/MButton.vue";

export default {
  components: {
    MInput,
    MButton,
  },

  data() {
    return {
      searchText: "",
    };
  },

  methods: {
    ...mapActions(useCards, ["addItem"]),

    addItemClick() {
      this.addItem(this.searchText);
      this.searchText = "";
    },
  },

  computed: {
    disableButton() {
      if (this.searchText.length <= 2) {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>