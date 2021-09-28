<template>
  <div class="select-wrapper">
    <!-- SELECT INPUT  -->
    <div
      class="select-input form-control pointer smooth-transition"
      ref="selectInput"
      @click="toggleView"
      v-on-clickaway="forceClose"
    >
      <!-- SELECTIONS -->
      <div class="selections" v-if="selected_value">
        <!-- SELECT CARD -->

        <div class="select-text text-capitalize">
          {{ selected_value }}
        </div>
      </div>

      <!-- PLACEHOLDER TEXT -->
      <div class="placeholder-text" v-else>{{ placeholder }}</div>

      <!-- CLOSE BUTTON -->
      <div class="dropdown-icon">
        <div class="wrapper w-100 h-100">
          <div
            class="icon icon-chevron-down brand-ash smooth-transition"
            :class="{ 'rotate-180': option_select }"
          ></div>
        </div>
      </div>
    </div>

    <!-- BOTTOM OPTIONS -->
    <div
      class="select-option-wrapper rounded-5 index-1 mgt-5 smooth-animation"
      v-if="option_select"
    >
      <!-- OPTIONS -->
      <template v-if="options.length">
        <div class="option-scroll-wrapper">
          <div
            class="option-row text-capitalize"
            v-for="(option, index) in options"
            :key="index"
            @click="makeSelection(index)"
          >
            {{ option.name }}
          </div>
        </div>
      </template>

      <template v-else>
        <div class="no-options grey-text text-left">No result found</div>
      </template>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "SingleInput",

  mixins: [clickaway],

  props: {
    options: {
      type: Array,
      default: () => [],
    },
    pre_select: {
      type: Object,
      default: () => {},
    },
    placeholder: {
      type: String,
      default: "Select One",
    },
    clear_selection: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      option_select: false,
      selected_value: null,
    };
  },

  watch: {
    clear_selection: {
      handler(value) {
        if (value) this.selected_value = null;
      },
    },

    pre_select: {
      handler(value) {
        if (Object.keys(value).length)
          this.selected_value = value.name || value.abbreviation;
      },
    },
  },

  methods: {
    toggleView() {
      this.option_select = !this.option_select;
    },

    forceClose() {
      this.option_select = false;
    },

    showSelection(data) {
      this.selected_value = data.name;
    },

    makeSelection(index) {
      this.selected_value = this.options[index].name;
      this.$emit("selectedOption", this.options[index].id);
      this.forceClose();
    },
  },
};
</script>

<style></style>
