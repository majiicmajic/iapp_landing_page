<template>
  <div class="search-section">
    <div class="container px-0">
      <div class="title-text brand-white font-weight-700">
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

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);
  }
}
</style>
