<template>
  <div class="footer brand-black-bg">
    <div class="container px-0">
      <!-- FOOTER TOP  -->
      <div class="footer-top">
        <!-- TITLE  -->
        <div class="title-text brand-white font-weight-700">Get in touch</div>

        <!-- INPUT ROW  -->
        <div class="input-row">
          <!-- EMAIL ENTRY -->
          <div class="left-section overflow-hidden rounded-5">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            />

            <button class="btn btn-primary">Get Started</button>
          </div>

          <!-- LOCATION AND LANGUAGE -->
          <div class="right-section">
            <!-- LOCATION -->
            <div class="select">
              <div class="icon icon-map-pin-sm brand-ash"></div>
              <!-- SELECT ONE  -->
              <div class="select-one">
                <select-input
                  placeholder="Select country"
                  :options="countries"
                  :pre_select="pre_selected_country"
                  @selectedOption="country_entry = $event.toString()"
                />
              </div>
            </div>

            <!-- LANGUAGE -->
            <div class="select">
              <!-- SELECT TWO  -->
              <div class="select-two">
                <select-input
                  placeholder="Select language"
                  :options="languages"
                  :pre_select="pre_selected_language"
                  @selectedOption="language_entry = $event.toString()"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER DETAILS  -->
        <footer-details />
      </div>

      <!-- FOOTER BOTTOM  -->
      <div class="footer-bottom">
        <!-- COPYRIGHT COLUMN -->
        <div class="copyright-column brand-white">
          © 2021 iApp | The Super App. All rights reserved
        </div>

        <!-- SOCIAL COLUMN -->
        <div class="social-column">
          <!-- FACEBOOK  -->
          <div class="social-circle">
            <div class="icon icon-facebook"></div>
          </div>

          <!-- INSTAGRAM  -->
          <div class="social-circle">
            <div class="icon icon-instagram-fill"></div>
          </div>

          <!-- TWITTER  -->
          <div class="social-circle">
            <div class="icon icon-twitter"></div>
          </div>

          <!-- YOUTUBE  -->
          <div class="social-circle">
            <div class="icon icon-youtube"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selectInput from "@/components/form-build/select-input";
import footerDetails from "@/components/footer-build/footer-details";

export default {
  name: "footerBase",

  components: {
    selectInput,
    footerDetails,
  },

  data: () => ({
    language_entry: "",
    pre_selected_language: {},

    country_entry: "",
    pre_selected_country: {},

    languages: [
      {
        id: 1,
        name: "English",
      },
      {
        id: 2,
        name: "Spanish",
      },
      {
        id: 3,
        name: "Italian",
      },
    ],

    countries: [
      {
        id: 1,
        name: "United Kingdom",
      },
      {
        id: 2,
        name: "Nigeria",
      },
      {
        id: 3,
        name: "Ghana",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.footer {
  .footer-top {
    padding: toRem(58) 0 toRem(45);

    .title-text {
      @include font-height(26, 30);
      margin-bottom: toRem(40);
    }

    .input-row {
      @include flex-row-between-wrap;
      margin-bottom: toRem(55);

      .left-section {
        border: toRem(2) solid $brand-red;
        @include flex-row-start-nowrap;
        width: 40%;

        .form-control {
          border-radius: 0 !important;
          background: transparent;
          color: $brand-ash;
          border: 0;
        }

        .btn {
          border-radius: 0 !important;
          min-width: toRem(170);
        }
      }

      .right-section {
        @include flex-row-end-wrap;
        width: 40%;

        .select {
          @include flex-row-center-nowrap;

          .icon {
            font-size: toRem(20);
            margin-right: toRem(15);
          }

          &:last-of-type {
            margin-left: toRem(30);
          }
        }

        .select-one,
        .select-two {
          width: toRem(190);
        }
      }
    }
  }

  .footer-bottom {
    border-top: toRem(1) solid $brand-red;
    @include flex-row-between-nowrap;
    padding: toRem(28) 0;

    .copyright-column {
      @include font-height(13.75, 22);
    }

    .social-column {
      @include flex-row-end-nowrap;

      .social-circle {
        background: rgba($brand-white, 0.1);
        @include square-shape(32);
        margin-left: toRem(24);
        border-radius: 50%;
        position: relative;
        cursor: pointer;

        .icon {
          @include center-placement;
          @include transition(0.4s);
          font-size: toRem(17);
          color: $brand-white;
        }

        .icon-twitter,
        .icon-youtube {
          font-size: toRem(14);
        }

        &:hover {
          .icon {
            color: $brand-lighter-ash;
          }
        }
      }
    }
  }
}
</style>
