<template>
  <div class="story-section">
    <div class="container px-0">
      <!-- STATS ROW -->
      <div class="stats-row">
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
        <div class="title-text text-center font-weight-700 brand-white">
          How it all started
        </div>

        <p class="description text-center">
          iApp is a platform which impact millions of lives to become
          financially stable by making day to day activities done easily. From
          one sector to another sector of the economy across the Globe and
          majorly business growth in Africa.
        </p>

        <p class="description text-center">
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

  .stats-row {
    @include flex-row-center-nowrap;
    margin-bottom: toRem(140);

    .stat {
      margin: 0 toRem(25) 0 toRem(25);
      color: $brand-white;

      .value {
        @include font-height(44, 60);
        text-align: center;
        font-weight: 700;
      }

      .text {
        @include font-height(15.5, 20);
        text-align: center;
      }
    }
  }

  .about-row {
    @include flex-column-center;

    .title-text {
      @include font-height(40, 50);
      margin-bottom: toRem(20);
    }

    .description {
      @include font-height(19, 28);
      margin-bottom: toRme(15);
      color: $brand-white;
      width: 54%;
    }
  }
}
</style>
