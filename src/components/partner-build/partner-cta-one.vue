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
  }

  .container {
    padding: toRem(170) 0 toRem(115);
  }

  .title-text {
    @include font-height(48, 54);
    margin-bottom: toRem(35);
    width: 45%;
  }

  .btn {
    font-size: toRem(16);
  }
}
</style>
