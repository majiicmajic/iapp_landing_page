<template>
  <section
    class="location-section w-100 mx-auto position-relative brand-red-dark-bg"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <!-- INTRO COLUMN  -->
    <div class="intro-column index-99">
      <!-- TITLE TEXT  -->
      <div class="intro-title-text">Moving across the Nation with iRide</div>
    </div>

    <div class="container px-0 mx-auto">
      <div class="row mx-auto">
        <div class="col-12 col-md-11 mx-auto position-relative">
          <!-- LOCATION NAV  -->
          <div
            class="location-nav left-nav"
            title="Previous"
            @click="prevSlide"
          >
            <div class="wrapper w-100 h-100 position-relative">
              <div class="icon icon-chevron-right rotate-180"></div>
            </div>
          </div>

          <div class="location-nav right-nav" title="Next" @click="nextSlide">
            <div class="wrapper w-100 h-100 position-relative">
              <div class="icon icon-chevron-right"></div>
            </div>
          </div>

          <!-- LOCATION GUIDE  -->
          <location-guide :guide="guides[current_index]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import locationGuide from "@/components/home-build/location-guide";

export default {
  name: "locationSection",

  components: {
    locationGuide,
  },

  data: () => ({
    current_index: 0,
    guides: [
      {
        title: "Worldwide",
        description:
          "It’s a matter of time, iRide is coming to make your transportation easy and swift... keep surfing.",
        image: "worldwide.png",
      },
      {
        title: "United Kingdom",
        description:
          "iRide is available for your movement within cities in United Kingdom... keep riding.",
        image: "united-kingdom.png",
      },
      {
        title: "Dubai, UAE",
        description:
          "iRide is available for your movement within cities in Dubai,UAE... keep riding.",
        image: "dubai.png",
      },
      {
        title: "Nigeria",
        description:
          "iRide is available for your movement within cities in Nigeria nation... keep riding.",
        image: "nigeria.png",
      },
      {
        title: "Ghana",
        description:
          "iRide is available for your movement within cities in Ghana... keep riding.",
        image: "ghana.png",
      },
    ],
  }),

  methods: {
    nextSlide() {
      this.current_index > 4
        ? (this.current_index = 0)
        : (this.current_index += 1);
    },

    prevSlide() {
      this.current_index < 0
        ? (this.current_index = 4)
        : (this.current_index -= 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.location-section {
  padding: toRem(130) 0 0;
  @include flex-column-center;

  .intro-column {
    .intro-title-text {
      width: 40%;
    }
  }

  .location-nav {
    @include square-shape(45);
    @include transition(0.4s);
    background: $brand-white;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    top: 15%;

    &:hover {
      background: $brand-red-lighter;
    }

    .wrapper {
      @include flex-column-center;

      .icon {
        font-size: toRem(18);
        color: $brand-grey-dark;
      }
    }
  }

  .left-nav {
    left: 10%;
  }

  .right-nav {
    right: 10%;
  }
}
</style>
