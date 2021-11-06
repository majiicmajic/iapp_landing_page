<template>
  <section
    class="partner-cta-section position-relative"
    :style="'background-image:url(' + partnerCTAImg + ')'"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <div class="container px-3 px-sm-4 px-xl-0 mx-auto">
      <!-- TITLE TEXT  -->
      <div class="title-text font-weight-700 brand-white">
        We want your delicious foods on iEat, bring it on.
      </div>

      <button class="btn btn-primary">Become Our Partner</button>
    </div>
  </section>
</template>

<script>
import partnerCTAImg from "@/assets/static/partner-cta-two.png";

export default {
  name: "partnerCTATwo",

  data() {
    return {
      partnerCTAImg: partnerCTAImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.partner-cta-section {
  @include flex-column-center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .curve-top {
    height: toRem(110);

    @include breakpoint-down(xl) {
      height: toRem(135);
      top: toRem(-5);
    }
  }

  .container {
    padding: toRem(170) 0 toRem(115);

    @include breakpoint-down(xl) {
      padding: toRem(200) 0 toRem(110);
    }

    @include breakpoint-down(lg) {
      padding: toRem(200) 0 toRem(80);
    }
  }

  .title-text {
    @include font-height(48, 54);
    margin-bottom: toRem(45);
    width: 42%;

    @include breakpoint-down(xl) {
      @include font-height(41, 54);
      width: 48%;
    }

    @include breakpoint-down(lg) {
      width: 54%;
      @include font-height(36, 50);
    }

    @include breakpoint-down(md) {
      width: 60%;
      @include font-height(30, 42);
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 38);
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(23, 36);
      width: 80%;
    }
  }

  .btn {
    font-size: toRem(16);

    @include breakpoint-down(xl) {
      font-size: toRem(15);
    }

    @include breakpoint-down(md) {
      font-size: toRem(14);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(13.5);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(13);
    }
  }
}
</style>
