<template>
    <MHeader></MHeader>
    <MContent></MContent>
</template>

<script>
import MHeader from "../components/MHeader.vue";
import MContent from "../components/MContent.vue";

export default {
  name: "Home",
  components: {
    MHeader,
    MContent,
  },
};
</script>