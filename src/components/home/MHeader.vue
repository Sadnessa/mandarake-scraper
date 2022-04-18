<template>
  <div class="header">
    <MCard>
      <h1>Welcome, user</h1>
      <div class="btns-col">
        <div class="themes" v-if="doShowThemes">
          <div
            class="themes__item"
            v-for="i in themes"
            :key="i.name"
            :style="{ background: i.color }"
            :class="{ 'themes__item--active': i.name == currentTheme }"
            @click="onSelectTheme(i.name)"
          ></div>
        </div>
        <MButton rounded @click="onShowThemes">
          <span class="material-icons-round" v-if="doShowThemes">
            chevron_right
          </span>
          <span class="material-icons-round" v-else> color_lens </span>
        </MButton>
        <router-link to="/login">
          <MButton>
            <template #icon>
              <span class="material-icons"> logout </span>
            </template>
            Log out
          </MButton>
        </router-link>
      </div>
    </MCard>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useThemes } from '../../store/themes';

import MButton from "../base/MButton.vue";
import MCard from "../base/MCard.vue";

export default {
  components: {
    MButton,
    MCard,
  },

  data() {
    return {
      doShowThemes: false,
      themes: [
        {
          name: "base",
          color: "#c084fc",
        },
        {
          name: "aqua",
          color: "#579adb",
        },
        {
          name: "ss",
          color: "#209f91",
        },
        {
          name: "fff",
          color: "#d99ea0",
        },
        {
          name: "ggg",
          color: "#ea9e74",
        },
      ],
    };
  },

  computed: {
    ...mapState(useThemes, ['currentTheme'])
  },

  methods: {
    onShowThemes() {
      this.doShowThemes = !this.doShowThemes;
    },

    onSelectTheme(name) {
      this.currentTheme = name;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex justify-between items-center;
  @apply flex-col sm:flex-row;
  @apply py-5 px-8;
  @apply rounded-t-none rounded-b-2xl;

  h1 {
    @apply font-bold text-3xl;
    @apply mb-2.5 sm:mb-0;
  }

  .btns-col {
    @apply flex items-center;
    * {
      @apply mr-2.5;

      &:last-child {
        @apply mr-0;
      }
    }

    .themes {
      @apply flex;

      &__item {
        @apply relative;
        @apply h-5 w-5;
        @apply rounded-full;
        @apply cursor-pointer;

        &::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          left: 0px;
          background: transparent;
          transition: all ease-in-out 0.2s;
        }

        &:hover {
          &::after {
            background: rgba(255, 255, 255, 0.2);
          }
        }

        &--active {
          @apply outline outline-gray-500/20 outline-4;
        }
      }
    }
  }
}
</style>