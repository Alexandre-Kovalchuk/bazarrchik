<script setup>
import TheHeader from "@/components/Base/TheHeader.vue";
import TheFooter from "@/components/Base/TheFooter.vue";
import SvgManager from "@/components/Base/SvgManager.vue";
</script>

<template>
  <TheHeader />

  <router-view />

  <TheFooter />

  <SvgManager />
</template>

<style lang="scss">
@import "assets/styles/style";
</style>
