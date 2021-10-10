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
