<template>
  <div class="team-blog">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white font-weight-700 mgb-58"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="80"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Top updates from the team
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>

        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>

        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamBlogCard from "@/components/blog-build/team-blog-card";

export default {
  name: "teamBlog",

  components: {
    teamBlogCard,
  },
};
</script>

<style lang="scss" scoped>
.team-blog {
  padding: toRem(80) 0;

  @include breakpoint-down(xl) {
    padding: toRem(50) 0 toRem(70);
  }

  @include breakpoint-down(md) {
    position: relative;
    margin-top: toRem(80);
    padding: toRem(50) 0 toRem(70);
  }

  .title-text {
    @include font-height(34, 50);

    @include breakpoint-down(xl) {
      @include font-height(30, 42);
      margin-bottom: toRem(48) !important;
    }

    @include breakpoint-down(lg) {
      @include font-height(28, 42);
    }

    @include breakpoint-down(md) {
      @include font-height(22, 40);
    }

    @include breakpoint-down(sm) {
      @include font-height(21, 38);
    }

    @include breakpoint-down(xs) {
      @include font-height(18, 32);
      margin-bottom: toRem(45) !important;
    }
  }
}
</style>
