<template>
  <div class="quick-support-section">
    <div class="container px-0">
      <div class="title-text brand-white font-weight-700">Quick Support</div>

      <div class="row">
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

  .title-text {
    margin-bottom: toRem(60);
    @include font-height(36, 50);
  }
}
</style>
