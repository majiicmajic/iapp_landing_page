<template>
  <div class="about-cta-section">
    <div class="container px-0">
      <div class="cta-card w-100 rounded-20 overflow-hidden">
        <!-- BACKGROUND -->
        <img :src="staticImg('about-cta.png')" alt="" />

        <!-- CONTENT -->
        <div class="content w-100 h-100">
          <div class="text-title brand-white font-weight-700">
            Ready to join the super team?
          </div>

          <button class="btn btn-primary">View Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutCtaSection",
};
</script>

<style lang="scss" scoped>
.about-cta-section {
  padding: toRem(80) 0;

  .cta-card {
    position: relative;
    height: toRem(400);

    img {
      @include background-cover;
    }

    .content {
      position: absolute;
      padding-left: toRem(60);
      @include flex-column-between-start;
      justify-content: center;

      .text-title {
        @include font-height(40, 45);
        margin-bottom: toRem(28);
        width: 30%;
      }

      .btn {
      }
    }
  }
}
</style>
