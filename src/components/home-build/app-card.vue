<template>
  <div class="app-card">
    <!-- APP IMAGE  -->
    <img :src="staticImg('i-ride.png')" alt="" class="app-image rounded-20" />

    <div class="info brand-white">
      <!-- TITLE  -->
      <div class="app-title font-weight-700">iRide</div>

      <!-- DESCRIPTION  -->
      <div class="app-description font-weight-500">
        Ready to move around the city or beyond, check iRide.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appCard",
};
</script>

<style lang="scss" scoped>
.app-card {
  @include flex-row-start-nowrap;
  margin-bottom: toRem(40);

  .app-image {
    position: relative;
    margin-right: toRem(20);
    @include rectangle-shape(240, 170);
  }

  .app-title {
    margin-bottom: toRem(21);
    @include font-height(23, 36);
  }

  .app-description {
    letter-spacing: 0.01em;
    @include font-height(17, 25);
  }
}
</style>
