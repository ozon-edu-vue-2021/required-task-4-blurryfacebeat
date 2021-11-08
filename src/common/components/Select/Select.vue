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
        @focusin="setDropdownActive"
        @focusout="checkActiveItem"
        v-model.trim="search"
      />
      <span class="clear-input" @click="clearField">X</span>
      <div
        class="dropdown-list"
        v-if="isDropdownActive && filteredItems.length"
      >
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
    },

    defaultActive: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isDropdownActive: false,
      activeItem: '',
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
    },

    itemClickHandler(data) {
      this.search = data[this.selectionField];
      this.activeItem = data;
      this.$emit('sendActiveItem', this.activeItem);
    },

    toLower(item) {
      return item.toLowerCase();
    },

    checkActiveItem() {
      if (!this.search) {
        this.search = this.activeItem
          ? this.activeItem[this.selectionField]
          : '';
      }
      this.$emit('sendActiveItem', this.activeItem);
    },

    clearField() {
      this.activeItem = '';
      this.search = '';
      this.$refs['dropdown-input'].focus();
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(
        (item) =>
          this.toLower(item[this.selectionField]).includes(
            this.toLower(this.search)
          ) &&
          this.toLower(item[this.selectionField]) !==
            this.toLower(
              this.activeItem ? this.activeItem[this.selectionField] : ''
            )
      );
    }
  },
  watch: {
    search() {
      this.$emit('changeCitizenship', this.search);
    }
  }
};
</script>

<style scoped>
.select-container {
  position: relative;
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
  padding: 6px 25px 10px 6px;

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
  position: absolute;
  z-index: 10;
  top: 60px;
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overscroll-behavior-y: contain;

  border: 2px solid #005bff;
  border-top: none;
  border-radius: 3px;
  background-color: #fff;
}

.dropdown-list::-webkit-scrollbar {
  display: none;
}

.clear-input {
  position: absolute;
  top: 35px;
  right: 10px;

  font-weight: 700;
  font-size: 12px;
  color: #a4afb9;

  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-input:hover {
  color: #005bff;
}
</style>
