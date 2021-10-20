<template>
  <div class="contact-block">
    <div class="container px-0">
      <div class="contact-card rounded-20 position-relative overflow-hidden">
        <!-- LEFT -->
        <div class="left-block">
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
        <div class="right-block brand-white">
          <!-- TITLE TEXT  -->
          <div class="title-text font-weight-700">
            Contact Information
          </div>

          <!-- UNITED KINGDOM -->
          <div class="contact-data">
            <div class="icon icon-map-pin"></div>

            <div class="right">
              <div class="title-text">United Kingdom</div>
              <div class="description">
                Clockwise Greenside House 50 station road, Wood Green, London,
                N22 7DE - 5 Minutes Opposite Wood Green Tube Station.
              </div>
            </div>
          </div>

          <!-- GHANA -->
          <div class="contact-data">
            <div class="icon icon-map-pin"></div>

            <div class="right">
              <div class="title-text">Ghana</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              </div>
            </div>
          </div>

          <!-- NIGERIA -->
          <div class="contact-data">
            <div class="icon icon-map-pin"></div>

            <div class="right">
              <div class="title-text">Nigeria</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              </div>
            </div>
          </div>

          <!-- DUBAI -->
          <div class="contact-data">
            <div class="icon icon-map-pin"></div>

            <div class="right">
              <div class="title-text">Dubai</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              </div>
            </div>
          </div>

          <!-- EMAIL  -->
          <div class="contact-data">
            <div class="right">
              <div class="title-text">Email</div>
              <div class="description">
                impactamillionlives2021@gmail.com
              </div>
            </div>
          </div>

          <!-- PHONE -->
          <div class="contact-data w-100">
            <div class="right w-100">
              <div class="title-text">Phone</div>
              <div class="description w-100">
                <div class="text">
                  +233-57-580-6379
                </div>

                <div class="social">
                  <!-- FACEBOOK -->
                  <a href="" class="icon">
                    <span class="icon-facebook-fill"></span>
                  </a>

                  <!-- TWITTER -->
                  <a href="" class="icon">
                    <span class="icon-twitter"></span>
                  </a>

                  <!-- INSTAGRAM -->
                  <a href="" class="icon">
                    <span class="icon-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
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

    .left-block {
      width: 65%;
      padding: toRem(30) toRem(25);

      .form-control {
        background: $brand-red-lighter !important;
      }

      .form-row {
        @include flex-row-between-nowrap;
        margin-bottom: toRem(40);

        .form-block {
          width: 48%;
        }
      }
    }

    .right-block {
      background: #3d2525;
      padding: toRem(30) toRem(25);
      width: 45%;
      height: 105vh;
    }

    .title-text {
      @include font-height(17.5, 28);
      margin-bottom: toRem(30);
    }

    .contact-data {
      @include flex-row-start-nowrap;
      margin-bottom: toRem(25);
      align-items: flex-start;

      .icon {
        font-size: toRem(23);
        margin-right: toRem(28);
        margin-top: toRem(5);
      }

      .right {
        .title-text {
          @include font-height(18, 26);
          margin-bottom: toRem(8);
          font-weight: 600;
        }

        .description {
          @include font-height(15.5, 25);
          @include flex-row-between-nowrap;

          .social {
            @include flex-row-end-nowrap;

            .icon {
              text-decoration: none;
              margin-left: toRem(14);
              margin-right: 0;
              font-size: toRem(23);
              color: $brand-white;
            }
          }
        }
      }
    }
  }
}
</style>
