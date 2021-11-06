<template>
  <div class="values-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- INTRO COLUMN  -->
      <div class="intro-column index-99">
        <!-- TITLE TEXT  -->
        <div
          class="intro-title-text"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Our Core Values
        </div>
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
            <img :src="staticImg('value-one.png')" alt="" class="img-one" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Be a part of the solution
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              We are part of the visionaires that dominates around accurate
              solutions.
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
            <img :src="staticImg('value-two.png')" alt="" class="img-two" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Quick but NOT in a hurry
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              We make life easier by giving you quick access to all, in one
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
            <img :src="staticImg('value-three.png')" alt="" class="img-three" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Channel positivity
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              No matter your previous experiences, with iApp all you will get is
              positivity.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "valuesSection",
};
</script>

<style lang="scss" scoped>
.values-section {
  padding: toRem(80) 0;

  .intro-column {
    margin-bottom: toRem(30);
  }

  .img-one {
    @include square-shape(160);
  }

  .img-two {
    @include square-shape(160);
  }

  .img-three {
    @include square-shape(170);
  }
}
</style>
