<template>
    <h1 class="text-3xl font-bold text-cyan-600">
    Hello world!
  </h1>
  <MButton size="large" disabled>УЪУ</MButton>
  <MButton size="small">Delete</MButton>
  <MInput ph="Paste link here"></MInput>
</template>

<script>
import MButton from '../components/base/MButton.vue'
import MInput from '../components/base/MInput.vue'

export default {
  components: {
    MButton,
    MInput,
  },
};
</script>