<template>
  <section class="perks-section w-100 mx-auto position-relative brand-white-bg">
    <!-- CURVE TOP  -->
    <div class="curve-top w-100 brand-black-bg"></div>

    <!-- INTRO COLUMN  -->
    <div
      class="intro-column index-99"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="120"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <!-- TITLE TEXT  -->
      <div class="intro-title-text">Perks of the super app</div>
    </div>

    <div class="container px-3 px-sm-4 px-xl-0 mx-auto">
      <div class="row mx-auto">
        <div
          class="col-12 col-md-11 mx-auto"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <!-- CAROUSEL  -->
          <carousel :autoplay="true" :nav="false" :items="1">
            <perks-block
              image="slide-one.png"
              title="Arrange to mingle with your pals!"
              description="iMingle makes it easier to meet new buddies, a lover, or even business partners."
            />
            <perks-block
              image="slide-two.png"
              title="Your easy go shopping experience."
              description="iMart makes it easy for you to go shopping right from your mobile device from iApp."
            />
            <perks-block
              image="slide-three.png"
              title="Need a hand? iHirePipu got you."
              description="You can begin your career journey now by hiring someone to work with you."
            />
            <perks-block
              image="slide-four.png"
              title="Ohh yeah, you can surf for autos with iApp."
              description="Need a car for hire, purchase, rentals or even for swap? iAutos is available for you."
            />
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import perksBlock from "@/components/home-build/perks-block";

export default {
  name: "perksSection",

  components: {
    perksBlock,
  },
};
</script>

<style lang="scss" scoped>
.perks-section {
  padding: toRem(180) 0 toRem(50);
  @include flex-column-center;

  .curve-top {
    @include breakpoint-down(md) {
      margin-top: toRem(-50);
    }

    @include breakpoint-down(sm) {
      // margin-top: toRem(-160);
    }
  }

  .intro-column {
    .intro-title-text {
      width: 80%;
    }
  }
}
</style>
