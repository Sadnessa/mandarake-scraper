<template>
    <h1 class="text-3xl font-bold text-cyan-600">
    Hello world!
  </h1>
  <MButton size="large" disabled>УЪУ</MButton>
  <MButton size="small">Delete</MButton>
</template>

<script>
import MButton from '../components/base/MButton.vue'

export default {
  components: {
    MButton,
  },
};
</script>