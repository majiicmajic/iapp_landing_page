<template>
  <router-link
    to
    class="team-blog-card w-100 smooth-transition link-no-underline"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="120"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <div
      class="blog-img-card mgb-28 w-100 smooth-transition"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="120"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <img :src="staticImg('team-blog.png')" alt="" class="smooth-transition" />
    </div>

    <div
      class="blog-category text-uppercase font-weight-700 brand-white brand-white mgb-15"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="130"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      Customer Experience
    </div>

    <div
      class="blog-title brand-white"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="130"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      Lorem ipsum dolor sit amet, consectetur.
    </div>
  </router-link>
</template>

<script>
export default {
  name: "teamBlogCard",
};
</script>

<style lang="scss" scoped>
.team-blog-card {
  .blog-img-card {
    height: toRem(300);
    position: relative;

    @include breakpoint-down(xl) {
      height: toRem(230);
    }

    @include breakpoint-down(md) {
      height: toRem(270);
    }

    @include breakpoint-down(xs) {
      height: toRem(220);
    }

    &:hover {
      transform: scale(0.98);
    }

    img {
      @include background-cover;
    }
  }

  .blog-category {
    @include font-height(16, 22);

    @include breakpoint-down(xl) {
      @include font-height(14, 18);
    }

    @include breakpoint-down(xs) {
      @include font-height(12, 17);
    }
  }

  .blog-title {
    @include font-height(20, 30);

    @include breakpoint-down(xl) {
      @include font-height(17.5, 22);
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(45);
    }

    @include breakpoint-down(xs) {
      @include font-height(15, 20);
    }
  }
}
</style>
