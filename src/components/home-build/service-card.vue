<template>
  <div class="service-card position-relative brand-red-light-bg rounded-20">
    <!-- SERVICE IMAGE -->
    <img v-lazy="staticImg('service-two.png')" alt="" />

    <!-- SERVICE TITLE -->
    <div class="service-title text-center font-weight-700">
      Change in the App
    </div>

    <!-- SERVICE DESCRIPTION -->
    <div class="service-description text-center">
      You can do a lot with just one super app, sounds fun?
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceCard",
};
</script>

<style lang="scss" scoped></style>
