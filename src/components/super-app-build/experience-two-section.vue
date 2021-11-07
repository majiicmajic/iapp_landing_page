<template>
  <div class="experience-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div class="row d-flex justify-content-between">
        <!-- CONTENT  -->
        <div class="col-12 col-md-5">
          <div class="content-experience">
            <!-- TITLE TEXT  -->
            <div
              class="title-text"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Getting delicious food is easier with iEats.
            </div>

            <!-- DESCRIPTION -->
            <div
              class="description"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="120"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              iEats is one of the awesome product from iApp that gives you the
              excitement in ordering delicious foods in a click of a button.
            </div>

            <!-- CALL TO ACTION  -->
            <a
              href=""
              class="smooth-transition"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="130"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              >Foods at a click of a button</a
            >
          </div>
        </div>

        <!-- IMAGE EXPERIENCE  -->
        <div class="col-12 col-md-6">
          <div
            class="image-experience position-relative h-100"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <!-- VIDEO COVER  -->
            <div class="bg-cover brand-red-dark-bg rounded-20"></div>

            <div class="section-wrapper rounded-20 index-1 overflow-hidden">
              <div class="position-relative h-100 h-100">
                <img :src="staticImg('experience-two.png')" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experienceTwoSection",
};
</script>

<style lang="scss" scoped>
.experience-section {
  padding: toRem(110) 0;

  @include breakpoint-down(md) {
    padding: toRem(70) 0;
  }

  @include breakpoint-down(xs) {
    padding: 0 0 toRem(60);
  }

  .content-experience {
    @include breakpoint-down(md) {
      margin-top: toRem(-50);
      margin-bottom: toRem(100);
    }
  }

  a {
    &:hover {
      color: $brand-red;
    }
  }
}
</style>
