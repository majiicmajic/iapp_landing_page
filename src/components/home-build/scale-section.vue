<template>
  <section class="scale-section brand-red-dark-bg position-relative">
    <!-- BACKGROUND STAT  -->
    <div class="wrapper">
      <div class="background-stat">$2m</div>
    </div>

    <div class="container px-0">
      <div class="row">
        <!-- LEFT SECTION  -->
        <div class="col-12 col-md-5 position-relative">
          <div class="img-frame">
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
            <div class="intro-text brand-white">
              <div class="text">GROWING</div>
              <div class="position-relative">
                <img :src="staticImg('rocket.svg')" alt="" />
              </div>
            </div>

            <!-- TITLE TEXT  -->
            <div class="title-text font-weight-700 brand-white">
              We scale like a wind
            </div>

            <!-- DESCRIPTION TEXT  -->
            <div class="description-text brand-white">
              Scalling across all platform with the super app to make your day
              to day life an awesome experience. Keep surfing, you gonna love
              it.
            </div>

            <!-- STAT ROW  -->
            <div class="stat-row brand-white">
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
    }
  }

  .row {
    @include flex-row-between-nowrap;
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
      }
    }

    .circular-text {
      position: absolute;
      right: toRem(20);
      top: toRem(-50);
    }

    .right-section {
      .intro-text {
        @include flex-row-start-nowrap;
        @include font-height(17, 27);
        margin-bottom: toRem(44);
        letter-spacing: 0.265em;

        img {
          position: absolute;
          @include rectangle-shape(36, 78);
          left: toRem(8);
          top: toRem(-40);
        }
      }

      .title-text {
        @include font-height(46, 70);
        margin-bottom: toRem(37);
      }

      .description-text {
        @include font-height(18.25, 32);
        letter-spacing: 0.015em;
        margin-bottom: toRem(77);
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
          }

          .title {
            @include font-height(15.25, 20);
            font-weight: 600;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
