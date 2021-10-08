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

  .guide-title {
    @include font-height(42, 52);
    margin-bottom: toRem(40);
  }

  .guide-description {
    @include font-height(19, 25);
    margin-bottom: toRem(80);
    width: 50%;
  }

  .world-img {
    width: 95%;
    margin-top: toRem(-130);
  }

  .country-img {
    margin-top: toRem(40);
    width: 70%;
  }
}
</style>
