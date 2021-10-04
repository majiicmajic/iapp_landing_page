<template>
  <section
    class="team-section position-relative"
    :style="'background-image:url(' + team + ')'"
  >
    <div class="container px-0">
      <!-- TITLE TEXT  -->
      <div class="title-text font-weight-700 brand-white">
        Team up with us.
      </div>

      <!-- DESCRIPTION  -->
      <div class="description brand-white">
        Either you are a driver, food vendor, or a travel agency, you can put
        your services on iApp.
      </div>

      <!-- TEAM ROW  -->
      <div class="team-row">
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

  .bg-img {
    @include background-cover;
  }

  .title-text {
    @include font-height(52, 72);
    margin-bottom: toRem(22);
    letter-spacing: 0.02em;
  }

  .description {
    @include font-height(20, 28);
    margin-bottom: toRem(120);
    letter-spacing: 0.02em;
    width: 50%;
  }

  .team-row {
    @include flex-row-between-nowrap;
    position: relative;
    bottom: toRem(-60);
    z-index: 9;
  }
}
</style>
