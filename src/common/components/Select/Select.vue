<template>
  <div class="select-container" v-click-outside="setDropdownDeactivated">
    <span class="select-label" v-if="label" @click="setInputActive">{{
      label
    }}</span>
    <div class="select-dropdown">
      <div
        :class="['dropdown-input', isDropdownActive ? 'active' : '']"
        ref="dropdown-input"
        tabindex="0"
        contenteditable="true"
        @focus="setDropdownActive"
      ></div>
      <div class="dropdown-list" v-if="isDropdownActive">
        <SelectItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @click="itemClickHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectItem from '@/common/components/Select/SelectItem';

import '@/directives/click-outside';

export default {
  name: 'Select',
  components: { SelectItem },
  props: {
    label: {
      type: String
    },

    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isDropdownActive: false
    };
  },
  methods: {
    setInputActive() {
      this.$refs['dropdown-input'].focus();
      this.setDropdownActive();
    },

    setDropdownActive() {
      this.isDropdownActive = true;
    },

    setDropdownDeactivated() {
      this.isDropdownActive = false;
    },

    itemClickHandler(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
.select-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.select-container:focus-within .select-label {
  color: #005bff;
}

.select-label {
  margin-bottom: 5px;

  font-weight: 500;
  color: #a4afb9;

  transition: all 0.2s ease;
}

.dropdown-input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding: 6px 10px;

  font-family: inherit;
  font-weight: 600;

  transition: all 0.2s ease;
  outline: none;
  border: 2px solid #a4afb9;
  border-radius: 3px;
  background-color: #fff;
  overflow-x: scroll;
}

.dropdown-input::-webkit-scrollbar {
  display: none;
}

.dropdown-input:focus {
  border-color: #005bff;
}

.dropdown-input.active {
  border-color: #005bff;
}

.dropdown-list {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  border: 2px solid #005bff;
  border-top: none;
  border-radius: 3px;
}

.dropdown-list::-webkit-scrollbar {
  display: none;
}
</style>
