<template>
  <button class="button-component" @click.prevent.stop="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.button-component {
  padding: 15px 30px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #005bff;
}

.button-component:focus {
  border-color: #1132fd;
}
</style>
