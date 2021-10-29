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
                <img :src="staticImg('experience-three.png')" alt="" />
              </div>
            </div>
          </div>
        </div>

        <!-- CONTENT  -->
        <div class="col-12 col-md-5">
          <div class="content-experience">
            <!-- TITLE TEXT  -->
            <div class="title-text">
              The goal is to make everyone happy.
            </div>

            <!-- DESCRIPTION -->
            <div class="description">
              As the world keeps revolving around the digital world, we at iApp
              are here to give your business the insight needed to scale up your
              reach online.
            </div>

            <!-- CALL TO ACTION  -->
            <a href="" class="smooth-transition">Get the super app now!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partnetExperienceSection",
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
