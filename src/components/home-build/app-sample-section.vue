<template>
  <div class="app-sample-section position-relative brand-grey-dark-bg">
    <!-- BACKGROUND IMAGE  -->
    <img :src="staticImg('app-samples.png')" alt="" />

    <div class="container px-3 px-sm-4 px-xl-0 position-relative h-100">
      <div class="content-area">
        <div
          class="text font-weight-700 brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Ready to be super? Download iApp now!
        </div>

        <!-- DOWNLOAD BUTTON ROW  -->
        <div
          class="download-btn-row"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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
  overflow: hidden;

  @include breakpoint-down(xl) {
    height: toRem(540);
  }

  @include breakpoint-down(lg) {
    height: toRem(470);
  }

  @include breakpoint-down(md) {
    height: toRem(400);
  }

  @include breakpoint-down(sm) {
    height: toRem(360);
  }

  img {
    position: absolute;
    height: 100%;
    width: auto;
    right: 0;

    @include breakpoint-down(xl) {
      right: toRem(-40);
    }

    @include breakpoint-down(md) {
      right: toRem(-140);
    }

    @include breakpoint-down(sm) {
      right: toRem(-220);
    }

    @include breakpoint-down(xs) {
      right: toRem(-280);
    }
  }

  .content-area {
    position: absolute;
    bottom: 20%;
    width: 35%;

    @include breakpoint-down(md) {
      width: 50%;
      bottom: 30%;
    }

    @include breakpoint-down(sm) {
      bottom: 10%;
      width: 65%;
    }

    .text {
      @include font-height(52, 60);
      margin-bottom: toRem(30);

      @include breakpoint-down(xl) {
        @include font-height(40, 50);
      }

      @include breakpoint-down(lg) {
        @include font-height(32, 46);
      }

      @include breakpoint-down(md) {
        @include font-height(26, 40);
      }

      @include breakpoint-down(sm) {
        @include font-height(22, 36);
      }

      @include breakpoint-down(xs) {
        @include font-height(20, 32);
      }

      @include breakpoint-custom-down(360) {
        @include font-height(18, 28);
      }
    }

    .download-btn-row {
      @include flex-row-start-wrap;

      @include breakpoint-down(xs) {
        @include flex-column-start-start;

        .app-download-btn {
          &:last-of-type {
            margin-top: toRem(20);
          }
        }
      }
    }
  }
}
</style>
