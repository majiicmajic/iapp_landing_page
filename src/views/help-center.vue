<template>
  <div>
    <!-- HELP HEADER -->
    <help-header />

    <!-- QUICK SUPPORT SECTION -->
    <quick-support-section />

    <!-- SEARCH SECTION -->
    <search-section />

    <!-- FAQ SECTION -->
    <faq-section />

    <!-- SUPPORT TEXT -->
    <div class="container px-0 mgb-50">
      <div class="more-text brand-white font-weight-500">
        Still have questions? Contact us via our
        <a href="" class="brand-red link-no-underline">support center</a>
        <br />
        or email us at impactamillionlives2021@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
import helpHeader from "@/components/help-center-build/help-header";
import quickSupportSection from "@/components/help-center-build/quick-support-section";
import searchSection from "@/components/help-center-build/search-section";
import faqSection from "@/components/help-center-build/faq-section";

export default {
  name: "helpCenter",

  components: {
    helpHeader,
    quickSupportSection,
    searchSection,
    faqSection,
  },
};
</script>

<style lang="scss" scoped>
.more-text,
a {
  @include font-height(26, 42);
}
</style>
