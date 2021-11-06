<template>
  <div class="footer-details">
    <div class="left">
      <!-- BRAND COLUMN  -->
      <div class="brand-column">
        <div class="brand">
          <img v-lazy="staticImg('iApp-logo.png')" alt="" class="brand-logo" />
          <div class="brand-name font-weight-700 brand-white mgl-7">App</div>
        </div>

        <!-- ABOUT BRAND -->
        <div class="about-brand brand-white">
          The only super app for all in one daily activities access. Get the
          app:
        </div>

        <!-- DOWNLOAD BUTTON ROW  -->
        <div class="download-btn-row">
          <!-- APP STORE DOWNLOAD  -->
          <div class="app-download-btn mgr-10">
            <div class="icon icon-apple"></div>

            <div>
              <div class="text-one">Download on</div>
              <div class="text-two">App Store</div>
            </div>
          </div>

          <!-- PLAY STORE DOWNLOAD  -->
          <div class="app-download-btn">
            <div class="icon icon-google-play"></div>

            <div>
              <div class="text-one">Get it on</div>
              <div class="text-two">Google Play</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTACT COLUMN  -->
      <div class="contact-column">
        <div class="link-title">Reach Out To Us</div>

        <!-- ADDRESS  -->
        <div class="link-text-wrapper">
          <div class="icon icon-map-marker"></div>
          <div class="text">
            Clockwise Greenside House, <br />
            50 Station Road, Wood Green,<br />
            London, N22 7DE
          </div>
        </div>

        <!-- PHONE -->
        <div class="link-text-wrapper">
          <div class="icon icon-phone" style="top: 2.5px;"></div>
          <div class="text">+44 7956 065706</div>
        </div>

        <!-- EMAIL -->
        <div class="link-text-wrapper">
          <div class="icon icon-email-letter" style="top: 2.5px;"></div>
          <div class="text">info@iappworldwide.com</div>
        </div>
      </div>
    </div>

    <div class="right">
      <!-- COMPANY  -->
      <div class="link-column">
        <div class="link-title">Company</div>

        <router-link :to="{ name: 'about' }" class="link-text"
          >About Us</router-link
        >
        <router-link :to="{ name: 'blog' }" class="link-text">Blog</router-link>
        <router-link to class="link-text">Affiliates</router-link>
        <router-link :to="{ name: 'contact' }" class="link-text"
          >Contact Us</router-link
        >
      </div>

      <!-- SUPPORT  -->
      <div class="link-column">
        <div class="link-title">Support</div>

        <router-link to class="link-text">Login/Sign Up</router-link>
        <router-link :to="{ name: 'helpCenter' }" class="link-text"
          >Help Center</router-link
        >
        <router-link :to="{ name: 'superApps' }" class="link-text"
          >Super Apps</router-link
        >
      </div>

      <!-- LEGAL  -->
      <div class="link-column">
        <div class="link-title">Legal</div>

        <router-link :to="{ name: 'partner' }" class="link-text"
          >Partner With Us</router-link
        >
        <router-link :to="{ name: 'privacy' }" class="link-text"
          >Privacy Policy</router-link
        >
        <router-link :to="{ name: 'terms' }" class="link-text"
          >Terms of Service</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerDetails",
};
</script>

