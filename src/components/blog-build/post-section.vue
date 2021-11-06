<template>
  <div class="container px-3 px-sm-4 px-xl-0">
    <div class="post-section">
      <!-- LEFT SECTION -->
      <div class="left-section">
        <!-- BLOG IMAGE -->
        <div
          class="blog-image rounded-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="80"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img v-lazy="staticImg('blog-one.png')" alt="" />
        </div>

        <!-- BLOG COUNT -->
        <div
          class="blog-count brand-white font-weight-700 mgb-15"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          BLOG 01
        </div>

        <!-- BLOG TITLE -->
        <div
          class="blog-title brand-white font-weight-700 mgb-12"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <!-- BLOG DESCRIPTION -->
        <div
          class="blog-description brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus non sit
          nunc fusce magnis neque bibendum pellentesque turpis.
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div class="right-section">
        <post-excerpt-card
          :post="{
            image: 'blog-two.png',
            count: 'BLOG 01',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />

        <post-excerpt-card
          :post="{
            image: 'blog-three.png',
            count: 'BLOG 02',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />

        <post-excerpt-card
          :post="{
            image: 'blog-four.png',
            count: 'BLOG 03',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import postExcerptCard from "@/components/blog-build/post-excerpt-card";

export default {
  name: "postSection",

  components: {
    postExcerptCard,
  },
};
</script>

<style lang="scss" scoped>
.post-section {
  @include flex-row-between-wrap;
  align-items: flex-start;

  .left-section {
    width: 48%;

    @include breakpoint-down(md) {
      width: 100%;
      margin-bottom: toRem(60);
    }

    .blog-image {
      margin-bottom: toRem(42);
      position: relative;
      height: toRem(400);
      width: 100%;

      @include breakpoint-down(xl) {
        margin-bottom: toRem(38);
        height: toRem(350);
      }

      @include breakpoint-down(lg) {
        margin-bottom: toRem(36);
        height: toRem(320);
      }

      @include breakpoint-down(xs) {
        height: toRem(260);
      }

      @include breakpoint-custom-down(360) {
        height: toRem(220);
      }

      img {
        @include background-cover;
      }
    }

    .blog-count {
      @include font-height(16, 24);

      @include breakpoint-down(xl) {
        @include font-height(15, 22);
      }

      @include breakpoint-down(xs) {
        @include font-height(13.5, 20);
      }
    }

    .blog-title {
      @include font-height(22, 30);

      @include breakpoint-down(xl) {
        @include font-height(19, 28);
      }

      @include breakpoint-down(lg) {
        @include font-height(18, 26);
      }

      @include breakpoint-down(xs) {
        @include font-height(16, 23);
      }

      @include breakpoint-custom-down(360) {
        @include font-height(15.5, 21);
      }
    }

    .blog-description {
      @include font-height(16.5, 27);

      @include breakpoint-down(lg) {
        @include font-height(15, 25);
      }

      @include breakpoint-down(xs) {
        @include font-height(14.5, 23);
      }
    }
  }

  .right-section {
    width: 48%;

    @include breakpoint-down(md) {
      width: 100%;
    }
  }
}
</style>
