<template>
  <section class="scale-section brand-red-dark-bg position-relative">
    <!-- BACKGROUND STAT  -->
    <div class="wrapper">
      <div class="background-stat">$2m</div>
    </div>

    <div class="container px-3 px-sm-4 px-xl-0">
      <div class="row">
        <!-- LEFT SECTION  -->
        <div class="col-12 col-md-5 position-relative">
          <div
            class="img-frame"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img
              :src="staticImg('satisfied-customers.png')"
              alt="Satisfied Customers"
              class="customer-img"
            />
          </div>

          <!-- CIRCULAR TEXT  -->
          <img
            :src="staticImg('circular-text.svg')"
            alt="circular text"
            class="circular-text"
          />
        </div>

        <!-- RIGHT SECTION  -->
        <div class="col-12 col-md-6">
          <div class="right-section">
            <!-- INTRO TEXT  -->
            <div
              class="intro-text brand-white"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="text">GROWING</div>
              <div class="position-relative">
                <img :src="staticImg('rocket.svg')" alt="" />
              </div>
            </div>

            <!-- TITLE TEXT  -->
            <div
              class="title-text font-weight-700 brand-white"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="120"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              We scale like a wind
            </div>

            <!-- DESCRIPTION TEXT  -->
            <div
              class="description-text brand-white"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="130"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Scalling across all platform with the super app to make your day
              to day life an awesome experience. Keep surfing, you gonna love
              it.
            </div>

            <!-- STAT ROW  -->
            <div
              class="stat-row brand-white"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="140"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div class="stat-column">
                <div class="value">$2m</div>
                <div class="title">Invested in research</div>
              </div>

              <div class="stat-column">
                <div class="value">25+</div>
                <div class="title">Available Products</div>
              </div>

              <div class="stat-column">
                <div class="value">4</div>
                <div class="title">Countries on track</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "scaleSection",
};
</script>

<style lang="scss" scoped>
.scale-section {
  padding: toRem(115) 0 0;
  height: 100%;
  width: 100%;

  @include breakpoint-down(md) {
    padding: toRem(70) 0 0;
  }

  .wrapper {
    position: absolute;
    @include stretch-area;
    overflow: hidden;

    .background-stat {
      @include center-y;
      right: toRem(-170);
      top: 45%;
      @include font-height(490, 740);
      color: rgba(255, 255, 255, 0.0275);
      font-weight: 700;
      text-transform: uppercase;

      @include breakpoint-down(lg) {
        @include font-height(380, 680);
        right: toRem(-230);
      }

      @include breakpoint-down(md) {
        display: none;
      }
    }
  }

  .row {
    @include flex-row-between-wrap;
    align-items: flex-start;
    position: relative;

    .img-frame {
      position: absolute;
      top: 0;
      left: 0;

      .customer-img {
        position: relative;
        top: toRem(-30);
        width: 97%;
        height: auto;
        left: toRem(-50);

        @include breakpoint-down(xl) {
          left: toRem(-30);
        }

        @include breakpoint-down(md) {
          display: none;
        }
      }
    }

    .circular-text {
      position: absolute;
      right: toRem(20);
      top: toRem(-50);

      @include breakpoint-down(lg) {
        display: none;
      }
    }

    .right-section {
      .intro-text {
        @include flex-row-start-nowrap;
        @include font-height(17, 27);
        margin-bottom: toRem(44);
        letter-spacing: 0.265em;

        @include breakpoint-down(xl) {
          @include font-height(15.5, 25);
          margin-bottom: toRem(40);
        }

        @include breakpoint-down(lg) {
          @include font-height(13.5, 22);
          margin-bottom: toRem(30);
        }

        @include breakpoint-down(md) {
          @include font-height(12, 20);
          margin-bottom: toRem(20);
        }

        @include breakpoint-down(xs) {
          @include font-height(11, 18);
        }

        img {
          position: absolute;
          @include rectangle-shape(36, 78);
          left: toRem(8);
          top: toRem(-40);

          @include breakpoint-down(xl) {
            top: toRem(-30);
            @include rectangle-shape(28, 68);
          }

          @include breakpoint-down(xl) {
            top: toRem(-25);
            @include rectangle-shape(22, 55);
          }
        }
      }

      .title-text {
        @include font-height(46, 70);
        margin-bottom: toRem(37);

        @include breakpoint-down(xl) {
          @include font-height(40, 60);
        }

        @include breakpoint-down(lg) {
          @include font-height(30, 60);
          margin-bottom: toRem(28);
        }

        @include breakpoint-down(md) {
          @include font-height(22, 40);
          margin-bottom: toRem(18);
        }

        @include breakpoint-down(xs) {
          @include font-height(19, 38);
          margin-bottom: toRem(15);
        }
      }

      .description-text {
        @include font-height(18.25, 32);
        letter-spacing: 0.015em;
        margin-bottom: toRem(77);

        @include breakpoint-down(xl) {
          @include font-height(17.75, 30);
        }

        @include breakpoint-down(lg) {
          @include font-height(15.5, 26);
          margin-bottom: toRem(45);
        }

        @include breakpoint-down(md) {
          @include font-height(14.5, 24);
          margin-bottom: toRem(40);
        }

        @include breakpoint-down(sm) {
          @include font-height(14, 23);
        }

        @include breakpoint-down(xs) {
          @include font-height(13.5, 22);
        }
      }

      .stat-row {
        @include flex-row-between-nowrap;
        margin-bottom: toRem(35);

        .stat-column {
          @include flex-column-center;

          .value {
            @include font-height(42.5, 72);
            text-align: center;
            font-weight: 700;

            @include breakpoint-down(xl) {
              @include font-height(38, 68);
            }

            @include breakpoint-down(lg) {
              @include font-height(28, 54);
            }

            @include breakpoint-down(md) {
              @include font-height(23, 48);
            }

            @include breakpoint-down(sm) {
              @include font-height(21, 46);
            }

            @include breakpoint-down(xs) {
              @include font-height(20, 40);
            }
          }

          .title {
            @include font-height(15.25, 20);
            font-weight: 600;
            text-align: center;

            @include breakpoint-down(xl) {
              @include font-height(14.5, 18);
            }

            @include breakpoint-down(lg) {
              @include font-height(12, 17);
            }

            @include breakpoint-down(sm) {
              @include font-height(11, 16);
            }
          }
        }
      }
    }
  }
}
</style>
