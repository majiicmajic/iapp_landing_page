<template>
  <div class="container px-0">
    <div class="post-section">
      <!-- LEFT SECTION -->
      <div class="left-section">
        <!-- BLOG IMAGE -->
        <div class="blog-image rounded-10 overflow-hidden">
          <img v-lazy="staticImg('blog-one.png')" alt="" />
        </div>

        <!-- BLOG COUNT -->
        <div class="blog-count brand-white font-weight-700 mgb-15">BLOG 01</div>

        <!-- BLOG TITLE -->
        <div class="blog-title brand-white font-weight-700 mgb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <!-- BLOG DESCRIPTION -->
        <div class="blog-description brand-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus non sit
          nunc fusce magnis neque bibendum pellentesque turpis.
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div class="right-section">
        <post-excerpt-card
          :post="{
            image: 'blog-two.png',
            count: 'BLOG 01',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />

        <post-excerpt-card
          :post="{
            image: 'blog-three.png',
            count: 'BLOG 02',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />

        <post-excerpt-card
          :post="{
            image: 'blog-four.png',
            count: 'BLOG 03',
            title: ' Lorem ipsum dolor sit amet, consectetur ',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import postExcerptCard from "@/components/blog-build/post-excerpt-card";

export default {
  name: "postSection",

  components: {
    postExcerptCard,
  },
};
</script>

<style lang="scss" scoped>
.post-section {
  @include flex-row-between-nowrap;
  align-items: flex-start;

  .left-section {
    width: 48%;

    .blog-image {
      margin-bottom: toRem(42);
      position: relative;
      height: toRem(400);
      width: 100%;

      img {
        @include background-cover;
      }
    }

    .blog-count {
      @include font-height(16, 24);
    }

    .blog-title {
      @include font-height(22, 30);
    }

    .blog-description {
      @include font-height(16.5, 27);
    }
  }

  .right-section {
    width: 48%;
  }
}
</style>
