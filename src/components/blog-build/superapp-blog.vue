<template>
  <div class="super-app-blog">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white font-weight-700 mgb-58"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="80"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Trending topics on the super app
      </div>

      <div class="row">
        <!-- APPS COLUMN  -->
        <div class="col-12 col-md-6">
          <post-excerpt-card
            :post="{
              image: 'blog-two.png',
              count: 'BLOG 01',
              title: ' Lorem ipsum dolor sit amet, consectetur ',
            }"
          />

          <post-excerpt-card
            :post="{
              image: 'blog-two.png',
              count: 'BLOG 01',
              title: ' Lorem ipsum dolor sit amet, consectetur ',
            }"
          />

          <post-excerpt-card
            :post="{
              image: 'blog-two.png',
              count: 'BLOG 01',
              title: ' Lorem ipsum dolor sit amet, consectetur ',
            }"
          />
        </div>

        <!-- APP VIDEO  -->
        <div class="col-12 col-md-6 position-relative">
          <div
            class="video-section h-100"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
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
  </div>
</template>

<script>
import postExcerptCard from "@/components/blog-build/post-excerpt-card";

export default {
  name: "superAppBlog",

  components: {
    postExcerptCard,
  },
};
</script>

<style lang="scss" scoped>
.super-app-blog {
  padding: toRem(110) 0 toRem(80);

  @include breakpoint-down(xl) {
    padding: toRem(80) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(40) 0 toRem(70);
  }

  .title-text {
    @include font-height(34, 50);

    @include breakpoint-down(xl) {
      @include font-height(32, 48);
    }

    @include breakpoint-down(lg) {
      @include font-height(28, 42);
      margin-bottom: toRem(48) !important;
    }

    @include breakpoint-down(md) {
      @include font-height(24, 40);
    }

    @include breakpoint-down(sm) {
      @include font-height(22, 38);
    }

    @include breakpoint-down(xs) {
      @include font-height(18, 32);
      margin-bottom: toRem(45) !important;
    }
  }
}
</style>
