<template>
  <div class="feature-section">
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
        <div class="intro-title-text">Why partner with us</div>
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
            <img :src="staticImg('partner-one.png')" alt="" class="img-one" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              We Value Businesses
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              It’s our goal to support all business ideas and to value every
              business success.
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
            <img :src="staticImg('partner-two.png')" alt="" class="img-two" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              We Are The Change
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              The change to the digital world of all in easy solutions is in the
              super app.
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
              :src="staticImg('partner-three.png')"
              alt=""
              class="img-three"
            />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Super Support Assured
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              We are always available with our 24/7 support to meet your needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partnerFeatureSection",
};
</script>

<style lang="scss" scoped>
.feature-section {
  padding: toRem(80) 0;

  @include breakpoint-down(md) {
    padding: toRem(70) 0;
    margin-bottom: toRem(-100);
  }

  .intro-column {
    margin-bottom: toRem(30);

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }
  }

  .img-one {
    @include rectangle-shape(270, 165);
  }

  .img-two {
    @include rectangle-shape(240, 155);
  }

  .img-three {
    @include rectangle-shape(190, 170);
  }
}
</style>
