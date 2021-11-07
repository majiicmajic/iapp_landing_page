<template>
  <div class="feature-two-section">
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
        <div class="intro-title-text">Ordering food is easy with iApp</div>
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
            <img :src="staticImg('launch-icon.png')" alt="" class="img-one" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Launch your super app
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Open iApp and navigate to the apps section and click on iEats.
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
            <img :src="staticImg('vendor-icon.png')" alt="" class="img-two" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Choose a food vendor
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Select a vendor from iEats and choose the food of your choice.
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
            <img
              :src="staticImg('delivery-icon.png')"
              alt=""
              class="img-three"
            />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Quick delivery is sure
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Once you place your order, input your address and expect delivery
              soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featureTwoSection",
};
</script>

<style lang="scss" scoped>
.feature-two-section {
  padding: toRem(80) 0;

  @include breakpoint-down(md) {
    padding: toRem(40) 0;
  }

  .intro-column {
    margin-bottom: toRem(30);

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }

    @include breakpoint-down(sm) {
      margin-bottom: toRem(-20);
    }
  }

  .img-one {
    @include square-shape(155);

    @include breakpoint-down(md) {
      @include square-shape(135);
    }

    @include breakpoint-down(sm) {
      @include square-shape(125);
    }
  }

  .img-two {
    @include rectangle-shape(230, 155);

    @include breakpoint-down(md) {
      @include rectangle-shape(195, 135);
    }

    @include breakpoint-down(sm) {
      @include rectangle-shape(180, 120);
    }
  }

  .img-three {
    @include square-shape(170);

    @include breakpoint-down(md) {
      @include square-shape(150);
    }

    @include breakpoint-down(sm) {
      @include square-shape(130);
    }
  }
}
</style>
