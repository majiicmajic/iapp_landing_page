<template>
  <section class="process-section position-relative">
    <div class="container px-0">
      <!-- INTRO COLUMN  -->
      <div class="intro-column index-99">
        <!-- META TEXT  -->
        <div class="intro-meta-text">HOW IT WORKS</div>

        <!-- TITLE TEXT  -->
        <div class="intro-title-text">Simple steps to your super app</div>
      </div>

      <!-- PROCESS ROW  -->
      <div class="process-row">
        <process-card
          icon="icon-cloud-download"
          title="Download the app"
          description="Visit your device app store to download."
        />

        <process-card
          icon="icon-user-plus"
          title="Register an account"
          description="Fill in the required details to sign up."
        />

        <process-card
          icon="icon-messenger"
          title="Start using your iApp"
          description="Get started and explore all the super app features."
        />
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

  .intro-column {
    .intro-title-text {
      width: 80%;
    }
  }

  .process-row {
    @include flex-row-between-nowrap;
    margin-top: toRem(75);
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
