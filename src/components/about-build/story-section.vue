<template>
  <div class="story-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- STATS ROW -->
      <div
        class="stats-row"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="stat">
          <div class="value">$2m</div>
          <div class="text">Invested in research</div>
        </div>

        <div class="stat">
          <div class="value">25+</div>
          <div class="text">Available Products</div>
        </div>

        <div class="stat">
          <div class="value">4</div>
          <div class="text">Countries on track</div>
        </div>
      </div>

      <!-- STORY ROW -->
      <div class="about-row">
        <div
          class="title-text text-center font-weight-700 brand-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="120"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          How it all started
        </div>

        <p
          class="description text-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          iApp is a platform which impact millions of lives to become
          financially stable by making day to day activities done easily. From
          one sector to another sector of the economy across the Globe and
          majorly business growth in Africa.
        </p>

        <p
          class="description text-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="160"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          With iApp SuperApp, you can book a ride, lodge, order for food or even
          chat with your loved one’s. The goal is to make life easier.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "storySection",
};
</script>

<style lang="scss" scoped>
.story-section {
  padding: toRem(60) 0 toRem(90);

  @include breakpoint-down(xl) {
    padding: toRem(60) 0 toRem(30);
  }

  @include breakpoint-down(sm) {
    padding: toRem(30) 0 toRem(30);
  }

  .stats-row {
    @include flex-row-center-nowrap;
    margin-bottom: toRem(140);

    @include breakpoint-down(sm) {
      margin-bottom: toRem(100);
    }

    .stat {
      margin: 0 toRem(25) 0 toRem(25);
      color: $brand-white;

      @include breakpoint-down(sm) {
        margin: 0 toRem(15) 0 toRem(15);
      }

      @include breakpoint-down(xs) {
        margin: 0 toRem(10) 0 toRem(10);
      }

      .value {
        @include font-height(44, 60);
        text-align: center;
        font-weight: 700;

        @include breakpoint-down(xl) {
          @include font-height(38, 52);
        }

        @include breakpoint-down(lg) {
          @include font-height(35, 48);
        }

        @include breakpoint-down(sm) {
          @include font-height(32, 48);
        }

        @include breakpoint-down(xs) {
          @include font-height(30, 48);
        }
      }

      .text {
        @include font-height(15.5, 20);
        text-align: center;

        @include breakpoint-down(xl) {
          @include font-height(15, 19);
        }

        @include breakpoint-down(sm) {
          @include font-height(14, 19);
        }

        @include breakpoint-down(xs) {
          @include font-height(13, 19);
        }
      }
    }
  }

  .about-row {
    @include flex-column-center;

    .title-text {
      @include font-height(40, 50);
      margin-bottom: toRem(20);

      @include breakpoint-down(xl) {
        @include font-height(32, 45);
      }

      @include breakpoint-down(lg) {
        @include font-height(28, 42);
      }

      @include breakpoint-down(sm) {
        @include font-height(24, 41);
      }

      @include breakpoint-down(xs) {
        @include font-height(22, 41);
      }
    }

    .description {
      @include font-height(19, 28);
      margin-bottom: toRme(15);
      color: $brand-white;
      width: 54%;

      @include breakpoint-down(xl) {
        @include font-height(17, 28);
        width: 65%;
      }

      @include breakpoint-down(lg) {
        @include font-height(16, 26);
        width: 70%;
      }

      @include breakpoint-down(md) {
        @include font-height(15.5, 26);
        width: 87%;
      }

      @include breakpoint-down(sm) {
        @include font-height(15.25, 26);
        width: 90%;
      }

      @include breakpoint-down(xs) {
        @include font-height(14.5, 26);
        width: 95%;
      }
    }
  }
}
</style>