<style lang="scss" scoped>
.footer-details {
  @include flex-row-between-wrap;
  align-items: flex-start;

  .left {
    @include flex-row-between-nowrap;
    align-items: flex-start;
    width: 48%;

    @include breakpoint-down(xl) {
      width: 53%;
    }

    @include breakpoint-down(md) {
      width: 100%;
      margin-bottom: toRem(30);
    }

    @include breakpoint-down(sm) {
      @include flex-row-between-wrap;
    }

    .brand-column {
      width: 48%;

      @include breakpoint-down(xl) {
        width: 50%;
      }

      @include breakpoint-down(lg) {
        width: 49%;
      }

      @include breakpoint-down(md) {
        width: 48%;
      }

      @include breakpoint-down(sm) {
        margin-bottom: toRem(30);
        width: 100%;
      }

      .brand {
        @include flex-row-start-nowrap;
        margin-bottom: toRem(20);

        .brand-logo {
          @include square-shape(33);

          @include breakpoint-down(xl) {
            @include square-shape(30);
          }

          @include breakpoint-down(lg) {
            @include square-shape(27);
          }
        }

        .brand-name {
          font-size: toRem(26);
          letter-spacing: 0.02em;

          @include breakpoint-down(lg) {
            font-size: toRem(21);
          }
        }
      }

      .about-brand {
        @include font-height(14, 21);
        margin-bottom: toRem(25);
        letter-spacing: 0.01em;

        @include breakpoint-down(xl) {
          @include font-height(13.75, 21);
          letter-spacing: unset;
        }

        @include breakpoint-down(lg) {
          @include font-height(13.5, 21);
        }
      }

      .download-btn-row {
        @include flex-row-start-nowrap;

        @include breakpoint-down(xl) {
          @include flex-row-start-wrap;
        }

        @include breakpoint-down(xl) {
          .app-download-btn {
            &:last-of-type {
              margin-top: toRem(10);

              @include breakpoint-down(md) {
                margin-top: 0;
              }
            }
          }
        }
      }
    }

    .contact-column {
      width: 40%;

      @include breakpoint-down(xl) {
        width: 50%;
      }

      @include breakpoint-down(md) {
        width: 48%;
      }

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }
  }

  .right {
    width: 52%;
    @include flex-row-end-nowrap;
    align-items: flex-start;

    @include breakpoint-down(xl) {
      width: 47%;
    }

    @include breakpoint-down(lg) {
      @include flex-row-start-nowrap;
      align-items: flex-start;
      width: 47%;
    }

    @include breakpoint-down(md) {
      width: 100%;
    }

    @include breakpoint-down(xs) {
      @include flex-row-start-wrap;
    }

    .link-column {
      min-width: 19%;
      width: auto;
      max-width: 23%;
      margin-left: 11%;

      @include breakpoint-down(xl) {
        margin-left: 10%;
      }

      @include breakpoint-down(lg) {
        margin-left: 9%;
        max-width: 22%;
      }

      @include breakpoint-down(md) {
        margin-left: 0;
        min-width: 30%;
        max-width: auto;
      }

      @include breakpoint-down(xs) {
        margin-top: toRem(20);
        min-width: 100%;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }

  .link-title {
    @include font-height(18, 26);
    margin-bottom: toRem(27);
    color: $brand-white;
    font-weight: 600;

    @include breakpoint-down(xl) {
      @include font-height(16, 23);
    }

    @include breakpoint-down(lg) {
      @include font-height(15, 22);
    }
  }

  .link-text-wrapper {
    @include flex-row-start-nowrap;
    margin-bottom: toRem(14);
    align-items: flex-start;

    .icon {
      margin-right: toRem(14);
      font-size: toRem(16);
      color: $brand-white;
      position: relative;
      top: toRem(5);

      @include breakpoint-down(xl) {
        margin-right: toRem(12);
        font-size: toRem(14);
      }
    }

    .text {
      @include font-height(14.25, 21);
      color: $brand-white;

      @include breakpoint-down(xl) {
        @include font-height(14, 21);
      }

      @include breakpoint-down(lg) {
        @include font-height(13.5, 20);
      }
    }
  }

  .link-text {
    @include font-height(14.25, 21);
    @include transition(0.4s);
    margin-bottom: toRem(14);
    text-decoration: none;
    color: $brand-white;
    width: max-content;
    display: block;

    @include breakpoint-down(xl) {
      @include font-height(14, 21);
    }

    @include breakpoint-down(lg) {
      @include font-height(13.5, 20);
    }

    &:hover {
      color: $brand-red;
    }
  }
}
</style>
