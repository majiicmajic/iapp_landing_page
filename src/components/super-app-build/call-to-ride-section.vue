<template>
  <section
    class="cta-section position-relative"
    :style="'background-image:url(' + icallImg + ')'"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <div class="container px-0 mx-auto">
      <!-- TITLE TEXT  -->
      <div class="title-text font-weight-700 brand-white">
        iRide is everywhere, call for a ride now.
      </div>

      <!-- DOWNLOAD BUTTON ROW  -->
      <div class="download-btn-row">
        <!-- APP STORE DOWNLOAD  -->
        <div class="app-download-btn mgr-25">
          <div class="icon icon-apple mgr-12"></div>

          <div>
            <div class="text-one">Download on</div>
            <div class="text-two">App Store</div>
          </div>
        </div>

        <!-- PLAY STORE DOWNLOAD  -->
        <div class="app-download-btn">
          <div class="icon icon-google-play mgr-12"></div>

          <div>
            <div class="text-one">Get it on</div>
            <div class="text-two">Google Play</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icallImg from "@/assets/static/icall-img.png";

export default {
  name: "ctaSection",

  data() {
    return {
      icallImg: icallImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.cta-section {
  @include flex-column-center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .curve-top {
    height: toRem(110);
  }

  .container {
    padding: toRem(200) 0 toRem(140);
  }

  .title-text {
    @include font-height(48, 54);
    margin-bottom: toRem(35);
    width: 35%;
  }

  .download-btn-row {
    @include flex-row-start-nowrap;
  }
}
</style>
