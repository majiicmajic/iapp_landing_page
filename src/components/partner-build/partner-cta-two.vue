<template>
  <section
    class="partner-cta-section position-relative"
    :style="'background-image:url(' + partnerCTAImg + ')'"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <div class="container px-0 mx-auto">
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
  }

  .container {
    padding: toRem(170) 0 toRem(115);
  }

  .title-text {
    @include font-height(48, 54);
    margin-bottom: toRem(45);
    width: 42%;
  }

  .btn {
    font-size: toRem(16);
  }
}
</style>
