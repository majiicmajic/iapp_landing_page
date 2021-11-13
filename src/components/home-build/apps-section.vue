<template>
  <section class="apps-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- TOP ROW  -->
      <div
        class="top-title-row"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="title-text brand-white text-capitalize">
          Get started with these super apps
        </div>

        <router-link
          :to="{ name: 'superApps' }"
          class="view-link smooth-transition"
          >View All</router-link
        >
      </div>

      <div class="row">
        <!-- APPS COLUMN  -->
        <div
          class="col-12 col-md-6"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <app-card />
          <app-card />
          <app-card />
        </div>

        <!-- APP VIDEO  -->
        <div class="col-12 col-md-6 position-relative">
          <div
            class="video-section h-100"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="130"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <!-- VIDEO COVER  -->
            <div class="video-cover brand-red-dark-bg rounded-20"></div>

            <!-- VIDEO PLAYER  -->
            <div class="video-player rounded-20 index-1 overflow-hidden">
              <div class="wrapper position-relative h-100 h-100">
                <img :src="staticImg('app-video.png')" alt="play-iapp-video" />
              </div>
            </div>

            <!-- PLAY ICON  -->
            <div
              class="play-icon brand-red-bg pointer index-99 rounded-circle"
              title="Play video"
            >
              <div class="wrapper position-relative w-100 h-100">
                <div class="icon icon-play brand-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import appCard from "@/components/home-build/app-card";

export default {
  name: "appsSection",

  components: {
    appCard,
  },
};
</script>

<style lang="scss" scoped>
.apps-section {
  padding: toRem(30) 0 toRem(60);
}
</style>
