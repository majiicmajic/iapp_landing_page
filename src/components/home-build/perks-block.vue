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

  img {
    @include background-cover;
    left: 0;
  }

  .content {
    @include flex-row-between-nowrap;
    padding: toRem(50);

    .left {
      .title-text {
        @include font-height(36, 44);
        margin-bottom: toRem(27);
        width: 55%;
      }

      .description {
        @include font-height(19.5, 29);
        letter-spacing: 0.02;
        width: 60%;
      }
    }

    .right {
      @include flex-column-end-end;
      position: relative;
      height: 100%;
    }
  }
}
</style>
