<template>
  <div>
    <div class="contact-hero w-100">
      <div class="container px-3 px-sm-4 px-xl-0">
        <div class="left-section">
          <!-- TITLE TEXT -->
          <div
            class="title brand-white font-weight-700"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            We´d love to hear from you.
          </div>

          <!-- DESCRIPTION -->
          <div
            class="description font-weight-500"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Got a question or any complain you would like to pass across to us?
            Use the contact form below to reach out to us.
          </div>
        </div>

        <div
          class="right-section"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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

  beforeDestroy() {
    bgColorSetter("#0E1319");
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

  @include breakpoint-down(md) {
    height: 80vh;
  }

  .container {
    @include flex-row-between-nowrap;
    padding-top: toRem(80);

    @include breakpoint-down(lg) {
      padding-top: toRem(50);
    }

    @include breakpoint-down(sm) {
      padding-top: 25vh;
    }

    .left-section {
      width: 55%;

      @include breakpoint-down(sm) {
        width: 90%;
      }

      .title {
        @include font-height(60, 68);
        margin-bottom: toRem(52);
        width: 90%;

        @include breakpoint-down(xl) {
          @include font-height(54, 60);
          margin-bottom: toRem(48);
        }

        @include breakpoint-down(lg) {
          @include font-height(45, 50);
        }

        @include breakpoint-down(md) {
          @include font-height(38, 48);
          margin-bottom: toRem(38);
        }

        @include breakpoint-custom-down(640) {
          @include font-height(35, 45);
          width: 86%;
        }

        @include breakpoint-down(sm) {
          width: 100%;
        }

        @include breakpoint-down(xs) {
          @include font-height(26, 40);
        }
      }

      .description {
        @include font-height(18, 30);
        letter-spacing: 0.02em;
        color: #e8e8e8;
        width: 75%;

        @include breakpoint-down(xl) {
          @include font-height(16.5, 28);
          letter-spacing: 0.01em;
        }

        @include breakpoint-down(lg) {
          @include font-height(16, 28);
          width: 80%;
        }

        @include breakpoint-down(md) {
          @include font-height(15, 26);
          width: 85%;
        }

        @include breakpoint-custom-down(640) {
          @include font-height(14.5, 26);
        }

        @include breakpoint-down(sm) {
          width: 100%;
        }

        @include breakpoint-down(xs) {
          @include font-height(14, 26);
        }
      }
    }

    .right-section {
      width: 45%;

      @include breakpoint-down(sm) {
        width: 0;
      }

      img {
        width: auto;
        height: 85vh;

        @include breakpoint-down(xl) {
          height: 76vh;
          margin-top: toRem(20);
        }

        @include breakpoint-down(lg) {
          height: 66vh;
          margin-top: toRem(80);
          margin-left: toRem(-26);
        }

        @include breakpoint-down(md) {
          height: 60vh;
          margin-top: toRem(50);
          margin-left: toRem(-55);
        }

        @include breakpoint-custom-down(640) {
          height: 55vh;
          margin-top: toRem(72);
          margin-left: toRem(-55);
        }

        @include breakpoint-down(sm) {
          display: none;
        }
      }
    }
  }
}
</style>
