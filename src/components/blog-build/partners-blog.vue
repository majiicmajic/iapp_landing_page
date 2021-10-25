<template>
  <div class="partners-blog">
    <div class="container px-0">
      <div class="title-text brand-white text-center font-weight-700 mgb-58">
        Trending topics from our partners
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="blog-one.png" />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="blog-two.png" />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="blog-three.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postCard from "@/components/home-build/post-card";

export default {
  name: "partnersBlog",

  components: {
    postCard,
  },
};
</script>

<style lang="scss" scoped>
.partners-blog {
  padding: toRem(110) 0;

  .title-text {
    @include font-height(34, 50);
  }
}
</style>
