<template>
  <div class="select-container" v-click-outside="setDropdownDeactivated">
    <span
      :class="['select-label', isDropdownActive ? 'active' : '']"
      v-if="label"
      @click="setInputActive"
      >{{ label }}</span
    >
    <div class="select-dropdown">
      <input
        :class="['dropdown-input', isDropdownActive ? 'active' : '']"
        ref="dropdown-input"
        @focus="setDropdownActive"
        v-model.trim="search"
      />
      <div class="dropdown-list" v-if="isDropdownActive">
        <SelectItem
          v-for="item in filteredItems"
          :key="item.id"
          :item="item"
          :selectionField="selectionField"
          :activeItem="activeItem"
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
    },

    selectionField: {
      type: String,
      default: 'type'
    },

    withSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDropdownActive: false,
      activeItem: null,
      search: ''
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
      console.log(this.$refs['dropdown-input'].focus);
    },

    itemClickHandler(data) {
      this.search = data[this.selectionField];
      this.activeItem = data;
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item[this.selectionField]
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
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

.select-label {
  margin-bottom: 5px;

  font-weight: 500;
  color: #a4afb9;

  transition: all 0.2s ease;
}

.select-label.active {
  color: #005bff;
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

.dropdown-input.active {
  border-color: #005bff;
}

.dropdown-list {
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overscroll-behavior-y: contain;

  border: 2px solid #005bff;
  border-top: none;
  border-radius: 3px;
}

.dropdown-list::-webkit-scrollbar {
  display: none;
}
</style>
