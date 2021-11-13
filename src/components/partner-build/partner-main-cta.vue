<template>
  <div class="partner-main-cta brand-grey-dark-bg" id="partnerCTA">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div class="content">
        <div class="cta brand-white font-weight-700 text-center mgb-50">
          Ready to increase your business reach for success?
        </div>

        <router-link
          to="/contact"
          class="btn btn-primary"
          style="width: max-content"
        >
          Become Our Partner
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partnerMainCta",
};
</script>

<style lang="scss" scoped>
.partner-main-cta {
  margin: toRem(100) 0;
  padding: toRem(80) 0;

  @include breakpoint-down(xl) {
    margin: toRem(80) 0;
    padding: toRem(60) 0;
  }

  @include breakpoint-down(sm) {
    margin: toRem(40) 0;
  }

  .content {
    @include flex-column-center;

    .cta {
      @include font-height(52, 65);
      width: 70%;

      @include breakpoint-down(xl) {
        @include font-height(35, 50);
      }

      @include breakpoint-down(md) {
        @include font-height(30, 42);
      }

      @include breakpoint-down(sm) {
        @include font-height(26, 38);
        margin-bottom: toRem(40) !important;
        width: 80%;
      }

      @include breakpoint-down(xs) {
        @include font-height(22, 32);
        margin-bottom: toRem(35) !important;
        width: 80%;
      }
    }

    .btn {
      font-size: toRem(16);

      @include breakpoint-down(xl) {
        font-size: toRem(15);
      }

      @include breakpoint-down(md) {
        font-size: toRem(14.5);
      }

      @include breakpoint-down(sm) {
        font-size: toRem(13.5);
      }
    }
  }
}
</style>
