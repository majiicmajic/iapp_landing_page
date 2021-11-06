<template>
  <div class="about-cta-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div
        class="cta-card w-100 rounded-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="120"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
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

  @include breakpoint-down(md) {
    padding: toRem(5) 0 toRem(60);
  }

  .cta-card {
    position: relative;
    height: toRem(400);

    @include breakpoint-down(xl) {
      height: toRem(350);
    }

    @include breakpoint-down(lg) {
      height: toRem(300);
    }

    img {
      @include background-cover;
    }

    .content {
      position: absolute;
      padding-left: toRem(60);
      @include flex-column-between-start;
      justify-content: center;

      @include breakpoint-down(xl) {
        padding-left: toRem(50);
      }

      @include breakpoint-down(lg) {
        padding-left: toRem(40);
      }

      @include breakpoint-down(sm) {
        padding-left: toRem(25);
      }

      .text-title {
        @include font-height(40, 45);
        margin-bottom: toRem(28);
        width: 30%;

        @include breakpoint-down(xl) {
          @include font-height(36, 40);
          width: 45%;
        }

        @include breakpoint-down(lg) {
          @include font-height(34, 38);
        }

        @include breakpoint-down(md) {
          @include font-height(30, 36);
        }

        @include breakpoint-down(sm) {
          @include font-height(26, 32);
          width: 55%;
        }

        @include breakpoint-down(xs) {
          @include font-height(24, 32);
          width: 68%;
        }
      }

      .btn {
      }
    }
  }
}
</style>
