<template>
  <router-link
    to
    class="team-blog-card w-100 smooth-transition link-no-underline"
  >
    <div class="blog-img-card mgb-28 w-100 smooth-transition">
      <img :src="staticImg('team-blog.png')" alt="" class="smooth-transition" />
    </div>

    <div
      class="blog-category text-uppercase font-weight-700 brand-white brand-white mgb-15"
    >
      Customer Experience
    </div>

    <div class="blog-title brand-white">
      Lorem ipsum dolor sit amet, consectetur.
    </div>
  </router-link>
</template>

<script>
export default {
  name: "teamBlogCard",
};
</script>

<style lang="scss" scoped>
.team-blog-card {
  .blog-img-card {
    height: toRem(300);
    position: relative;

    &:hover {
      transform: scale(0.98);
    }

    img {
      @include background-cover;
    }
  }

  .blog-category {
    @include font-height(16, 22);
  }

  .blog-title {
    @include font-height(20, 30);
  }
}
</style>
