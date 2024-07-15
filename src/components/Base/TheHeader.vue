<script setup>
import BaseSvg from "@/components/Base/BaseSvg.vue";
import UIBtn from "@/components/UI/UIBtn.vue";
import BaseImage from "@/components/Base/BaseImage.vue";
import { useGetCookie } from "@/composable/useCookie.js";

const userInfo = ["chat", "basket", "notification"];
const menu = [
  { href: "", name: "Woman’s fashion" },
  { href: "", name: "Men’s fashion" },
  { href: "", name: "Electronics" },
  { href: "", name: "Beauty care" },
];

const getCookie = useGetCookie("token");
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-content">
          <div class="header__top-logo">
            <router-link to="/">BAzaRChiK</router-link>
          </div>

          <div class="header__top-info">
            <div class="header__top-like">
              <BaseSvg id="heart" />
            </div>

            <div class="header__top-user" v-if="getCookie">
              <div
                class="header__top-item"
                v-for="(item, index) in userInfo"
                :key="index"
              >
                <BaseSvg :id="item" />
              </div>

              <div class="header__top-avatar">
                <!--                <BaseImage srcset="" src="" alt="avatar" />-->
              </div>
            </div>

            <div class="header__top-login">
              <UIBtn modify="tertiary" txt="sign up | log in" />
            </div>

            <div class="header__top-sell">
              <UIBtn modify="secondary" txt="Sell now" />
            </div>

            <div class="header__top-help">
              <BaseSvg id="help" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom-content">
          <div class="header__bottom-catalog">
            <div class="header__bottom-icon">
              <BaseSvg id="catalog" />
            </div>

            <p class="header__bottom-txt">Catalogue</p>
          </div>

          <div class="header__bottom-menu">
            <ul
              class="header__bottom-list"
              v-for="(link, index) in menu"
              :key="index"
            >
              <li class="header__bottom-item">
                <router-link :to="link.href">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/variable/variable";
@import "@/assets/styles/breakpoints/media-breakpoints";

.header {
  position: fixed;
  z-index: 60;
  width: 100%;
  min-height: 140px;

  &__top {
    display: flex;
    align-items: center;
    min-height: 70px;
    background: $gray-50;
    padding: 0 45px;
    border-bottom: 0.5px solid $gray-100;

    @include media-breakpoint-down(md) {
      padding: 0;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-logo {
      position: relative;
      z-index: 50;
      font-weight: 300;
      font-size: 24px;

      a {
        color: $black-50;
      }
    }

    &-info,
    &-user {
      display: flex;
      align-items: center;
    }

    &-like,
    &-item,
    &-help {
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-item {
      &:nth-child(1) {
        margin: 0 0 0 24px;
      }

      &:nth-child(2) {
        margin: 0 24px;
      }
    }

    &-avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: $white-50;
      margin: 0 0 0 24px;
    }

    &-login {
      width: 143px;
      height: 42px;
    }

    &-sell {
      width: 105px;
      height: 42px;
      margin: 0 24px;
    }

    &-help {
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    min-height: 70px;
    padding: 0 45px;
    background: $gray-300;
    backdrop-filter: blur(10px);

    @include media-breakpoint-down(md) {
      padding: 0;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-catalog {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 16px;
      height: 16px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-txt {
      font-size: 14px;
      color: $black-50;
      margin: 0 0 0 4px;
    }

    &-menu {
      display: flex;
      justify-content: space-between;
      max-width: 475px;
      width: 100%;
    }

    &-item {
      font-size: 14px;

      a {
        color: $white-50;
      }
    }
  }
}
</style>
