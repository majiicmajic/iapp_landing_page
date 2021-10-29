<template>
  <div class="faq-card rounded-10 mgb-30">
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

  .top {
    padding: toRem(30) toRem(45);
    @include flex-row-between-nowrap;

    .left {
      @include flex-row-start-nowrap;

      .avatar {
        @include square-shape(21);
        margin-right: toRem(25);
      }

      .text {
        @include font-height(20, 32);
      }
    }

    .right {
      font-size: toRem(30);
    }
  }

  .bottom {
    padding: toRem(30) toRem(45);
    padding-top: 0;
    @include font-height(18, 27);
  }
}
</style>
