<template>
  <section
    class="team-section position-relative"
    :style="'background-image:url(' + team + ')'"
  >
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- TITLE TEXT  -->
      <div
        class="title-text font-weight-700 brand-white"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="120"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Team up with us.
      </div>

      <!-- DESCRIPTION  -->
      <div
        class="description brand-white"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="130"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Either you are a driver, food vendor, or a travel agency, you can put
        your services on iApp.
      </div>

      <!-- TEAM ROW  -->
      <div class="team-row row d-flex justify-content-center">
        <div
          class="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <process-card
            icon="icon-cloud-download"
            title="Download the app"
            description="Visit your device app store to download."
          />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <process-card
            icon="icon-user-plus"
            title="Register an account"
            description="Fill in the required details to sign up."
          />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <process-card
            icon="icon-messenger"
            title="Start using your iApp"
            description="Get started and explore all the super app features."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamImg from "@/assets/static/team.png";
import processCard from "@/components/home-build/process-card";

export default {
  name: "teamSection",

  components: {
    processCard,
  },

  data() {
    return {
      team: teamImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.team-section {
  padding-top: toRem(90);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @include breakpoint-down(md) {
    margin-top: toRem(150);
    margin-bottom: toRem(-60);
  }

  .bg-img {
    @include background-cover;
  }

  .title-text {
    @include font-height(52, 72);
    margin-bottom: toRem(22);
    letter-spacing: 0.02em;

    @include breakpoint-down(xl) {
      @include font-height(42, 60);
    }

    @include breakpoint-down(lg) {
      @include font-height(34, 55);
    }

    @include breakpoint-down(sm) {
      @include font-height(28, 36);
      margin-bottom: toRem(16);
      letter-spacing: 0.01em;
    }

    @include breakpoint-down(xs) {
      @include font-height(24, 34);
    }
  }

  .description {
    @include font-height(20, 28);
    margin-bottom: toRem(120);
    letter-spacing: 0.02em;
    width: 50%;

    @include breakpoint-down(xl) {
      margin-bottom: toRem(80);
      @include font-height(17, 25);
    }

    @include breakpoint-down(lg) {
      margin-bottom: toRem(50);
      @include font-height(15, 24);
    }

    @include breakpoint-down(sm) {
      @include font-height(14, 23);
      margin-bottom: toRem(15);
      letter-spacing: unset;
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(13.5, 21);
      margin-bottom: toRem(10);
      width: 85%;
    }
  }

  .team-row {
    position: relative;
    bottom: toRem(-60);
    z-index: 9;
  }
}
</style>
