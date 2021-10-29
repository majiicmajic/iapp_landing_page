<template>
  <div class="partners-extensions">
    <div class="container px-0 d-flex flex-column align-items-center">
      <div class="title-text brand-white text-center font-weight-700 mgb-58">
        You can be our partner as well for the followings:
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="extension-one.png" :show_bottom="false" />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="extension-two.png" :show_bottom="false" />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <post-card image="extension-three.png" :show_bottom="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postCard from "@/components/home-build/post-card";

export default {
  name: "partnersExtensions",

  components: {
    postCard,
  },
};
</script>

<style lang="scss" scoped>
.partners-extensions {
  padding: toRem(50) 0 toRem(80);

  .title-text {
    @include font-height(42, 50);
    width: 60%;
  }
}
</style>
