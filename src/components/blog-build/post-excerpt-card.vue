<template>
  <div class="post-excerpt-card pointer smooth-transition">
    <div class="post-image rounded-10 overflow-hidden">
      <img v-lazy="staticImg(post.image)" alt="" />
    </div>

    <!-- BLOG INFO  -->
    <div class="blog-info">
      <div class="blog-count mgb-12 font-weight-700 brand-white">
        {{ post.count }}
      </div>

      <div class="blog-title brand-white">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postExcerptCard",

  props: {
    post: {
      type: Object,
      default: () => ({
        image: "",
        count: "BLOG 01",
        title: "Lorem ipsum dolor sit amet, consectetur.",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.post-excerpt-card {
  @include flex-row-start-nowrap;
  margin-bottom: toRem(68);

  &:last-of-type {
    margin-bottom: 0;
  }

  .post-image {
    position: relative;
    @include rectangle-shape(200, 130);
    margin-right: toRem(30);

    img {
      @include background-cover;
    }
  }

  .blog-count {
    @include font-height(16, 20);
  }

  .blog-title {
    @include font-height(19, 28);
  }
}
</style>
