<template>
  <div class="blog-header">
    <div class="container px-0">
      <!-- PAGE TITLE -->
      <div class="d-flex justify-content-center">
        <div class="page-title brand-white font-weight-700 text-center">
          What’s trending on iApp?
        </div>
      </div>

      <!-- BLOG SECTION -->
      <div class="blog-section"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogHeader",
};
</script>

<style lang="scss" scoped>
.blog-header {
  .page-title {
    margin: 25vh 0 toRem(82);
    @include font-height(58, 70);
    width: 40%;
  }

  .blog-section {
    @include flex-row-between-nowrap;
    align-items: flex-start;
  }
}
</style>
