<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
import { mapWritableState } from "pinia";
import { useThemes } from "./store/themes";

export default {
  computed: {
    ...mapWritableState(useThemes, ["currentTheme", 'darkMode']),
  },

  watch: {
    currentTheme(newValue, oldValue) {
      if (oldValue !== undefined) {
        document.querySelector("body").classList.remove(oldValue);
      }
      if (newValue) {
        document.querySelector("body").classList.add(newValue);
      }

      localStorage.setItem("themes", newValue);
    },

    darkMode(newValue) {
      if (newValue) {
        document.querySelector("body").classList.add('dark');
      } else {
        document.querySelector("body").classList.remove('dark');
      }
    }
  },

  mounted() {
    this.currentTheme = localStorage.getItem("themes");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700");

* {
  font-family: "Roboto", sans-serif;
}

#app {
  @apply container 2xl:px-44 px-2;
}

body {
  @apply bg-mode-bg;
}

.material-icons,
.material-icons-round {
  font-size: inherit;
  font-weight: inherit;
}

//transition between pages
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
