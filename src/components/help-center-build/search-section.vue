<template>
  <div class="search-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white font-weight-700"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Most-Searched Issues
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iRide',
              description: 'The driver didn’t arrive on time, can I cancel?',
            }"
          />
        </div>

        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iDrug',
              description: 'How long will the drugs take to arrive?',
            }"
          />
        </div>

        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iEat',
              description: 'How long will the drugs take to arrive?',
            }"
          />
        </div>

        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iRide',
              description: 'How long will the drugs take to arrive?',
            }"
          />
        </div>

        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iRide',
              description: 'How long will the drugs take to arrive?',
            }"
          />
        </div>

        <div class="col-12 col-md-6">
          <search-card
            :search="{
              icon: 'icon-iChat',
              description: 'How long will the drugs take to arrive?',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchCard from "@/components/help-center-build/search-card";

export default {
  name: "searchSection",

  components: {
    searchCard,
  },
};
</script>

<style lang="scss" scoped>
.search-section {
  margin-bottom: toRem(100);

  @include breakpoint-down(md) {
    margin-bottom: toRem(60);
  }

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);

    @include breakpoint-down(xl) {
      @include font-height(28, 40);
      margin-bottom: toRem(45);
    }

    @include breakpoint-down(lg) {
      @include font-height(25, 38);
      margin-bottom: toRem(42);
    }

    @include breakpoint-down(md) {
      @include font-height(22, 36);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(xs) {
      @include font-height(20, 32);
      margin-bottom: toRem(36);
    }
  }
}
</style>
