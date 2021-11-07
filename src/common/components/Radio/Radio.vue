<template>
  <label class="radio-container">
    <span class="main-content">
      <input
        type="radio"
        :value="value"
        :checked="isChecked"
        @change="radioHandler($event)"
      />
      <span class="fake-radio"></span>
      <span class="title">{{ value }}</span>
    </span>
    <span class="sub-title" v-if="subtitle">{{ subtitle }}</span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    modelValue: {
      default: ''
    }
  },
  methods: {
    radioHandler(event) {
      this.$emit('change', event.target.value);
    }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    }
  }
};
</script>

<style scoped>
.radio-container {
  width: max-content;
  display: flex;
  flex-direction: column;

  cursor: pointer;
}

.main-content {
  display: flex;
  align-items: center;
}

input {
  font-size: 0;
  display: none;
}

input:checked + .fake-radio {
  border-color: transparent;
  background-color: #005bff;
}

input:checked + .fake-radio::before {
  opacity: 1;
}

.fake-radio {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #a4afb9;
  transition: all 0.2s ease;
}

.fake-radio::before {
  content: '';
  width: 10px;
  height: 10px;

  background-color: #fff;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.2s ease;
}

.title {
  font-weight: 600;
}

.sub-title {
}
</style>
