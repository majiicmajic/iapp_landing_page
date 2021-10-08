<template>
  <div>
    <div class="home-setup">
      <header>
        <div
          class="home-hero full-height"
          :style="'background-image:url(' + hero + ')'"
        >
          <!-- OVERLAY COVER BOTTOM -->
          <div class="overlay-cover"></div>

          <!-- CONTENT  -->
          <div class="container px-0 position-relative h-100">
            <div class="content index-99">
              <div class="hero-title-text brand-white">
                <p>5 countries.</p>
                <p>25+ products.</p>
                <p>1 super app.</p>
              </div>

              <!-- CALL TO ACTION BUTTON  -->
              <button class="btn btn-primary hero-cta-btn">
                Get The Super App
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- SERVICES SECTION  -->
    <service-section />

    <!-- SCALE STATS SECTION  -->
    <scale-section />

    <!-- PROCESS SECTION  -->
    <process-section />

    <!-- APPS SECTION -->
    <apps-section />

    <!-- TEAM SECTION -->
    <team-section />

    <!-- PERKS SECTION -->
    <perks-section />

    <!-- POST SECTION -->
    <post-section />

    <!-- LOCATION SECTION -->
    <location-section />

    <!-- APP SAMPLE SECTION -->
    <app-sample-section />
  </div>
</template>

<script>
import heroImg from "@/assets/static/home-hero.jpg";
import serviceSection from "@/components/home-build/service-section";
import scaleSection from "@/components/home-build/scale-section";

export default {
  name: "home",

  components: {
    serviceSection,
    scaleSection,
    processSection: () =>
      import(
        /* webpackChunkName: 'processSection' */ "@/components/home-build/process-section"
      ),
    appsSection: () =>
      import(
        /* webpackChunkName: 'appsSection' */ "@/components/home-build/apps-section"
      ),
    teamSection: () =>
      import(
        /* webpackChunkName: 'teamSection' */ "@/components/home-build/team-section"
      ),
    perksSection: () =>
      import(
        /* webpackChunkName: 'perksSection' */ "@/components/home-build/perks-section"
      ),
    postSection: () =>
      import(
        /* webpackChunkName: 'postSection' */ "@/components/home-build/post-section"
      ),
    locationSection: () =>
      import(
        /* webpackChunkName: 'locationSection' */ "@/components/home-build/location-section"
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
.home-setup {
  margin-bottom: toRem(180);

  .home-hero {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    animation: animated-image 15s ease infinite;

    .overlay {
      background: linear-gradient(
          222.36deg,
          rgba(28, 32, 38, 0.25) 48.17%,
          rgba(37, 42, 49, 0.4) 120.42%
        ),
        linear-gradient(0deg, rgba(34, 56, 56, 0.1), rgba(35, 39, 48, 0.3)),
        radial-gradient(
          111.6% 409.22% at 100% 25.67%,
          rgba(70, 40, 40, 0.4) 14.53%,
          rgba(49, 17, 17, 0.1) 65.46%
        );
    }

    .overlay-cover {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 9;
      top: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        359.61deg,
        #0e1218 8.24%,
        rgba(10, 13, 17, 0.1) 76.66%
      );
    }

    .content {
      @include center-y;
      margin-top: 8vh;

      .hero-title-text {
        @include font-height(62, 54);
        letter-spacing: 0.01em;
        font-weight: 800;
      }

      .hero-cta-btn {
        padding: toRem(15) toRem(50);
        font-size: toRem(16.25);
        margin-top: toRem(55);
      }
    }
  }
}
</style>
