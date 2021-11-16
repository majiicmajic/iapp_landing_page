<template>
  <div class="contact-block">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div class="contact-card rounded-20 position-relative overflow-hidden">
        <!-- LEFT -->
        <div
          class="left-block"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <!-- TITLE TEXT  -->
          <div class="title-text brand-black font-weight-700">
            Send us a message
          </div>

          <!-- FORM ROW  -->
          <div class="form-row">
            <!-- NAME -->
            <div class="form-block">
              <label for="" class="label-text">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                class="form-control"
              />
            </div>

            <!-- EMAIL -->
            <div class="form-block">
              <label for="" class="label-text">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                class="form-control"
              />
            </div>
          </div>

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- PHONE -->
            <div class="form-block">
              <label for="" class="label-text">Phone number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                class="form-control"
              />
            </div>

            <!-- COMPANY -->
            <div class="form-block">
              <label for="" class="label-text">Company name (optional)</label>
              <input
                type="text"
                placeholder="Enter company name"
                class="form-control"
              />
            </div>
          </div>

          <!-- FORM ROW -->
          <div class="form-row">
            <div class="form-block w-100">
              <label for="" class="label-text">Message</label>

              <textarea
                class="form-control"
                rows="6"
                placeholder="Enter message"
              ></textarea>
            </div>
          </div>

          <button class="btn btn-block w-100 btn-primary">
            Send a Message
            <span class="icon icon-paper-plane-angle mgl-10"></span>
          </button>
        </div>

        <!-- RIGHT -->
        <div
          class="right-block brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <!-- TITLE TEXT  -->
          <div class="title-text font-weight-700">
            Contact Information
          </div>

          <!-- UNITED KINGDOM -->
          <div class="contact-data">
            <div class="icon icon-map-pin"></div>

            <div class="right">
              <div class="title-text">United Kingdom</div>
              <div class="description flex-column align-items-start">
                <p>Clockwise Greenside House</p>
                <p>50 station road, Wood Green,</p>
                <p>London, N22 7DE</p>
                <p>5 Minutes Opposite Wood Green Tube Station.</p>
              </div>
            </div>
          </div>

          <!-- EMAIL  -->
          <div class="contact-data">
            <div class="right">
              <div class="title-text">Email</div>
              <div class="description">
                support@iappworldwide.com
              </div>
            </div>
          </div>

          <!-- PHONE -->
          <div class="contact-data w-100">
            <div class="right w-100">
              <div class="title-text">Phone</div>
              <div class="description w-100">
                <div class="text">
                  +44 7956 065706
                </div>
              </div>
            </div>
          </div>

          <!-- SOCIAL  -->
          <div class="social">
            <!-- FACEBOOK -->
            <a href="https://www.facebook.com/IAppWorldwide/" class="icon">
              <span class="icon-facebook-fill"></span>
            </a>

            <!-- TWITTER -->
            <a
              href="https://m.youtube.com/channel/UCJJoTLbK7u9v-NtPw66cTqQ"
              class="icon"
            >
              <span class="icon-twitter"></span>
            </a>

            <!-- INSTAGRAM -->
            <a href="www.instagram.com/iappworldwide" class="icon">
              <span class="icon-instagram"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactBlock",
};
</script>

<style lang="scss" scoped>
.contact-block {
  .contact-card {
    margin-top: toRem(-80);
    margin-bottom: toRem(90);
    @include flex-row-between-nowrap;
    align-items: flex-start;
    box-shadow: 0 toRem(4) toRem(95) rgba(0, 0, 0, 0.07);
    background: $brand-white;
    height: auto;

    @include breakpoint-down(lg) {
      margin-top: toRem(-110);
    }

    @include breakpoint-down(md) {
      @include flex-row-between-wrap;
      margin-top: toRem(-50);
    }

    .left-block {
      width: 65%;
      padding: toRem(30) toRem(25);

      @include breakpoint-down(md) {
        width: 100%;
        margin-bottom: toRem(30);
      }

      .form-control {
        background: $brand-red-lighter !important;
      }

      .form-row {
        @include flex-row-between-wrap;
        margin-bottom: toRem(40);

        @include breakpoint-custom-down(420) {
          &:last-of-type {
            margin-top: toRem(-30);
          }
        }

        .form-block {
          width: 48%;

          @include breakpoint-custom-down(420) {
            width: 100%;

            &:last-of-type {
              margin-top: toRem(30);
            }
          }
        }
      }
    }

    .right-block {
      background: #3d2525;
      padding: toRem(30) toRem(25);
      width: 45%;
      height: 100vh;

      @include breakpoint-down(xl) {
        padding: toRem(30) toRem(20);
        height: 110vh;
      }

      @include breakpoint-down(md) {
        padding: toRem(30) toRem(35);
        width: 100%;
        height: 90vh;
      }

      @include breakpoint-down(sm) {
        padding: toRem(28) toRem(22);
        height: 93vh;
      }

      @include breakpoint-down(xs) {
        padding: toRem(28) toRem(22);
        height: 105vh;
      }
    }

    .title-text {
      @include font-height(17.5, 28);
      margin-bottom: toRem(30);

      @include breakpoint-down(xl) {
        @include font-height(16.5, 26);
        margin-bottom: toRem(25);
      }

      @include breakpoint-down(sm) {
        @include font-height(15, 25);
        margin-bottom: toRem(22);
      }
    }

    .contact-data {
      @include flex-row-start-nowrap;
      margin-bottom: toRem(35);
      align-items: flex-start;

      .icon {
        font-size: toRem(20);
        margin-right: toRem(25);
        margin-top: toRem(5);

        @include breakpoint-down(xl) {
          margin-right: toRem(20);
          font-size: toRem(17);
          margin-top: toRem(6);
        }

        @include breakpoint-down(xs) {
          display: none;
        }
      }

      .right {
        .title-text {
          @include font-height(16, 24);
          margin-bottom: toRem(5);
          font-weight: 600;

          @include breakpoint-down(xl) {
            @include font-height(15, 23);
          }

          @include breakpoint-down(sm) {
            @include font-height(14.5, 22);
          }
        }

        .description {
          @include font-height(15, 23);
          @include flex-row-between-nowrap;

          @include breakpoint-down(xl) {
            @include font-height(14, 21);
          }

          @include breakpoint-down(sm) {
            @include font-height(13, 20);
          }
        }
      }
    }

    .social {
      @include flex-row-start-nowrap;

      .icon {
        text-decoration: none;
        margin-left: 0;
        margin-right: toRem(20);
        font-size: toRem(21);
        color: $brand-white;

        @include breakpoint-down(sm) {
          font-size: toRem(18);
        }

        @include breakpoint-down(xs) {
          font-size: toRem(15);
          display: unset;
        }
      }
    }
  }
}
</style>
