<template>
  <Transition name="fade" mode="out-in">
    <div class="modal" v-if="modelValue">
      <MCard>
        <h1>Confirm</h1>
        <p>
          <slot></slot>
        </p>
        <div class="btns">
          <MButton type="flat" @click="onDecline">Decline</MButton>
          <MButton @click="onConfirm">Confirm</MButton>
        </div>
      </MCard>
      <div class="modal__overlay"></div>
    </div>
  </Transition>
</template>

<script>
import MCard from "./MCard.vue";
import MButton from "./MButton.vue";

export default {
  components: {
    MCard,
    MButton,
  },

  props: {
    modelValue: {
      type: Boolean,
    },
  },

  methods: {
    onConfirm() {
      this.$emit("update:modelValue", false);
      this.$emit("confirm");
    },

    onDecline() {
      this.$emit("update:modelValue", false);
      this.$emit("decline");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply h-screen w-screen;
  @apply fixed inset-0;
  @apply flex justify-center items-center;

  .card {
    @apply max-w-sm;
    @apply flex flex-col;

    h1 {
      @apply border-b-2 border-dashed border-purple-500;
      @apply mb-3 pb-2;
      @apply font-bold text-lg text-center;
    }

    p {
      @apply text-center;
    }

    .btns {
      @apply flex;
      @apply w-full;
      @apply mt-4;

      & * {
        @apply w-full;
        @apply mr-1.5;

        &:last-child {
          @apply mr-0;
        }
      }
    }
  }

  &__overlay {
    @apply h-screen w-screen;
    @apply absolute inset-0 -z-10;
    @apply bg-gray-500 opacity-40;
  }
}

//transition for modal
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;

  .card {
    transition: transform 0.5s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  .card {
    transform: translateY(30px);
  }
}
</style>