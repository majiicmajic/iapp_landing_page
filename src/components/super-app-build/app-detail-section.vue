<template>
  <div class="app-detail-section">
    <div class="container px-3 px-sm-4 px-xl-0">
      <div class="app-detail-row">
        <!-- APP DETAIL CARD ONE -->
        <div
          class="app-detail-card brand-orange-bg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <!-- TITLE TEXT -->
          <div class="title-text">
            Chatting becomes easy when you surf iApp.
          </div>

          <!-- DESCRIPTION -->
          <div class="description">
            You can aswell chat with your friends, families and lover directly
            with iChat.
          </div>

          <!-- GET APP LINK -->
          <a href="#superAppCTA" class="get-app">Get the super app</a>

          <img
            :src="staticImg('saly.png')"
            alt=""
            class="app-image app-image-one"
          />
        </div>

        <!-- APP DETAIL CARD TWO -->
        <div
          class="app-detail-card brand-green-bg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <!-- TITLE TEXT -->
          <div class="title-text">
            You can book a lodge directly from iApp.
          </div>

          <!-- DESCRIPTION -->
          <div class="description">
            iLodge is built to make your vacation, honeymoon or your quick lodge
            easy to book.
          </div>

          <!-- GET APP LINK -->
          <a href="#superAppCTA" class="get-app">Get the super app</a>

          <img
            :src="staticImg('hotel.png')"
            alt=""
            class="app-image app-image-two"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appDetailSection",
};
</script>

<style lang="scss" scoped>
.app-detail-section {
  padding: toRem(140) 0;

  .app-detail-row {
    @include flex-row-around-wrap;
    align-items: flex-start;
  }

  .app-image-one {
    @include rectangle-shape(250, 340);
    margin-top: -25px;
  }

  .app-image-two {
  }
}
</style>
