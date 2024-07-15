<script setup>
import BaseImage from "@/components/Base/BaseImage.vue";

const bannerImg = {
  webp: new URL("../../assets/img/banner.webp", import.meta.url),
  img: new URL("../../assets/img/banner.png", import.meta.url),
};
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="banner__content">
        <div class="banner__everything">
          <h1 class="banner__title">
            Everything <br />
            can be bought <br />
            and sold here!
          </h1>

          <div class="banner__search"></div>
        </div>

        <div class="banner__img">
          <BaseImage
            :srcset="bannerImg.webp"
            :src="bannerImg.img"
            alt="banner"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/variable/variable";
@import "@/assets/styles/breakpoints/media-breakpoints";

.banner {
  margin: 70px 0 0;

  &__content {
    display: flex;
  }

  &__everything {
    max-width: 685px;
    width: 100%;
    height: 626px;
    background: $green-50;
    border-radius: 24px;
    margin: 0 16px 0 0;
    padding: 150px 0 0 45px;
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 131%;
    color: $black-50;
    margin: 0 0 16px;
  }

  &__search {
    max-width: 515px;
    width: 100%;
    height: 42px;
    border: 0.5px solid $gray-200;
    border-radius: 7px;
  }

  &__img {
    max-width: 685px;
    width: 100%;
    height: 626px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
