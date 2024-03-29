<template>
  <div class="header">
    <MCard>
      <h1>Welcome, user</h1>
      <div class="btns-col">
        <div class="btns-col__themes">
          <div class="palette">
            <transition name="circles">
              <div class="themes" v-if="doShowThemes">
                <div
                  class="themes__item"
                  v-for="theme in themes"
                  :key="theme.name"
                  :style="{ background: theme.color }"
                  :class="{
                    'themes__item--active': theme.name == currentTheme,
                  }"
                  @click="onSelectTheme(theme.name)"
                ></div>
              </div>
            </transition>

            <MButton rounded @click="onShowThemes">
              <transition name="fade" mode="out-in">
                <span class="material-icons-round" v-if="doShowThemes">
                  chevron_right
                </span>
                <span class="material-icons-round" v-else> color_lens </span>
              </transition>
            </MButton>
          </div>

          <MButton rounded @click="onDarkMode">
            <transition name="fade" mode="out-in">
              <span class="material-icons-round" v-if="darkMode">
                dark_mode
              </span>
              <span class="material-icons-round" v-else>wb_sunny</span>
            </transition>
          </MButton>
        </div>
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
import { mapWritableState } from "pinia";
import { useThemes } from "../../store/themes";

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
          name: "emerald",
          color: "#209f91",
        },
        {
          name: "coffee",
          color: "#a25f47",
        },
        {
          name: "orange",
          color: "#ffbb48",
        },
        {
          name: "pink",
          color: "#e396a0",
        },
      ],
    };
  },

  computed: {
    ...mapWritableState(useThemes, ["currentTheme", "darkMode"]),
  },

  methods: {
    onShowThemes() {
      this.doShowThemes = !this.doShowThemes;
    },

    onSelectTheme(name) {
      this.currentTheme = name;
    },

    onDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.circles-enter-from,
.circles-leave-to,
.themes__item {
  opacity: 0;
}
.circles-enter-active,
.circles-leave-active,
.themes__item {
  transition: all 0.3s;
}

.card {
  @apply flex justify-between items-center;
  @apply flex-col sm:flex-row;
  @apply py-5 px-8;
  @apply rounded-t-none rounded-b-2xl;

  h1 {
    @apply font-bold text-3xl text-mode-base;
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

    &__themes {
      @apply flex items-center;

      .palette {
        @apply flex items-center;
        @apply relative;

        .themes {
          @apply flex md:flex-row flex-col;
          @apply md:static absolute;
          @apply top-10;
          @apply z-10;
          @apply md:py-0 py-2 md:px-0 px-2;
          @apply bg-mode-card;
          @apply transition-all duration-300;
          @apply md:shadow-none shadow;
          @apply rounded;

          &__item {
            @apply h-5 w-5;
            @apply rounded-full;
            @apply cursor-pointer;
            @apply transition-all;
            @apply opacity-100;
            @apply hover:opacity-80;
            @apply md:mb-0 mb-2.5;
            @apply md:mr-2.5 mr-0;

            &:last-child {
              @apply mb-0;
            }

            &--active {
              @apply outline outline-gray-500/20 outline-4;
            }
          }
        }
      }
    }
  }
}
</style>