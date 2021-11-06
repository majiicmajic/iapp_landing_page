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
        If you are a car owner, it’s time to scale up your income!
      </div>

      <button class="btn btn-primary">Become Our Partner</button>
    </div>
  </section>
</template>

<script>
import partnerCTAImg from "@/assets/static/partner-cta.png";

export default {
  name: "partnerCTAOne",

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
      height: toRem(140);
      top: toRem(-10);
    }

    @include breakpoint-down(md) {
      height: toRem(140);
      top: toRem(-20);
    }
  }

  .container {
    padding: toRem(170) 0 toRem(115);

    @include breakpoint-down(xl) {
      padding: toRem(160) 0 toRem(110);
    }
  }

  .title-text {
    @include font-height(48, 54);
    margin-bottom: toRem(35);
    width: 45%;

    @include breakpoint-down(xl) {
      width: 47%;
      padding-top: toRem(35);
      @include font-height(41, 54);
    }

    @include breakpoint-down(lg) {
      @include font-height(36, 50);
      width: 55%;
    }

    @include breakpoint-down(md) {
      @include font-height(28, 42);
      width: 60%;
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 38);
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(23.5, 36);
      width: 85%;
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

    @include breakpoint-down(xs) {
      font-size: toRem(13.5);
    }
  }
}
</style>
