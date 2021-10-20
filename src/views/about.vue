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
          <div class="container px-0 position-relative h-100">
            <div class="content index-99">
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

      .hero-title-text {
        @include font-height(58, 68);
        letter-spacing: 0.01em;
      }
    }
  }
}
</style>
