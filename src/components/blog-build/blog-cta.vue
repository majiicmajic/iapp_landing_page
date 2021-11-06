<template>
  <div class="container px-3 px-sm-4 px-xl-0">
    <div
      class="blog-cta"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="110"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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
  padding: toRem(180) 0 toRem(90);

  @include breakpoint-down(md) {
    padding: toRem(160) 0 toRem(90);
  }

  @include breakpoint-custom-down(620) {
    padding: toRem(120) 0 toRem(40);
  }

  .cta-block {
    padding: toRem(38) toRem(45);
    @include flex-row-between-nowrap;

    @include breakpoint-down(lg) {
      padding: toRem(34) toRem(35);
    }

    @include breakpoint-down(md) {
      padding: toRem(30) toRem(24);
    }

    @include breakpoint-custom-down(620) {
      padding: toRem(35) toRem(30);
    }

    @include breakpoint-down(sm) {
      padding: toRem(30) toRem(25);
    }

    @include breakpoint-down(xs) {
      padding: toRem(25) toRem(20);
    }

    .info {
      width: 45%;

      @include breakpoint-down(md) {
        width: 50%;
      }

      @include breakpoint-custom-down(620) {
        width: 100%;
      }

      .title {
        @include font-height(23, 34);

        @include breakpoint-down(lg) {
          @include font-height(21, 32);
        }

        @include breakpoint-down(md) {
          @include font-height(19, 29);
          margin-bottom: toRem(20) !important;
        }

        @include breakpoint-down(sm) {
          @include font-height(18, 26);
        }

        @include breakpoint-down(xs) {
          @include font-height(16, 24);
        }
      }

      .description {
        @include font-height(16, 25);

        @include breakpoint-down(lg) {
          @include font-height(15.5, 24);
          margin-bottom: toRem(48) !important;
        }

        @include breakpoint-down(md) {
          @include font-height(14.5, 22);
          margin-bottom: toRem(46) !important;
        }

        @include breakpoint-down(xs) {
          @include font-height(14, 21);
          margin-bottom: toRem(44) !important;
        }
      }

      .btn {
        padding: toRem(10) toRem(55);

        @include breakpoint-down(md) {
          padding: toRem(8) toRem(46);
        }

        @include breakpoint-down(sm) {
          padding: toRem(6) toRem(44);
        }

        @include breakpoint-down(xs) {
          padding: toRem(5) toRem(40);
        }
      }
    }

    img {
      position: absolute;
      right: 0;
      top: toRem(-80);

      @include breakpoint-down(md) {
        right: toRem(-40);
      }

      @include breakpoint-custom-down(620) {
        display: none;
      }
    }
  }
}
</style>
