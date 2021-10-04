<template>
  <section class="apps-section">
    <div class="container px-0">
      <!-- TOP ROW  -->
      <div class="top-row">
        <div class="title-text brand-white text-capitalize">
          Get started with these super apps
        </div>

        <router-link to class="view-link smooth-transition"
          >View All</router-link
        >
      </div>

      <div class="row">
        <!-- APPS COLUMN  -->
        <div class="col-12 col-md-6">
          <app-card />
          <app-card />
          <app-card />
        </div>

        <!-- APP VIDEO  -->
        <div class="col-12 col-md-6 position-relative">
          <div class="video-section h-100">
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

  .top-row {
    @include flex-row-between-nowrap;
    margin-bottom: toRem(60);

    .title-text {
      font-weight: 700;
      @include font-height(36, 44);
    }

    .view-link {
      font-weight: 600;
      @include font-height(18, 27);

      &:hover {
        color: $brand-red;
      }
    }
  }

  .video-section {
    @include flex-column-center;

    .video-cover {
      @include rectangle-shape(510, 350);
      transform: rotate(10.49deg);
    }

    .video-player {
      @include rectangle-shape(510, 350);
      @include center-y;

      img {
        @include background-cover;
      }
    }

    .play-icon {
      @include center-y;
      @include square-shape(86);

      .icon {
        @include center-placement;
        margin-left: toRem(3.5);
        font-size: toRem(35);
      }
    }
  }
}
</style>
