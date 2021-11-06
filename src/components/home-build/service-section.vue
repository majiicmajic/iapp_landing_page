<template>
  <section
    class="service-section w-100 mx-auto position-relative brand-white-bg"
  >
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <!-- INTRO COLUMN  -->
    <div
      class="intro-column index-99"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <!-- META TEXT  -->
      <div class="intro-meta-text">WHO WE ARE</div>

      <!-- TITLE TEXT  -->
      <div class="intro-title-text">We’re iApp, the drivers of change</div>
    </div>

    <!-- SERVICES ROW  -->
    <div class="services-row">
      <div class="container px-3 px-sm-4 px-xl-0">
        <div class="row">
          <!-- SERVICE ONE -->
          <div
            class="col-12 col-sm-6 col-md-3"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="service-card service-one">
              <!-- SERVICE IMAGE -->
              <img :src="staticImg('service-one.png')" alt="" />

              <!-- SERVICE TITLE -->
              <div class="service-title text-center font-weight-700">
                Change in the App
              </div>

              <!-- SERVICE DESCRIPTION -->
              <div class="service-description text-center">
                You can do a lot with just one super app, sounds fun?
              </div>
            </div>
          </div>

          <!-- SERVICE TWO -->
          <div
            class="col-12 col-sm-6 col-md-3"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="130"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="service-card service-two">
              <!-- SERVICE IMAGE -->
              <img :src="staticImg('service-two.png')" alt="" />

              <!-- SERVICE TITLE -->
              <div class="service-title text-center font-weight-700">
                Reach out anytime
              </div>

              <!-- SERVICE DESCRIPTION -->
              <div class="service-description text-center">
                Be it social, music, lodging, you are covered anytime.
              </div>
            </div>
          </div>

          <!-- SERVICE THREE -->
          <div
            class="col-12 col-sm-6 col-md-3"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="140"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="service-card service-three">
              <!-- SERVICE IMAGE -->
              <img :src="staticImg('service-three.png')" alt="" />

              <!-- SERVICE TITLE -->
              <div class="service-title text-center font-weight-700">
                Delivery is swift
              </div>

              <!-- SERVICE DESCRIPTION -->
              <div class="service-description text-center">
                We ensure all our app users get their delivery on time.
              </div>
            </div>
          </div>

          <!-- SERVICE FOUR -->
          <div
            class="col-12 col-sm-6 col-md-3"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="service-card service-four">
              <!-- SERVICE IMAGE -->
              <img :src="staticImg('service-four.png')" alt="" />

              <!-- SERVICE TITLE -->
              <div class="service-title text-center font-weight-700">
                Fast and responsive
              </div>

              <!-- SERVICE DESCRIPTION -->
              <div class="service-description text-center">
                All services on iApp is designed for your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "serviceSection",
};
</script>

<style lang="scss" scoped>
.service-section {
  @include flex-column-center;

  .curve-top {
    @include breakpoint-down(md) {
      margin-top: toRem(-130);
    }

    @include breakpoint-down(sm) {
      margin-top: toRem(-160);
    }
  }

  .intro-column {
    .intro-title-text {
      width: 30%;

      @include breakpoint-down(xl) {
        width: 35%;
      }

      @include breakpoint-down(lg) {
        width: 45%;
      }

      @include breakpoint-down(sm) {
        width: 65%;
      }

      @include breakpoint-down(xs) {
        width: 85%;
      }
    }
  }

  .services-row {
    margin-top: toRem(115);
    padding-bottom: toRem(125);

    @include breakpoint-down(xl) {
      padding-bottom: toRem(100);
    }
  }

  .service-one {
    img {
      @include rectangle-shape(160, 190);
      top: toRem(-110);

      @include breakpoint-down(xl) {
        @include rectangle-shape(120, 150);
      }

      @include breakpoint-down(lg) {
        top: toRem(-90);
      }

      @include breakpoint-down(md) {
        @include rectangle-shape(110, 130);
        top: toRem(-70);
      }
    }
  }

  .service-two {
    img {
      @include rectangle-shape(220, 210);

      @include breakpoint-down(xl) {
        @include rectangle-shape(180, 170);
      }

      @include breakpoint-down(lg) {
        top: toRem(-100);
      }

      @include breakpoint-down(md) {
        @include rectangle-shape(145, 140);
        top: toRem(-70);
      }
    }
  }

  .service-three {
    img {
      @include rectangle-shape(215, 210);

      @include breakpoint-down(xl) {
        @include rectangle-shape(175, 170);
      }

      @include breakpoint-down(lg) {
        top: toRem(-100);
      }

      @include breakpoint-down(md) {
        @include rectangle-shape(145, 140);
        top: toRem(-70);
      }
    }
  }

  .service-four {
    img {
      @include rectangle-shape(190, 215);

      @include breakpoint-down(xl) {
        @include rectangle-shape(150, 175);
      }

      @include breakpoint-down(lg) {
        top: toRem(-85);
      }

      @include breakpoint-down(md) {
        @include rectangle-shape(145, 145);
        top: toRem(-70);
      }
    }
  }
}
</style>
