<template>
    <MHeader></MHeader>
    <MButton size="large" disabled>УЪУ</MButton>
    <MButton size="small">Delete</MButton>
    <MInput placeholder="Paste link here"></MInput>

</template>

<script>
import MButton from "../components/base/MButton.vue";
import MInput from "../components/base/MInput.vue";
import MHeader from "../components/MHeader.vue";

export default {
  components: {
    MButton,
    MInput,
    MHeader,
  },
};
</script>