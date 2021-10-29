<template>
  <div
    class="post-card brand-grey-dark-bg overflow-hidden rounded-20 h-auto smooth-transition pointer"
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

  &:hover {
    transform: scale(0.98);
  }

  .image-top {
    height: toRem(240);

    img {
      @include background-cover;
    }
  }

  .bottom-content {
    padding: toRem(23);

    .title {
      @include font-height(24, 36);
      margin-bottom: toRem(7);
      font-weight: 600;
    }

    .description {
      @include font-height(14, 21);
      margin-bottom: toRem(25);
    }

    .meta-info {
      @include flex-row-between-nowrap;

      .author {
        @include flex-row-start-nowrap;

        .author-image {
          @include square-shape(37);
          margin-right: toRem(16);
        }

        .author-name {
          @include font-height(14, 21);
        }
      }

      .date {
        @include font-height(14, 21);
        text-align: right;
      }
    }
  }
}
</style>
