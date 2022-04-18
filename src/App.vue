<template>
  <div class="emerald">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700");

* {
  font-family: "Roboto", sans-serif;
}

#app {
  @apply container 2xl:px-44 px-2;
}

body {
  @apply bg-neutral-200;
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
