<template>
  <div class="partner-service-one">
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
          Do more and earn with iRide as a driver.
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
          With iRide we’ve got you a bundle of benefits that will help your
          business idea succeed, be it driving within the city or driving
          outside the city or perharps you’ve got spare bus, hilux or truck you
          would like to give for chatter from state to state?
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
          :src="staticImg('partner-service-one.png')"
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
.partner-service-one {
  padding: toRem(140) 0 toRem(110);

  @include breakpoint-down(xl) {
    padding: toRem(140) 0 toRem(60);
  }

  @include breakpoint-down(md) {
    padding: toRem(140) 0 toRem(20);
  }

  .partner-service-card {
    position: relative;
    height: toRem(375);
    overflow: hidden;
    padding: toRem(20);
    margin: auto 0;

    .title-text {
      @include font-height(48, 56);
      margin-bottom: toRem(30);
      position: relative;
      z-index: 1;
      width: 45%;

      @include breakpoint-down(xl) {
        @include font-height(42, 50);
        width: 50%;
      }

      @include breakpoint-down(lg) {
        @include font-height(36, 42);
        width: 50%;
      }

      @include breakpoint-down(md) {
        padding-top: toRem(30);
        @include font-height(30, 38);
        width: 55%;
      }

      @include breakpoint-down(sm) {
        padding-top: toRem(20);
        @include font-height(25, 32);
        width: 70%;
      }

      @include breakpoint-down(xs) {
        padding-top: toRem(15);
        @include font-height(22, 28);
        width: 80%;
      }
    }

    .description {
      @include font-height(19, 27);
      margin-bottom: toRem(25);
      position: relative;
      z-index: 1;
      width: 54%;

      @include breakpoint-down(xl) {
        @include font-height(17, 27);
        width: 55%;
      }

      @include breakpoint-down(lg) {
        @include font-height(16, 26);
        width: 56%;
      }

      @include breakpoint-down(sm) {
        @include font-height(15.5, 26);
        width: 75%;
      }

      @include breakpoint-down(sm) {
        @include font-height(15, 25);
        width: 94%;
      }
    }

    a {
      position: relative;
      z-index: 1;
      @include font-height(16, 22);

      @include breakpoint-down(xl) {
        @include font-height(15, 21);
      }

      @include breakpoint-down(xs) {
        @include font-height(14.5, 19);
      }

      &:hover {
        color: $brand-red !important;
      }
    }

    .partner-service-shadow {
      position: absolute;
      top: 0;
      right: 20%;

      @include breakpoint-down(xl) {
        right: 25%;
      }

      @include breakpoint-down(lg) {
        right: 30%;
      }

      @include breakpoint-down(md) {
        width: 82%;
        right: 20%;
        height: 100%;
      }

      @include breakpoint-down(sm) {
        width: 88%;
        right: 13%;
      }

      @include breakpoint-down(xs) {
        width: 84%;
        right: 25%;
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
