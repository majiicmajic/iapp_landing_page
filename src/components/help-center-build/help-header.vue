<template>
  <div class="help-header">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- PAGE TITLE -->
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div
          class="page-title brand-white font-weight-700 text-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Hi there, how can we help you?
        </div>

        <!-- SEARCH BAR -->
        <div
          class="search-bar overflow-hidden rounded-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <input
            type="email"
            class="form-control"
            placeholder="Ask a question"
          />

          <button class="btn btn-primary">Search</button>
        </div>

        <!-- .SEARCH META -->
        <div
          class="search-meta brand-white text-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Top Searches: iRide, iLodge, iEat
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpHeader",
};
</script>

<style lang="scss" scoped>
.help-header {
  padding-bottom: toRem(100);

  @include breakpoint-down(lg) {
    padding-bottom: toRem(80);
  }

  .page-title {
    margin: 22vh 0 toRem(50);
    @include font-height(58, 70);
    width: 40%;

    @include breakpoint-down(xl) {
      @include font-height(44, 60);
      margin: 28vh 0 toRem(80);
      width: 55%;
    }

    @include breakpoint-down(lg) {
      margin: 28vh 0 toRem(50);
      @include font-height(38, 44);
    }

    @include breakpoint-down(md) {
      margin: 25vh 0 toRem(50);
      @include font-height(34, 42);
      width: 65%;
    }

    @include breakpoint-down(sm) {
      @include font-height(30, 40);
      width: 72%;
    }
  }

  .search-bar {
    border: toRem(2) solid $brand-red;
    @include flex-row-start-nowrap;
    margin-bottom: toRem(30);
    width: 45%;

    @include breakpoint-down(lg) {
      width: 50%;
    }

    @include breakpoint-down(md) {
      width: 60%;
    }

    @include breakpoint-down(sm) {
      width: 80%;
    }

    .form-control {
      border-radius: 0 !important;
      background: transparent;
      color: $brand-ash;
      font-size: toRem(15);
      border: 0;
    }

    .btn {
      border-radius: 0 !important;
      min-width: toRem(170);

      @include breakpoint-down(md) {
        min-width: toRem(140);
      }

      @include breakpoint-down(sm) {
        min-width: toRem(110);
      }
    }
  }

  .search-meta {
    @include font-height(18, 25);

    @include breakpoint-down(xl) {
      @include font-height(16, 23);
    }

    @include breakpoint-down(sm) {
      @include font-height(14.5, 21);
    }
  }
}
</style>
