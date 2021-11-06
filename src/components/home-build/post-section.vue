<template>
  <section class="post-section mgb--40">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- TOP ROW  -->
      <div
        class="top-title-row"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="120"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="title-text brand-white text-capitalize">
          Updates from our super app team
        </div>

        <router-link to class="view-link smooth-transition"
          >View All</router-link
        >
      </div>

      <!-- POST ROW  -->
      <div class="post-row">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <post-card image="post-one.png" />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <post-card image="post-two.png" />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <post-card image="post-three.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import postCard from "@/components/home-build/post-card";

export default {
  name: "postSection",

  components: {
    postCard,
  },
};
</script>

<style lang="scss" scoped>
.post-section {
  padding: toRem(140) 0;

  @include breakpoint-down(sm) {
    padding-top: toRem(80);
  }

  .post-row {
    @include flex-row-between-nowrap;
    margin-top: toRem(40);
  }
}
</style>
