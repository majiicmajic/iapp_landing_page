<template>
  <div>
    <div class="hero-setup">
      <header>
        <div
          class="hero-layout full-height"
          :style="'background-image:url(' + hero + ')'"
        >
          <!-- OVERLAY COVER BOTTOM -->
          <div class="overlay-cover"></div>

          <!-- CONTENT  -->
          <div class="container px-3 px-sm-4 px-xl-0position-relative h-100">
            <div
              class="content index-99"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="hero-title-text brand-white">
                <p>Dedicated team, for your dedicated dream.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- STORY SECTION -->
    <story-section />

    <!-- VALUE SECTION -->
    <values-section />

    <!-- ABOUT SECTION -->
    <about-cta-section />
  </div>
</template>

<script>
import heroImg from "@/assets/static/about-hero.png";
import storySection from "@/components/about-build/story-section";
import valuesSection from "@/components/about-build/values-section";
import aboutCtaSection from "@/components/about-build/about-cta-section";

export default {
  name: "about",

  components: {
    storySection,
    valuesSection,
    aboutCtaSection,
  },

  data() {
    return {
      hero: heroImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-setup {
  .container {
    .content {
      width: 44%;
      margin-top: 9vh;

      @include breakpoint-down(lg) {
        width: 48%;
        margin-top: 7vh;
      }

      @include breakpoint-down(sm) {
        width: 65%;
      }

      @include breakpoint-down(xs) {
        width: 75%;
      }

      .hero-title-text {
        @include font-height(58, 68);
        letter-spacing: 0.01em;

        @include breakpoint-down(xl) {
          @include font-height(44, 57);
        }

        @include breakpoint-down(lg) {
          @include font-height(42, 54);
        }

        @include breakpoint-down(md) {
          @include font-height(38, 50);
        }

        @include breakpoint-down(sm) {
          @include font-height(36, 50);
        }

        @include breakpoint-down(xs) {
          @include font-height(29, 44);
        }
      }
    }
  }
}
</style>
