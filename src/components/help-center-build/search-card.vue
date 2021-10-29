<template>
  <div
    class="search-card w-100 brand-grey-dark-bg rounded-15 overflow-hidden pointer smooth-transition"
  >
    <!-- LEFT -->
    <div class="left">
      <div class="avatar brand-red-bg">
        <div class="icon brand-white" :class="search.icon"></div>
      </div>

      <div class="text brand-white font-weight-700">
        {{ search.description }}
      </div>
    </div>

    <!-- RIGHT  -->
    <div class="right">
      <div class="icon brand-white icon-chevron-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchCard",

  props: {
    search: {
      type: Object,
      default: () => ({
        icon: "icon-iRide",
        description: " The driver didn’t arrive on time, can I cancel?",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.search-card {
  @include flex-row-between-nowrap;
  padding: toRem(30) toRem(45);
  margin-bottom: toRem(40);
  height: toRem(140);

  &:hover {
    transform: scale(0.98);
  }

  .left {
    @include flex-row-start-nowrap;

    .avatar {
      @include square-shape(65);
      margin-right: toRem(25);

      .icon {
        @include center-placement;
        font-size: toRem(28);
      }
    }

    .text {
      @include font-height(18.5, 26);
      margin-right: toRem(80);
    }
  }

  .right {
    .icon {
      font-size: toRem(23);
    }
  }
}
</style>
