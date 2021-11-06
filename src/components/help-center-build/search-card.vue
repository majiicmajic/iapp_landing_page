<template>
  <div
    class="search-card w-100 brand-grey-dark-bg rounded-15 overflow-hidden pointer smooth-transition"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
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

  @include breakpoint-down(xl) {
    padding: toRem(20) toRem(35);
    height: toRem(110);
  }

  @include breakpoint-down(lg) {
    padding: toRem(20) toRem(25);
    height: toRem(100);
  }

  @include breakpoint-down(xs) {
    padding: toRem(20);
  }

  @include breakpoint-custom-down(380) {
    padding: toRem(16) toRem(15);
  }

  &:hover {
    transform: scale(0.98);
  }

  .left {
    @include flex-row-start-nowrap;

    .avatar {
      @include square-shape(65);
      margin-right: toRem(25);

      @include breakpoint-down(xl) {
        @include square-shape(56);
      }

      @include breakpoint-down(xs) {
        @include square-shape(52);
        margin-right: toRem(18);
      }

      @include breakpoint-custom-down(380) {
        @include square-shape(48);
        margin-right: toRem(16);
      }

      .icon {
        @include center-placement;
        font-size: toRem(28);

        @include breakpoint-down(xl) {
          font-size: toRem(23);
        }

        @include breakpoint-down(xs) {
          font-size: toRem(20);
        }
      }
    }

    .text {
      @include font-height(18.5, 26);
      margin-right: toRem(80);

      @include breakpoint-down(xl) {
        @include font-height(17, 24);
      }

      @include breakpoint-down(lg) {
        @include font-height(14.5, 22);
      }

      @include breakpoint-custom-down(380) {
        @include font-height(13.5, 20);
      }
    }
  }

  .right {
    .icon {
      font-size: toRem(23);

      @include breakpoint-down(xl) {
        font-size: toRem(20);
      }

      @include breakpoint-down(lg) {
        font-size: toRem(18);
      }

      @include breakpoint-down(xs) {
        font-size: toRem(16);
      }

      @include breakpoint-custom-down(380) {
        font-size: toRem(15);
      }
    }
  }
}
</style>
