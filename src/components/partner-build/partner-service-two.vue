<template>
  <div class="partner-service-two">
    <div class="container px-0">
      <!-- PARTNER SERVICE CARD -->
      <div class="partner-service-card w-100">
        <!-- TITLE TEXT -->
        <div class="title-text brand-white font-weight-600">
          It’s more easier and faster to reach more customers with iEat.
        </div>

        <!-- DESCRIPTION -->
        <div class="description brand-white">
          iEat makes the flow more easier and faster to give people the
          enablement to order for food directly from the super app with iEat, so
          if you are a food seller and you would like to reach more customers
          with that delicious meal of yours, then now is your time to start
          converting more sales to your business goal, get started with iEat to
          begin.
        </div>

        <a href="#" class="brand-white">Get the super app</a>

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
    }

    .description {
      @include font-height(18.5, 27);
      margin-bottom: toRem(25);
      position: relative;
      z-index: 1;
      width: 60%;
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
      right: 3.5%;
    }

    .partner-service-img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
