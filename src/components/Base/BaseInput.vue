<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
  value: {
    type: String,
    default: "",
  },

  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
  },

  label: {
    type: String,
    default: "",
  },

  isDisabled: {
    type: Boolean,
    default: false,
  },

  error: {
    type: String,
  },
});

const updateVal = (e) => {
  emit("update:value", e.target.value);
};
</script>

<template>
  <div class="input">
    <label class="input__label" :for="name" v-if="label">
      {{ label }}
    </label>

    <input
      class="input__input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateVal"
      :disabled="isDisabled"
      autocomplete="off"
    />

    <small class="input__error" v-if="error">
      {{ error }}
    </small>
  </div>
</template>

<style lang="scss"></style>
