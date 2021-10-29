<template>
  <div class="partner-service-one">
    <div class="container px-0">
      <!-- PARTNER SERVICE CARD -->
      <div class="partner-service-card w-100">
        <!-- TITLE TEXT -->
        <div class="title-text brand-white font-weight-600">
          Do more and earn with iRide as a driver.
        </div>

        <!-- DESCRIPTION -->
        <div class="description brand-white">
          With iRide we’ve got you a bundle of benefits that will help your
          business idea succeed, be it driving within the city or driving
          outside the city or perharps you’ve got spare bus, hilux or truck you
          would like to give for chatter from state to state?
        </div>

        <a href="#" class="brand-white">Get the super app</a>

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
    }

    .description {
      @include font-height(19, 27);
      margin-bottom: toRem(25);
      position: relative;
      z-index: 1;
      width: 54%;
    }

    a {
      @include font-height(16, 22);

      &:hover {
        color: $brand-red !important;
      }
    }

    .partner-service-shadow {
      position: absolute;
      top: 0;
      right: 20%;
    }

    .partner-service-img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
