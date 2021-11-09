<template>
  <label :class="['input-container', errorClass]">
    <span :class="['input-title', errorClass]" v-if="title">{{ title }}</span>
    <input :class="errorClass" v-bind="$attrs" @input="inputHandler($event)" />
    <span :class="['input-subtitle', errorClass]" v-if="subtitle">{{
      subtitle
    }}</span>
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
    },

    errorValidate: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    inputHandler(event) {
      this.$emit('input', event.target.value);
    }
  },
  computed: {
    errorClass() {
      return this.errorValidate ? 'error-validate' : '';
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

.error-validate {
  color: #f32828;

  border-color: #f32828;
}

.error-validate:focus {
  color: #f32828;

  border-color: #f32828;
}

.input-container.error-validate:focus-within .input-title {
  color: #f32828;
}
</style>
