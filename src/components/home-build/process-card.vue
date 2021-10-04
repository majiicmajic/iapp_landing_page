<template>
  <div class="process-card">
    <!-- ICON  -->
    <div class="avatar">
      <div class="icon" :class="icon"></div>
    </div>

    <!-- TITLE TEXT -->
    <div class="title-text brand-white text-center">{{ title }}</div>

    <!-- DESCRIPTION TEXT -->
    <div class="description-text brand-white text-center">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "processCard",

  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
