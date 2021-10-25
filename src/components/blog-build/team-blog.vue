<template>
  <div class="team-blog">
    <div class="container px-0">
      <div class="title-text brand-white font-weight-700 mgb-58">
        Top updates from the team
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>

        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>

        <div class="col-12 col-md-4">
          <team-blog-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamBlogCard from "@/components/blog-build/team-blog-card";

export default {
  name: "teamBlog",

  components: {
    teamBlogCard,
  },
};
</script>

<style lang="scss" scoped>
.team-blog {
  padding: toRem(80) 0;

  .title-text {
    @include font-height(34, 50);
  }
}
</style>
