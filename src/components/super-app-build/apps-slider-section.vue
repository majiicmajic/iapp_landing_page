<template>
  <div class="app-slider-section">
    <div class="container px-0">
      <!-- INTRO COLUMN  -->
      <div class="intro-column index-99">
        <!-- TITLE TEXT  -->
        <div class="intro-title-text">These are some of iApp best lists</div>
      </div>

      <div class="row mx-auto">
        <div class="col-12 col-md-11 mx-auto">
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
  </div>
</template>

<script>
import perksBlock from "@/components/home-build/perks-block";

export default {
  name: "appSliderSection",

  components: {
    perksBlock,
  },
};
</script>

<style lang="scss" scoped>
.app-slider-section {
  padding: toRem(145) 0;

  .intro-column {
    .intro-title-text {
      width: 80%;
    }
  }
}
</style>
