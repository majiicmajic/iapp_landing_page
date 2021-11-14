<template>
  <div class="footer brand-black-bg">
    <div class="container px-3 px-sm-4 px-xl-0">
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
    pre_selected_language: { id: 1, name: "English" },

    country_entry: "",
    pre_selected_country: {
      id: 1,
      name: "United Kingdom",
    },

    languages: [
      {
        id: 1,
        name: "English",
      },
      {
        id: 2,
        name: "Arabic",
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
      {
        id: 4,
        name: "Qatar",
      },
      {
        id: 5,
        name: "UAE",
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

      @include breakpoint-down(xl) {
        @include font-height(24, 28);
        margin-bottom: toRem(38);
      }

      @include breakpoint-down(lg) {
        @include font-height(22, 24);
        margin-bottom: toRem(34);
      }

      @include breakpoint-down(sm) {
        @include font-height(18, 22);
        margin-bottom: toRem(23);
      }
    }

    .input-row {
      @include flex-row-between-wrap;
      margin-bottom: toRem(55);

      @include breakpoint-down(xl) {
        margin-bottom: toRem(50);
      }

      @include breakpoint-down(md) {
        width: 100%;
      }

      .left-section {
        border: toRem(2) solid $brand-red;
        @include flex-row-start-nowrap;
        width: 40%;

        @include breakpoint-down(md) {
          width: 100%;
          margin-bottom: toRem(30);
        }

        @include breakpoint-down(sm) {
          border: toRem(1) solid $brand-red;
          margin-bottom: toRem(24);
        }

        .form-control {
          border-radius: 0 !important;
          background: transparent;
          color: $brand-ash;
          border: 0;
        }

        .btn {
          border-radius: 0 !important;
          min-width: toRem(170);

          @include breakpoint-down(lg) {
            min-width: toRem(120);
            padding-left: toRem(10);
            padding-right: toRem(10);
          }

          @include breakpoint-down(md) {
            min-width: toRem(160);
          }

          @include breakpoint-down(xs) {
            min-width: toRem(120);
          }
        }
      }

      .right-section {
        @include flex-row-end-wrap;
        width: 40%;

        @include breakpoint-down(xl) {
          width: 60%;
        }

        @include breakpoint-down(md) {
          @include flex-row-start-wrap;
          width: 100%;
        }

        @include breakpoint-down(sm) {
          @include flex-row-between-wrap;
        }

        .select {
          @include flex-row-center-nowrap;

          .icon {
            font-size: toRem(20);
            margin-right: toRem(15);

            @include breakpoint-down(lg) {
              font-size: toRem(19);
              margin-right: toRem(12);
            }

            @include breakpoint-down(sm) {
              display: none;
            }
          }

          &:last-of-type {
            margin-left: toRem(30);

            @include breakpoint-down(xl) {
              margin-left: toRem(20);
            }

            @include breakpoint-down(lg) {
              margin-left: toRem(16);
            }

            @include breakpoint-down(sm) {
              margin-left: unset;
            }
          }
        }

        .select-one,
        .select-two {
          width: toRem(190);

          @include breakpoint-down(lg) {
            width: toRem(165);
          }

          @include breakpoint-down(md) {
            width: toRem(190);
          }

          @include breakpoint-down(sm) {
            width: calc(90vw / 2);
          }

          @include breakpoint-custom-down(355) {
            width: 90vw;
            margin-bottom: toRem(5);
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: toRem(1) solid $brand-red;
    @include flex-row-between-nowrap;
    padding: toRem(28) 0;

    @include breakpoint-down(md) {
      padding: toRem(24) 0;
    }

    @include breakpoint-down(xs) {
      padding: toRem(21) 0;
      @include flex-row-between-wrap;
    }

    .copyright-column {
      @include font-height(13.75, 22);

      @include breakpoint-down(md) {
        @include font-height(13, 19);
      }

      @include breakpoint-down(xs) {
        @include font-height(12.45, 18);
        margin-bottom: toRem(17);
        text-align: center;
        width: 100%;
      }
    }

    .social-column {
      @include flex-row-end-nowrap;

      @include breakpoint-down(xs) {
        @include flex-row-center-nowrap;
        width: 100%;
      }

      .social-circle {
        background: rgba($brand-white, 0.1);
        @include square-shape(32);
        margin-left: toRem(24);
        border-radius: 50%;
        position: relative;
        cursor: pointer;

        @include breakpoint-down(md) {
          margin-left: toRem(18);
        }

        @include breakpoint-down(xs) {
          @include square-shape(31);
          margin: 0 toRem(11);
        }

        .icon {
          @include center-placement;
          @include transition(0.4s);
          font-size: toRem(17);
          color: $brand-white;

          @include breakpoint-down(md) {
            font-size: toRem(15);
          }

          @include breakpoint-down(xs) {
            font-size: toRem(12.65);
          }
        }

        .icon-twitter,
        .icon-youtube {
          font-size: toRem(14);

          @include breakpoint-down(md) {
            font-size: toRem(13);
          }

          @include breakpoint-down(xs) {
            font-size: toRem(12);
          }
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
