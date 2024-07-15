<script setup>
const props = defineProps({
  txt: {
    type: String,
  },
  modify: {
    type: String,
    required: true,
  },

  disable: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    :disabled="disable"
    class="v-btn"
    :class="`v-btn__${modify}${disable ? '_disabled' : ''}`"
  >
    {{ txt }}
  </button>
</template>

<style lang="scss">
@import "@/assets/styles/variable/variable";

.v-btn {
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-transform: uppercase;

  &__primary {
    color: $black-50;
    border-radius: 7px;
    background: $orange-100;

    &_disabled {
      background: $gray-100;
      color: $gray-200;
    }

    &:hover {
      background: $orange-50;
    }

    &:active {
      background: $orange-50;
    }
  }

  &__secondary {
    border: 1px solid $black-50;
    border-radius: 7px;
    color: $black-50;

    &_disabled {
      background: $gray-100;
      color: $gray-200;
    }

    &:hover {
      border: 1px solid $orange-100;
      color: $orange-100;
    }

    &:active {
      border: 1px solid $orange-100;
      color: $orange-100;
    }
  }

  &__tertiary {
    color: $black-50;

    &_disabled {
      color: $gray-200;
    }

    &:hover {
      color: $orange-100;
    }

    &:active {
      color: $orange-100;
    }
  }
}
</style>
