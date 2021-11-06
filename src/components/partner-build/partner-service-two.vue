<template>
  <div class="partner-service-two">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- PARTNER SERVICE CARD -->
      <div class="partner-service-card w-100">
        <!-- TITLE TEXT -->
        <div
          class="title-text brand-white font-weight-600"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          It’s more easier and faster to reach more customers with iEat.
        </div>

        <!-- DESCRIPTION -->
        <div
          class="description brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          iEat makes the flow more easier and faster to give people the
          enablement to order for food directly from the super app with iEat, so
          if you are a food seller and you would like to reach more customers
          with that delicious meal of yours, then now is your time to start
          converting more sales to your business goal, get started with iEat to
          begin.
        </div>

        <a
          href="#"
          class="brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          >Get the super app</a
        >

        <img
          :src="staticImg('partner-service-two.png')"
          alt=""
          class="partner-service-img"
        />

        <img
          :src="staticImg('partner-service-shadow.png')"
          alt=""
          class="partner-service-shadow"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partnerServiceOne",
};
</script>

<style lang="scss" scoped>
.partner-service-two {
  padding: toRem(140) 0 toRem(110);

  .partner-service-card {
    position: relative;
    height: toRem(375);
    overflow: hidden;
    padding: toRem(20);
    margin: auto 0;

    .title-text {
      @include font-height(45, 52);
      margin-bottom: toRem(25);
      position: relative;
      z-index: 1;
      width: 62%;

      @include breakpoint-down(xl) {
        @include font-height(38, 46);
        width: 68%;
      }

      @include breakpoint-down(lg) {
        @include font-height(32, 38);
        width: 70%;
      }

      @include breakpoint-down(sm) {
        @include font-height(25, 34);
        width: 85%;
      }

      @include breakpoint-down(xs) {
        @include font-height(18, 28);
        margin-bottom: toRem(18);
        width: 98%;
      }
    }

    .description {
      @include font-height(18.5, 27);
      margin-bottom: toRem(25);
      position: relative;
      z-index: 1;
      width: 60%;

      @include breakpoint-down(xl) {
        @include font-height(17, 27);
        width: 63%;
      }

      @include breakpoint-down(lg) {
        @include font-height(15.5, 26);
        width: 65%;
      }

      @include breakpoint-down(sm) {
        @include font-height(15, 25);
        width: 80%;
      }

      @include breakpoint-down(xs) {
        @include font-height(14, 24);
        margin-bottom: toRem(15);
        width: 94%;
      }
    }

    a {
      @include font-height(16, 22);
      position: relative;
      z-index: 1;

      @include breakpoint-down(xl) {
        @include font-height(15, 21);
      }

      &:hover {
        color: $brand-red !important;
      }
    }

    .partner-service-shadow {
      position: absolute;
      top: 0;
      right: 3.5%;

      @include breakpoint-down(xl) {
        right: 4.5%;
        height: 100%;
      }

      @include breakpoint-down(sm) {
        right: -5%;
      }
    }

    .partner-service-img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
