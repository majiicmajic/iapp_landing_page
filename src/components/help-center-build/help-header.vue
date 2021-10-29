<template>
  <div class="help-header">
    <div class="container px-0">
      <!-- PAGE TITLE -->
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="page-title brand-white font-weight-700 text-center">
          Hi there, how can we help you?
        </div>

        <!-- SEARCH BAR -->
        <div class="search-bar overflow-hidden rounded-5">
          <input
            type="email"
            class="form-control"
            placeholder="Ask a question"
          />

          <button class="btn btn-primary">Search</button>
        </div>

        <!-- .SEARCH META -->
        <div class="search-meta brand-white text-center">
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

  .page-title {
    margin: 22vh 0 toRem(50);
    @include font-height(58, 70);
    width: 40%;
  }

  .search-bar {
    border: toRem(2) solid $brand-red;
    @include flex-row-start-nowrap;
    margin-bottom: toRem(30);
    width: 45%;

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
    }
  }

  .search-meta {
    @include font-height(18, 25);
  }
}
</style>
