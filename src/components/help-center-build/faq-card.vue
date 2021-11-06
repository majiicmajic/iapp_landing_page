<template>
  <div
    class="faq-card rounded-10 mgb-30"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <!-- TOP -->
    <div class="top pointer" @click="toggleAccordion">
      <div class="left">
        <div class="avatar brand-red-bg"></div>
        <div class="text brand-white font-weight-700">
          How do I add a payment method?
        </div>
      </div>

      <div class="right">
        <div
          class="icon brand-white icon-chevron-down smooth-transition"
          :class="show_base ? 'rotate-180' : null"
        ></div>
      </div>
    </div>

    <!-- BOTTOM -->
    <div class="bottom brand-white smooth-animation" v-if="show_base">
      Fares are calculated per distance and per time by the app. With the base
      fare of 100 naira, fare estimate is calculated thus: 100 naira base fare +
      40 naira per kilometer + 15 naira per minute. We charge 500 naira as the
      minimum fare.
    </div>
  </div>
</template>

<script>
export default {
  name: "faqCard",

  data: () => ({
    show_base: false,
  }),

  methods: {
    toggleAccordion() {
      this.show_base = !this.show_base;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-card {
  border: toRem(2) solid $brand-red;

  @include breakpoint-down(sm) {
    border: toRem(1) solid $brand-red;
  }

  .top {
    padding: toRem(30) toRem(45);
    @include flex-row-between-nowrap;

    @include breakpoint-down(xl) {
      padding: toRem(25) toRem(40);
    }

    @include breakpoint-down(md) {
      padding: toRem(25);
    }

    @include breakpoint-custom-down(380) {
      padding: toRem(20);
    }

    .left {
      @include flex-row-start-nowrap;

      .avatar {
        @include square-shape(21);
        margin-right: toRem(25);

        @include breakpoint-down(xl) {
          @include square-shape(18);
          margin-right: toRem(20);
        }

        @include breakpoint-down(md) {
          @include square-shape(16);
          margin-right: toRem(18);
        }

        @include breakpoint-custom-down(380) {
          @include square-shape(13);
          margin-right: toRem(13);
        }
      }

      .text {
        @include font-height(20, 32);

        @include breakpoint-down(xl) {
          @include font-height(17, 30);
        }

        @include breakpoint-down(md) {
          @include font-height(15.5, 28);
        }

        @include breakpoint-custom-down(380) {
          @include font-height(14, 22);
        }
      }
    }

    .right {
      font-size: toRem(30);

      @include breakpoint-down(xl) {
        font-size: toRem(24);
      }

      @include breakpoint-down(lg) {
        font-size: toRem(20);
      }
    }
  }

  .bottom {
    padding: toRem(30) toRem(45);
    @include font-height(18, 27);

    @include breakpoint-down(xl) {
      padding: toRem(25) toRem(40);
      @include font-height(16, 27);
      padding-top: 0;
    }

    @include breakpoint-down(md) {
      padding: toRem(25);
      @include font-height(15, 26);
      padding-top: 0;
    }

    @include breakpoint-custom-down(380) {
      padding: toRem(20);
      padding-top: 0;
      @include font-height(13.5, 24);
    }
  }
}
</style>
