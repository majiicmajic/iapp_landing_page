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
          <div class="container px-3 px-sm-4 px-xl-0 position-relative h-100">
            <div
              class="content index-99"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="hero-title-text brand-white">
                <p>
                  Partnering with us is the best decision you need to improve
                  your business.
                </p>
              </div>

              <!-- CALL TO ACTION BUTTON  -->
              <button class="btn btn-primary hero-cta-btn">
                Become Our Partner
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- PARTNER EXPERIENCE -->
    <partner-experience-section />

    <!-- PARTNER FEATURES SECTION -->
    <partner-features-section />

    <!-- PARTNER CTA ONE -->
    <partner-cta-one />

    <!-- PARTNER SERVICE ONE -->
    <partner-service-one />

    <!-- PARTNER CTA TWO -->
    <partner-cta-two />

    <!-- PARTNER SERVICE TWO -->
    <partner-service-two />

    <!-- PARTNER EXTENSIONS -->
    <partner-extensions />

    <!-- PARTNER MAIN CTA -->
    <partner-main-cta />
  </div>
</template>

<script>
import heroImg from "@/assets/static/partner-hero.png";
import partnerExperienceSection from "@/components/partner-build/partner-experience-section";
import PartnerFeaturesSection from "@/components/partner-build/partner-features-section.vue";
import partnerCtaOne from "@/components/partner-build/partner-cta-one";
import partnerServiceOne from "@/components/partner-build/partner-service-one";
import partnerCtaTwo from "@/components/partner-build/partner-cta-two";
import partnerServiceTwo from "@/components/partner-build/partner-service-two";
import partnerExtensions from "@/components/partner-build/partner-extensions";
import partnerMainCta from "@/components/partner-build/partner-main-cta";

export default {
  name: "partners",

  components: {
    partnerExperienceSection,
    PartnerFeaturesSection,
    partnerCtaOne,
    partnerServiceOne,
    partnerCtaTwo,
    partnerServiceTwo,
    partnerExtensions,
    partnerMainCta,
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
      width: 50%;
      margin-top: 12vh;

      @include breakpoint-down(md) {
        width: 60%;
      }

      @include breakpoint-down(sm) {
        width: 70%;
      }

      @include breakpoint-down(xs) {
        margin-top: 9vh;
        width: 77%;
      }

      .hero-title-text {
        @include font-height(50, 62);
        letter-spacing: 0.01em;

        @include breakpoint-down(xl) {
          @include font-height(40, 55);
          letter-spacing: unset;
        }

        @include breakpoint-down(lg) {
          @include font-height(36, 44);
          font-weight: 600;
        }

        @include breakpoint-down(md) {
          @include font-height(33, 42);
        }

        @include breakpoint-down(sm) {
          @include font-height(31, 39);
        }

        @include breakpoint-down(xs) {
          @include font-height(22, 34);
        }
      }

      .btn {
        @include breakpoint-down(sm) {
          padding: toRem(8) toRem(40);
          font-size: toRem(15);
        }

        @include breakpoint-down(xs) {
          font-size: toRem(14);
        }
      }
    }
  }
}
</style>
