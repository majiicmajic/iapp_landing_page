<template>
  <div class="experience-section">
    <div class="container px-0">
      <div class="row d-flex justify-content-between">
        <!-- IMAGE EXPERIENCE  -->
        <div class="col-12 col-md-6">
          <div class="image-experience position-relative h-100">
            <!-- VIDEO COVER  -->
            <div class="bg-cover brand-red-dark-bg rounded-20"></div>

            <div class="section-wrapper rounded-20 index-1 overflow-hidden">
              <div class="position-relative h-100 h-100">
                <img :src="staticImg('experience-one.png')" alt="" />
              </div>
            </div>
          </div>
        </div>

        <!-- CONTENT  -->
        <div class="col-12 col-md-5">
          <div class="content-experience">
            <!-- TITLE TEXT  -->
            <div class="title-text">
              The experience with iRide is super awesome.
            </div>

            <!-- DESCRIPTION -->
            <div class="description">
              Enjoy your trip around the city with our fun to be drivers, that
              drives to give you joy on the go, the experience is always super.
              Check iRide.
            </div>

            <!-- CALL TO ACTION  -->
            <a href="" class="smooth-transition">Start booking for rides</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experienceSection",
};
</script>

<style lang="scss" scoped>
.experience-section {
  padding: toRem(70) 0 toRem(110);

  a {
    &:hover {
      color: $brand-red;
    }
  }
}
</style>
