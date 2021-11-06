<template>
  <div class="partners-blog">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white text-center font-weight-700 mgb-58"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="80"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Trending topics from our partners
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <post-card image="blog-one.png" />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <post-card image="blog-two.png" />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <post-card image="blog-three.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postCard from "@/components/home-build/post-card";

export default {
  name: "partnersBlog",

  components: {
    postCard,
  },
};
</script>

<style lang="scss" scoped>
.partners-blog {
  padding: toRem(110) 0 toRem(70);

  @include breakpoint-down(xl) {
    padding: toRem(70) 0;
  }

  @include breakpoint-down(xl) {
    padding: toRem(70) 0 toRem(50);
  }

  .title-text {
    @include font-height(34, 50);

    @include breakpoint-down(xl) {
      @include font-height(32, 48);
    }

    @include breakpoint-down(lg) {
      @include font-height(31, 45);
    }

    @include breakpoint-down(md) {
      @include font-height(25, 40);
      margin-bottom: toRem(48) !important;
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
