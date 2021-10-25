<template>
  <div>
    <!-- BLOG HEADER -->
    <blog-header />

    <!-- POST SECTION -->
    <post-section />

    <!-- POST CTA -->
    <blog-cta />

    <!-- PARTNERS BLOG -->
    <partners-blog />

    <!-- SUPER APP BLOG -->
    <superapp-blog />

    <!-- TEAM BLOG -->
    <team-blog />
  </div>
</template>

<script>
import blogHeader from "@/components/blog-build/blog-header";
import postSection from "@/components/blog-build/post-section";
import blogCta from "@/components/blog-build/blog-cta";
import partnersBlog from "@/components/blog-build/partners-blog";
import superappBlog from "@/components/blog-build/superapp-blog";
import teamBlog from "@/components/blog-build/team-blog";

export default {
  name: "blog",

  components: {
    blogHeader,
    postSection,
    blogCta,
    partnersBlog,
    superappBlog,
    teamBlog,
  },
};
</script>

<style lang="scss" scoped></style>
