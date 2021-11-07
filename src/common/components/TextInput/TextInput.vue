<template>
  <label class="input-container">
    <span class="input-title" v-if="title">{{ title }}</span>
    <input v-bind="$attrs" @input="inputHandler($event)" />
    <span class="input-subtitle" v-if="subtitle">{{ subtitle }}</span>
  </label>
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    title: {
      type: String
    },

    subtitle: {
      type: String
    },

    value: {
      type: String
    }
  },

  methods: {
    inputHandler(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style scoped>
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-container:focus-within .input-title {
  color: #005bff;
}

.input-title {
  margin-bottom: 5px;

  font-weight: 500;
  color: #a4afb9;

  transition: all 0.2s ease;
}

input {
  width: 100%;
  height: 35px;
  padding: 0 10px;

  font-family: inherit;
  font-weight: 600;

  transition: all 0.2s ease;
  outline: none;
  border: 2px solid #a4afb9;
  border-radius: 3px;
}

input:focus {
  border-color: #005bff;
}

input::placeholder {
  color: #a4afb9;
}

.input-subtitle {
  margin-top: 5px;

  font-size: 12px;
  font-weight: 500;
  color: #a4afb9;
}
</style>
