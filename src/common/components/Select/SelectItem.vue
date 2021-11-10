<template>
  <p :class="isActiveItem ? 'active' : ''" @click="clickHandler">
    {{ item[selectionField] }}
  </p>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    item: {
      required: true
    },
    selectionField: {
      type: String,
      default: 'type'
    },
    activeItem: {
      default: null
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click', this.item);
    }
  },
  computed: {
    isActiveItem() {
      return this.activeItem
        ? this.activeItem[this.selectionField] ===
            this.item[this.selectionField]
        : false;
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
