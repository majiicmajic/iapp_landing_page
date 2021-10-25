<template>
  <div class="container px-0">
    <div class="blog-cta">
      <div class="cta-block position-relative rounded-10 brand-grey-dark-bg">
        <div class="info">
          <!-- TITLE -->
          <div class="title mgb-13 brand-white font-weight-700">
            We’re taking over the topics on the web, iApp is here to stay!
          </div>

          <!-- DESCRIPTION -->
          <div class="description mgb-56 brand-white">
            Keep surfing with us, we are bringing awesome changes to the
            industry.
          </div>

          <button class="btn btn-primary">Read More</button>
        </div>

        <!-- IMAGE BLOCK -->
        <div class="image-block">
          <img :src="staticImg('blog-saly.png')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCTA",
};
</script>

<style lang="scss" scoped>
.blog-cta {
  padding: toRem(160) 0 toRem(80);

  .cta-block {
    padding: toRem(38) toRem(45);
    @include flex-row-between-nowrap;

    .info {
      width: 45%;

      .title {
        @include font-height(23, 34);
      }

      .description {
        @include font-height(16, 25);
      }

      .btn {
        padding: toRem(10) toRem(55);
      }
    }

    img {
      position: absolute;
      right: 0;
      top: toRem(-80);
    }
  }
}
</style>
