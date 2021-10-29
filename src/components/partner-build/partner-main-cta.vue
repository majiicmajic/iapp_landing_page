<template>
  <div class="partner-main-cta brand-grey-dark-bg">
    <div class="container px-0">
      <div class="content">
        <div class="cta brand-white font-weight-700 text-center mgb-50">
          Ready to increase your business reach for success?
        </div>

        <button class="btn btn-primary">Become Our Partner</button>
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

  .content {
    @include flex-column-center;

    .cta {
      @include font-height(52, 65);
      width: 70%;
    }

    .btn {
      font-size: toRem(16);
    }
  }
}
</style>
