<template>
  <section
    class="location-section w-100 mx-auto position-relative brand-red-dark-bg"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <!-- INTRO COLUMN  -->
    <div
      class="intro-column index-99"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <!-- TITLE TEXT  -->
      <div class="intro-title-text">Moving across the Nation with iRide</div>
    </div>

    <div class="container px-2 px-sm-4 px-xl-0 mx-auto">
      <div
        class="row mx-auto"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
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
      {
        title: "Qatar",
        description:
          "iRide is available for your movement within cities in Qatar... keep riding.",
        image: "qatar.png",
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
  padding: toRem(100) 0 0;
  @include flex-column-center;

  @include breakpoint-down(md) {
    padding: toRem(80) 0 0;
  }

  .curve-top {
    @include breakpoint-down(md) {
      margin-top: toRem(-90);
    }

    @include breakpoint-down(sm) {
      margin-top: toRem(-160);
    }

    @include breakpoint-down(xs) {
      display: none;
    }
  }

  .intro-column {
    @include breakpoint-down(xs) {
      margin-top: toRem(-140);
      background: $brand-black;
      border-radius: 0 0 toRem(50) toRem(50);
      margin-bottom: toRem(30);
    }

    .intro-title-text {
      width: 40%;

      @include breakpoint-down(lg) {
        width: 60%;
      }

      @include breakpoint-down(md) {
        width: 80%;
      }

      @include breakpoint-down(sm) {
        width: 90%;
      }
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

    @include breakpoint-down(md) {
      @include square-shape(38);
    }

    @include breakpoint-down(sm) {
      @include square-shape(32);
    }

    &:hover {
      background: $brand-red-lighter;
    }

    .wrapper {
      @include flex-column-center;

      .icon {
        font-size: toRem(18);
        color: $brand-grey-dark;

        @include breakpoint-down(md) {
          font-size: toRem(16);
        }

        @include breakpoint-down(sm) {
          font-size: toRem(14);
        }
      }
    }
  }

  .left-nav {
    left: 10%;

    @include breakpoint-down(sm) {
      left: 5%;
    }

    @include breakpoint-down(xs) {
      top: toRem(35);
      left: 2.5%;
    }
  }

  .right-nav {
    right: 10%;

    @include breakpoint-down(sm) {
      right: 5%;
    }

    @include breakpoint-down(xs) {
      top: toRem(35);
      right: 2.5%;
    }
  }
}
</style>
