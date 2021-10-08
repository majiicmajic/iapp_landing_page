<template>
  <div class="app-sample-section position-relative brand-grey-dark-bg">
    <!-- BACKGROUND IMAGE  -->
    <img :src="staticImg('app-samples.png')" alt="" />

    <div class="container px-0 position-relative h-100">
      <div class="content-area">
        <div class="text font-weight-700 brand-white">
          Ready to be super? Download iApp now!
        </div>

        <!-- DOWNLOAD BUTTON ROW  -->
        <div class="download-btn-row">
          <!-- APP STORE DOWNLOAD  -->
          <div class="app-download-btn mgr-15">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "appSampleSection",
};
</script>

<style lang="scss" scoped>
.app-sample-section {
  height: toRem(620);

  img {
    position: absolute;
    height: 100%;
    width: auto;
    right: 0;
  }

  .content-area {
    position: absolute;
    bottom: 20%;
    width: 35%;

    .text {
      @include font-height(52, 60);
      margin-bottom: toRem(30);
    }

    .download-btn-row {
      @include flex-row-start-nowrap;
    }
  }
}
</style>
