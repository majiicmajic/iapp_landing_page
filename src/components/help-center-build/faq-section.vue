<template>
  <div class="faq-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white font-weight-700"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Frequently Asked Questions
      </div>

      <div class="row">
        <div class="col-12">
          <faq-card />
        </div>

        <div class="col-12">
          <faq-card />
        </div>

        <div class="col-12">
          <faq-card />
        </div>

        <div class="col-12">
          <faq-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqCard from "@/components/help-center-build/faq-card";

export default {
  name: "faqSection",

  components: {
    faqCard,
  },
};
</script>

<style lang="scss" scoped>
.faq-section {
  margin-bottom: toRem(90);

  @include breakpoint-down(xl) {
    margin-bottom: toRem(40);
  }

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);

    @include breakpoint-down(xl) {
      @include font-height(27, 40);
      margin-bottom: toRem(45);
    }

    @include breakpoint-down(lg) {
      @include font-height(22, 38);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(md) {
      @include font-height(20, 36);
    }

    @include breakpoint-down(xs) {
      @include font-height(18, 32);
      margin-bottom: toRem(36);
    }
  }
}
</style>
