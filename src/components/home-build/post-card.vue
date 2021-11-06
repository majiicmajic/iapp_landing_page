<template>
  <div
    class="post-card brand-grey-dark-bg overflow-hidden rounded-20 h-auto smooth-transition pointer"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="120"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <!-- IMAGE TOP  -->
    <div class="image-top position-relative w-100">
      <img v-lazy="staticImg(image)" alt="" />
    </div>

    <!-- BOTTOM CONTENT  -->
    <div class="bottom-content brand-white">
      <!-- TITLE  -->
      <div class="title text-capitalize">Lorem ipsum dolor</div>

      <!-- DESCRIPTION -->
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
        dignissim.
      </div>

      <!-- META INFO  -->
      <div class="meta-info" v-if="show_bottom">
        <!-- AUTHOR  -->
        <div class="author">
          <div class="avatar author-image">
            <img :src="staticImg('post-image.png')" alt="" class="avatar-img" />
          </div>

          <div class="author-name">John Smith</div>
        </div>

        <!-- DATE  -->
        <div class="date">12/05/2021</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postCard",

  props: {
    image: String,
    show_bottom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  box-shadow: 0 toRem(4) toRem(95) rgba(0, 0, 0, 0.07);

  @include breakpoint-down(md) {
    margin-bottom: toRem(30);
  }

  @include breakpoint-down(xs) {
    border-radius: toRem(18) !important;
  }

  &:hover {
    transform: scale(0.98);
  }

  .image-top {
    height: toRem(240);

    @include breakpoint-down(xl) {
      height: toRem(200);
    }

    @include breakpoint-down(md) {
      height: toRem(250);
    }

    @include breakpoint-down(xs) {
      height: toRem(215);
    }

    img {
      @include background-cover;
    }
  }

  .bottom-content {
    padding: toRem(23);

    @include breakpoint-down(xl) {
      padding: toRem(18);
    }

    .title {
      @include font-height(24, 36);
      margin-bottom: toRem(7);
      font-weight: 600;

      @include breakpoint-down(xl) {
        @include font-height(17, 28);
        margin-bottom: toRem(10);
      }
    }

    .description {
      @include font-height(14, 21);
      margin-bottom: toRem(25);

      @include breakpoint-down(xl) {
        @include font-height(13.5, 19);
      }
    }

    .meta-info {
      @include flex-row-between-nowrap;

      .author {
        @include flex-row-start-nowrap;

        .author-image {
          @include square-shape(37);
          margin-right: toRem(16);

          @include breakpoint-down(xl) {
            @include square-shape(34);
            margin-right: toRem(10);
          }
        }

        .author-name {
          @include font-height(14, 21);

          @include breakpoint-down(xl) {
            @include font-height(12.75, 18);
          }
        }
      }

      .date {
        @include font-height(14, 21);
        text-align: right;

        @include breakpoint-down(xl) {
          @include font-height(12.75, 18);
        }
      }
    }
  }
}
</style>
