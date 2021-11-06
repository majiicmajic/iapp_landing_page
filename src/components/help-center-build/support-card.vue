<template>
  <div
    class="support-card brand-grey-dark-bg w-100 rounded-15"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <!-- ICON -->
    <div class="avatar brand-red-bg">
      <div class="icon" :class="support.icon"></div>
    </div>

    <div class="text top-text font-weight-700">{{ support.header_text }}</div>

    <div class="text mid-text font-weight-500">
      {{ support.description }}
    </div>

    <div
      class="text bottom-text font-weight-400"
      v-for="(text, index) in support.meta_text"
      :key="index"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "supportCard",

  props: {
    support: {
      icon: "",
      header_text: "",
      description: "",
      meta_text: ["Monday - Saturday", "9am - 6pm"],
    },
  },
};
</script>

<style lang="scss" scoped>
.support-card {
  @include flex-column-center;
  height: toRem(270);

  @include breakpoint-down(xl) {
    height: toRem(240);
  }

  @include breakpoint-down(lg) {
    margin-bottom: toRem(30);
  }

  .avatar {
    @include square-shape(65);
    margin-bottom: toRem(30);

    @include breakpoint-down(xl) {
      @include square-shape(55);
      margin-bottom: toRem(15);
    }

    .icon {
      @include center-placement;
      font-size: toRem(35);

      @include breakpoint-down(xl) {
        font-size: toRem(24);
      }
    }
  }

  .text {
    color: $brand-white;
    text-align: center;
  }

  .top-text {
    @include font-height(24, 16);
    margin-bottom: toRem(12);

    @include breakpoint-down(xl) {
      @include font-height(17, 21);
    }
  }

  .mid-text {
    @include font-height(18, 24);
    margin-bottom: toRem(10);
    word-wrap: break-word;
    width: 56%;

    @include breakpoint-down(xl) {
      @include font-height(15.5, 22);
      width: 60%;
    }
  }

  .bottom-text {
    @include font-height(15, 21);

    @include breakpoint-down(xl) {
      @include font-height(14, 20);
    }
  }
}
</style>
