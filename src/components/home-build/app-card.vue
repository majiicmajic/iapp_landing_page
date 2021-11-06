<template>
  <div class="app-card">
    <!-- APP IMAGE  -->
    <img :src="staticImg('i-ride.png')" alt="" class="app-image rounded-20" />

    <div class="info brand-white">
      <!-- TITLE  -->
      <div class="app-title font-weight-700">iRide</div>

      <!-- DESCRIPTION  -->
      <div class="app-description font-weight-500">
        Ready to move around the city or beyond, check iRide.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appCard",
};
</script>

<style lang="scss" scoped>
.app-card {
  @include flex-row-start-nowrap;
  margin-bottom: toRem(40);

  @include breakpoint-down(xl) {
    margin-bottom: toRem(30);
  }

  @include breakpoint-down(xs) {
    margin-bottom: toRem(15);
  }

  .app-image {
    position: relative;
    margin-right: toRem(20);
    @include rectangle-shape(240, 170);

    @include breakpoint-down(xl) {
      @include rectangle-shape(180, 120);
      margin-right: toRem(15);
    }

    @include breakpoint-down(xs) {
      @include rectangle-shape(150, 120);
      margin-right: toRem(10);
    }
  }

  .app-title {
    margin-bottom: toRem(21);
    @include font-height(23, 36);

    @include breakpoint-down(xl) {
      @include font-height(17, 28);
      margin-bottom: toRem(16);
    }

    @include breakpoint-down(sm) {
      @include font-height(15, 24);
      margin-bottom: toRem(13);
    }

    @include breakpoint-down(xs) {
      @include font-height(14, 22);
    }
  }

  .app-description {
    letter-spacing: 0.01em;
    @include font-height(17, 25);

    @include breakpoint-down(xl) {
      @include font-height(14, 21);
    }

    @include breakpoint-down(sm) {
      @include font-height(13, 19);
    }

    @include breakpoint-down(xs) {
      @include font-height(12, 18);
    }
  }
}
</style>
