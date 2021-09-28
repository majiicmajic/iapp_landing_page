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

        <router-link to class="link-text">About Us</router-link>
        <router-link to class="link-text">Blog</router-link>
        <router-link to class="link-text">Affiliates</router-link>
        <router-link to class="link-text">Contact Us</router-link>
      </div>

      <!-- SUPPORT  -->
      <div class="link-column">
        <div class="link-title">Support</div>

        <router-link to class="link-text">Login/Sign Up</router-link>
        <router-link to class="link-text">Help Center</router-link>
        <router-link to class="link-text">Super Apps</router-link>
      </div>

      <!-- LEGAL  -->
      <div class="link-column">
        <div class="link-title">Legal</div>

        <router-link to class="link-text">Partner With Us</router-link>
        <router-link to class="link-text">Privacy Policy</router-link>
        <router-link to class="link-text">Terms of Service</router-link>
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

  .left {
    @include flex-row-between-nowrap;
    align-items: flex-start;
    width: 48%;

    .brand-column {
      width: 48%;

      .brand {
        @include flex-row-start-nowrap;
        margin-bottom: toRem(20);

        .brand-logo {
          @include square-shape(33);
        }

        .brand-name {
          font-size: toRem(26);
          letter-spacing: 0.02em;
        }
      }

      .about-brand {
        @include font-height(14, 21);
        margin-bottom: toRem(25);
        letter-spacing: 0.01em;
      }

      .download-btn-row {
        @include flex-row-start-nowrap;
      }
    }

    .contact-column {
      width: 40%;
    }
  }

  .right {
    width: 52%;
    @include flex-row-end-nowrap;
    align-items: flex-start;

    .link-column {
      min-width: 19%;
      width: auto;
      max-width: 23%;
      margin-left: 11%;
    }
  }

  .link-title {
    @include font-height(18, 26);
    margin-bottom: toRem(27);
    color: $brand-white;
    font-weight: 600;
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
    }

    .text {
      @include font-height(14.25, 21);
      color: $brand-white;
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

    &:hover {
      color: $brand-red;
    }
  }
}
</style>
