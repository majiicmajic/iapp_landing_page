<template>
  <div class="location-guide brand-white">
    <div class="guide-title text-center font-weight-700 smooth-animation">
      {{ guide.title }}
    </div>

    <!-- DESCRIPTION  -->
    <div class="guide-description text-center smooth-animation">
      {{ guide.description }}
    </div>

    <!-- IMAGE  -->
    <img
      :src="staticImg(guide.image)"
      :alt="guide.title"
      class="h-auto smooth-animation"
      :class="guide.title === 'Worldwide' ? 'world-img' : 'country-img'"
    />
  </div>
</template>

<script>
export default {
  name: "locationGuide",

  props: {
    guide: {
      type: Object,
      default: () => ({
        title: "Worldwide",
        description:
          "It’s a matter of time, iRide is coming to make your transportation easy and swift... keep surfing.",
        image: "worldwide.png",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.location-guide {
  @include flex-column-center;
  padding: toRem(40) 0 0;

  @include breakpoint-down(lg) {
    padding: toRem(60) 0 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(30) 0 0;
  }

  .guide-title {
    @include font-height(42, 52);
    margin-bottom: toRem(40);

    @include breakpoint-down(lg) {
      @include font-height(30, 40);
      margin-bottom: toRem(25);
    }

    @include breakpoint-down(md) {
      @include font-height(25, 35);
    }

    @include breakpoint-down(sm) {
      @include font-height(19, 30);
    }
  }

  .guide-description {
    @include font-height(19, 25);
    margin-bottom: toRem(80);
    width: 50%;

    @include breakpoint-down(md) {
      @include font-height(16.6, 24);
      margin-bottom: toRem(70);
      width: 60%;
    }

    @include breakpoint-down(md) {
      @include font-height(15.75, 23);
      margin-bottom: toRem(75);
    }

    @include breakpoint-down(sm) {
      @include font-height(14.5, 24);
      margin-bottom: toRem(65);
      width: 70%;
    }

    @include breakpoint-down(xs) {
      @include font-height(13.75, 23);
      margin-bottom: toRem(70);
      width: 89%;
    }
  }

  .world-img {
    width: 95%;
    margin-top: toRem(-130);

    @include breakpoint-down(xs) {
      margin-top: toRem(-90);
    }
  }

  .country-img {
    margin-top: toRem(40);
    width: 70%;

    @include breakpoint-down(sm) {
      margin-top: toRem(14);
      width: 85%;
    }
  }
}
</style>
