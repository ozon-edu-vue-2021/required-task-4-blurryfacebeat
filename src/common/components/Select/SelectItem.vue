<template>
  <p @click="clickHandler">fwqfwq</p>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    item: {
      default: () => {}
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click', this.item);
    }
  }
};
</script>

<style scoped>
p {
  padding: 10px;

  cursor: pointer;
  transition: all 0.2s ease;
}

p:hover {
  color: #fff;

  background-color: #005bff;
}

p.active {
  color: #fff;

  background-color: #005bff;
}
</style>
