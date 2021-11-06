<template>
  <div class="partners-extensions">
    <div
      class="container px-3 px-sm-4 px-xl-0 d-flex flex-column align-items-center"
    >
      <div
        class="title-text brand-white text-center font-weight-700 mgb-58"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="120"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        You can be our partner as well for the followings:
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <post-card image="extension-one.png" :show_bottom="false" />
        </div>

        <div class="col-12 col-md-4">
          <post-card image="extension-two.png" :show_bottom="false" />
        </div>

        <div class="col-12 col-md-4">
          <post-card image="extension-three.png" :show_bottom="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postCard from "@/components/home-build/post-card";

export default {
  name: "partnersExtensions",

  components: {
    postCard,
  },
};
</script>

<style lang="scss" scoped>
.partners-extensions {
  padding: toRem(50) 0 toRem(80);

  @include breakpoint-down(md) {
    padding: toRem(50) 0 toRem(50);
  }

  @include breakpoint-down(sm) {
    padding: toRem(10) 0 toRem(30);
  }

  .title-text {
    @include font-height(42, 50);
    width: 60%;

    @include breakpoint-down(xl) {
      @include font-height(34, 42);
    }

    @include breakpoint-down(lg) {
      @include font-height(30, 38);
    }

    @include breakpoint-down(sm) {
      @include font-height(26, 32);
      margin-bottom: toRem(44) !important;
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(19, 28);
      margin-bottom: toRem(40) !important;
      width: 87%;
    }
  }
}
</style>
