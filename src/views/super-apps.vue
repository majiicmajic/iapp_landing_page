<template>
  <div>
    <div class="hero-setup">
      <header>
        <div
          class="hero-layout full-height"
          :style="'background-image:url(' + hero + ')'"
        >
          <!-- OVERLAY COVER BOTTOM -->
          <div class="overlay-cover"></div>

          <!-- CONTENT  -->
          <div class="container px-0 position-relative h-100">
            <div class="content index-99">
              <div class="hero-title-text brand-white">
                <p>The only super app that is accessible for everyone.</p>
              </div>

              <!-- DOWNLOAD BUTTON ROW  -->
              <div class="download-btn-row">
                <!-- APP STORE DOWNLOAD  -->
                <div class="app-download-btn mgr-30">
                  <div class="icon icon-apple mgr-13"></div>

                  <div>
                    <div class="text-one">Download on</div>
                    <div class="text-two">App Store</div>
                  </div>
                </div>

                <!-- PLAY STORE DOWNLOAD  -->
                <div class="app-download-btn">
                  <div class="icon icon-google-play mgr-13"></div>

                  <div>
                    <div class="text-one">Get it on</div>
                    <div class="text-two">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- EXPERIENCE SECTION -->
    <experience-section />

    <!-- FEATURE ONE SECTION -->
    <feature-one-section />

    <!-- CALL TO RIDE SECTION -->
    <call-to-ride-section />

    <!-- APP DETAIL SECTION -->
    <app-detail-section />

    <!-- EXPERIENCE TWO SECTION -->
    <experience-two-section />

    <!-- FEATURE TWO SECTION -->
    <feature-two-section />

    <!-- CALL TO ACTION  -->
    <call-to-action-section />

    <!-- APPS SLIDER SECTION  -->
    <apps-slider-section />

    <!-- APP SAMPLE SECTION -->
    <app-sample-section />
  </div>
</template>

<script>
import heroImg from "@/assets/static/super-apps-hero.png";
import experienceSection from "@/components/super-app-build/experience-section";
import featureOneSection from "@/components/super-app-build/feature-one-section";
import featureTwoSection from "@/components/super-app-build/feature-two-section";
import callToRideSection from "@/components/super-app-build/call-to-ride-section";
import appDetailSection from "@/components/super-app-build/app-detail-section";
import experienceTwoSection from "@/components/super-app-build/experience-two-section";
import callToActionSection from "@/components/super-app-build/call-to-action-section";

export default {
  name: "superApps",

  components: {
    experienceSection,
    featureOneSection,
    featureTwoSection,
    callToRideSection,
    appDetailSection,
    experienceTwoSection,
    callToActionSection,
    appsSliderSection: () =>
      import(
        /* webpackChunkName: 'appsSliderSection' */ "@/components/super-app-build/apps-slider-section"
      ),
    appSampleSection: () =>
      import(
        /* webpackChunkName: 'appSampleSection' */ "@/components/home-build/app-sample-section"
      ),
  },

  data() {
    return {
      hero: heroImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-setup {
  .container {
    .content {
      width: 50%;
      margin-top: 12vh;

      .hero-title-text {
        @include font-height(58, 64);
        letter-spacing: 0.01em;
      }
    }

    .download-btn-row {
      margin-top: toRem(40);
      @include flex-row-start-nowrap;
    }
  }
}
</style>
