<template>
  <div>
    <div class="contact-hero w-100">
      <div class="container px-0">
        <div class="left-section">
          <!-- TITLE TEXT -->
          <div class="title brand-white font-weight-700">
            We´d love to hear from you.
          </div>

          <!-- DESCRIPTION -->
          <div class="description font-weight-500">
            Got a question or any complain you would like to pass across to us?
            Use the contact form below to reach out to us.
          </div>
        </div>

        <div class="right-section">
          <img :src="staticImg('contact-person.png')" alt="" />
        </div>
      </div>
    </div>

    <!-- CONTACT BLOCK -->
    <contact-block />
  </div>
</template>

<script>
import { bgColorSetter } from "@/service/utilities";
import contactBlock from "@/components/contact-build/contact-block";

export default {
  name: "contact",

  components: {
    contactBlock,
  },

  mounted() {
    this.$nextTick(() => bgColorSetter("#e5e5e5"));
  },
};
</script>

<style lang="scss" scoped>
.contact-hero {
  height: 100vh;
  border-radius: 0 0 toRem(80) toRem(80);
  background: linear-gradient(
    103.1deg,
    #451c1c 10.74%,
    #632323 31.67%,
    #612626 60.42%,
    #160d0d 90.27%
  );

  .container {
    @include flex-row-between-nowrap;
    padding-top: toRem(80);

    .left-section {
      width: 55%;

      .title {
        @include font-height(60, 68);
        margin-bottom: toRem(52);
        width: 90%;
      }

      .description {
        @include font-height(18, 30);
        letter-spacing: 0.02em;
        color: #e8e8e8;
        width: 75%;
      }
    }

    .right-section {
      width: 45%;

      img {
        width: auto;
        height: 85vh;
      }
    }
  }
}
</style>
