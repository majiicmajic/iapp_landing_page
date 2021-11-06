<template>
  <div class="perks-block w-100">
    <img :src="staticImg(image)" alt="" class="index-1" />

    <!-- CONTENT  -->
    <div class="content position-relative w-100 h-100 index-99">
      <div class="left">
        <div class="title-text brand-white font-weight-700">
          {{ title }}
        </div>

        <div class="description brand-white">
          {{ description }}
        </div>
      </div>

      <div class="right">
        <button class="btn btn-primary">View Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "perksBlock",

  props: {
    image: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.perks-block {
  margin-top: toRem(40);
  border-radius: toRem(20);
  position: relative;
  height: toRem(380);
  overflow: hidden;

  @include breakpoint-down(xl) {
    height: toRem(320);
  }

  @include breakpoint-down(lg) {
    height: toRem(300);
  }

  @include breakpoint-down(sm) {
    height: toRem(260);
  }

  @include breakpoint-down(xs) {
    height: toRem(230);
  }

  img {
    @include background-cover;
    left: 0;
  }

  .content {
    @include flex-row-between-nowrap;
    padding: toRem(50);

    @include breakpoint-down(md) {
      padding: toRem(30);
    }

    @include breakpoint-down(xs) {
      padding: toRem(20);
    }

    .left {
      .title-text {
        @include font-height(36, 44);
        margin-bottom: toRem(27);
        width: 55%;

        @include breakpoint-down(xl) {
          @include font-height(28, 38);
        }

        @include breakpoint-down(lg) {
          @include font-height(23, 32);
        }

        @include breakpoint-down(md) {
          @include font-height(21, 28);
          width: 60%;
        }

        @include breakpoint-down(sm) {
          @include font-height(19, 26);
          width: 80%;
        }

        @include breakpoint-down(xs) {
          @include font-height(17, 25);
          width: 95%;
        }
      }

      .description {
        @include font-height(19.5, 29);
        letter-spacing: 0.02;
        width: 60%;

        @include breakpoint-down(xl) {
          @include font-height(17, 26);
        }

        @include breakpoint-down(lg) {
          @include font-height(15, 23);
        }

        @include breakpoint-down(md) {
          @include font-height(14, 22);
        }

        @include breakpoint-down(sm) {
          @include font-height(14, 22);
          letter-spacing: 0.01;
          width: 80%;
        }

        @include breakpoint-down(xs) {
          @include font-height(12.5, 21);
          letter-spacing: 0.01;
          width: 90%;
        }
      }
    }

    .right {
      @include flex-column-end-end;
      position: relative;
      height: 100%;

      @include breakpoint-down(xs) {
        display: none;
      }

      .btn {
        @include breakpoint-down(xl) {
          font-size: toRem(12);
        }

        @include breakpoint-down(lg) {
          font-size: toRem(11);
        }
      }
    }
  }
}
</style>
