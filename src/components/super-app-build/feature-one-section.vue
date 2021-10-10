<template>
  <div class="feature-one-section">
    <div class="container px-0">
      <!-- INTRO COLUMN  -->
      <div class="intro-column index-99">
        <!-- TITLE TEXT  -->
        <div class="intro-title-text">We’re moving the world with iRide</div>
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <div class="feature-card">
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
          <div class="feature-card">
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
          <div class="feature-card">
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

  .intro-column {
    margin-bottom: toRem(30);
  }

  .img-one {
    @include square-shape(150);
  }

  .img-two {
    @include rectangle-shape(240, 155);
  }

  .img-three {
    @include square-shape(170);
  }
}
</style>
