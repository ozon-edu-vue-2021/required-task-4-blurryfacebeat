<template>
  <component class="heading-component" :is="headingType"><slot /></component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    headingType: {
      type: String,
      default: 'h4'
    }
  }
};
</script>

<style scoped>
.heading-component {
}
</style>
