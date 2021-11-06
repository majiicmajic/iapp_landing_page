<template>
  <div class="quick-support-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="title-text brand-white font-weight-700"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Quick Support
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <support-card
            :support="{
              icon: 'icon-phone',
              header_text: 'Call Us',
              description: '+233 57 580 6379',
              meta_text: ['Monday - Saturday', '9am - 6pm'],
            }"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <support-card
            :support="{
              icon: 'icon-email-letter',
              header_text: 'Email Us',
              description: 'impactamillionlives2021@gmail.com',
              meta_text: ['Always Available'],
            }"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <support-card
            :support="{
              icon: 'icon-pen-edit',
              header_text: 'Write Us',
              description: 'Directly here',
              meta_text: ['Always Available'],
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import supportCard from "@/components/help-center-build/support-card";

export default {
  name: "quickSupportSection",

  components: {
    supportCard,
  },
};
</script>

<style lang="scss" scoped>
.quick-support-section {
  margin-bottom: toRem(120);

  @include breakpoint-down(lg) {
    margin-bottom: toRem(100);
  }

  @include breakpoint-down(md) {
    margin-bottom: toRem(80);
  }

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);

    @include breakpoint-down(xl) {
      @include font-height(30, 46);
      margin-bottom: toRem(50);
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
