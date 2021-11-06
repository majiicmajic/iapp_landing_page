<template>
  <div class="blog-header">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- PAGE TITLE -->
      <div
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="page-title brand-white font-weight-700 text-center">
          What’s trending on iApp?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogHeader",
};
</script>

<style lang="scss" scoped>
.blog-header {
  .page-title {
    margin: 26vh 0 toRem(120);
    @include font-height(54, 66);
    width: 40%;

    @include breakpoint-down(xl) {
      @include font-height(50, 66);
      margin: 30vh 0 toRem(110);
      width: 50%;
    }

    @include breakpoint-down(lg) {
      @include font-height(42, 60);
      margin: 26vh 0 toRem(88);
    }

    @include breakpoint-down(md) {
      @include font-height(32, 42);
      margin: 24vh 0 toRem(80);
      width: 70%;
    }

    @include breakpoint-down(sm) {
      @include font-height(30, 42);
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(26, 36);
    }
  }
}
</style>
