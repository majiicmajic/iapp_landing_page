<template>
  <div class="feature-one-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- INTRO COLUMN  -->
      <div
        class="intro-column index-99"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <!-- TITLE TEXT  -->
        <div class="intro-title-text">We’re moving the world with iRide</div>
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img :src="staticImg('safe-icon.png')" alt="" class="img-one" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Safe and secure trips
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              It’s safe to ride with iRide, be it the city or beyond, you are
              covered.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img :src="staticImg('certify-icon.png')" alt="" class="img-two" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Our drivers are certified
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              For the safety of all iRiders, all drivers on iRide have been
              verified and qualified.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img :src="staticImg('help-icon.png')" alt="" class="img-three" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Help is always available
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Need help with your trip, or you got a complaint? we are available
              to help.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featureOneSection",
};
</script>

<style lang="scss" scoped>
.feature-one-section {
  padding: toRem(80) 0;

  @include breakpoint-down(md) {
    padding: toRem(50) 0;
  }

  .intro-column {
    margin-bottom: toRem(30);

    @include breakpoint-down(md) {
      margin-bottom: toRem(10);
    }
  }

  .img-one {
    @include square-shape(150);

    @include breakpoint-down(xl) {
      @include square-shape(120);
    }

    @include breakpoint-down(md) {
      @include square-shape(100);
    }
  }

  .img-two {
    @include rectangle-shape(240, 155);

    @include breakpoint-down(xl) {
      @include rectangle-shape(180, 115);
    }

    @include breakpoint-down(md) {
      @include rectangle-shape(160, 105);
    }
  }

  .img-three {
    @include square-shape(170);

    @include breakpoint-down(xl) {
      @include square-shape(130);
    }

    @include breakpoint-down(md) {
      @include square-shape(100);
    }
  }
}
</style>
