<template>
  <div class="faq-section">
    <div class="container px-0">
      <div class="title-text brand-white font-weight-700">
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

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);
  }
}
</style>
