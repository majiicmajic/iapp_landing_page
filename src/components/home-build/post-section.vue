<template>
  <section class="post-section mgb--40">
    <div class="container px-0">
      <!-- TOP ROW  -->
      <div class="top-title-row">
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

  .post-row {
    @include flex-row-between-nowrap;
    margin-top: toRem(40);
  }
}
</style>
