<template>
  <div
    class="post-excerpt-card pointer smooth-transition"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="90"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <div class="post-image rounded-10 overflow-hidden">
      <img v-lazy="staticImg(post.image)" alt="" />
    </div>

    <!-- BLOG INFO  -->
    <div class="blog-info">
      <div class="blog-count mgb-12 font-weight-700 brand-white">
        {{ post.count }}
      </div>

      <div class="blog-title brand-white">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postExcerptCard",

  props: {
    post: {
      type: Object,
      default: () => ({
        image: "",
        count: "BLOG 01",
        title: "Lorem ipsum dolor sit amet, consectetur.",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.post-excerpt-card {
  @include flex-row-start-nowrap;
  margin-bottom: toRem(68);

  @include breakpoint-down(xl) {
    margin-bottom: toRem(50);
  }

  @include breakpoint-down(xs) {
    margin-bottom: toRem(45);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .post-image {
    position: relative;
    @include rectangle-shape(200, 130);
    margin-right: toRem(30);

    @include breakpoint-down(lg) {
      @include rectangle-shape(180, 120);
      margin-right: toRem(20);
    }

    @include breakpoint-down(xs) {
      @include rectangle-shape(140, 90);
      margin-right: toRem(17);
    }

    @include breakpoint-custom-down(360) {
      @include rectangle-shape(120, 80);
      margin-right: toRem(15);
    }

    img {
      @include background-cover;
    }
  }

  .blog-count {
    @include font-height(16, 20);

    @include breakpoint-down(xl) {
      @include font-height(15, 24);
    }

    @include breakpoint-down(xs) {
      @include font-height(13.5, 22);
    }

    @include breakpoint-custom-down(360) {
      @include font-height(12, 21);
    }
  }

  .blog-title {
    @include font-height(19, 28);

    @include breakpoint-down(xl) {
      @include font-height(16, 24);
    }

    @include breakpoint-down(xs) {
      @include font-height(15, 22);
    }

    @include breakpoint-custom-down(360) {
      @include font-height(14, 21);
    }
  }
}
</style>
