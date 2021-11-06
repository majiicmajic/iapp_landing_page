<template>
  <section class="process-section position-relative">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- INTRO COLUMN  -->
      <div
        class="intro-column index-99"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <!-- META TEXT  -->
        <div class="intro-meta-text">HOW IT WORKS</div>

        <!-- TITLE TEXT  -->
        <div class="intro-title-text">Simple steps to your super app</div>
      </div>

      <!-- PROCESS ROW  -->
      <div
        class="process-row row d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="120"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="col-12 col-md-6 col-lg-4">
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

    <!-- CIRCULAR SHAPE  -->
    <div class="floating-circle circle-one"></div>
    <div class="floating-circle circle-two"></div>
  </section>
</template>

<script>
import processCard from "@/components/home-build/process-card";

export default {
  name: "processSection",

  components: {
    processCard,
  },
};
</script>

<style lang="scss" scoped>
.process-section {
  padding: toRem(180) 0 toRem(148);
  overflow: hidden;

  @include breakpoint-down(xl) {
    padding: toRem(120) 0 toRem(100);
  }

  @include breakpoint-down(xs) {
    padding: toRem(80) 0 toRem(70);
  }

  .intro-column {
    .intro-title-text {
      width: 80%;
    }
  }

  .process-row {
    margin-top: toRem(75);

    @include breakpoint-down(xl) {
      margin-top: toRem(15);
    }

    @include breakpoint-down(xs) {
      margin-top: toRem(-35);
    }
  }

  .circle-one {
    @include square-shape(52);
    bottom: toRem(80);
    right: toRem(-5);
  }

  .circle-two {
    @include square-shape(52);
    left: toRem(10);
    bottom: 0;
  }
}
</style>
