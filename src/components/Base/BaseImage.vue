<script setup>
const props = defineProps(["srcset", "src", "alt"]);
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img :src="src" :alt="alt" />
  </picture>
</template>
