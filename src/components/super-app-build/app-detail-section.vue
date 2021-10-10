<template>
  <div class="app-detail-section">
    <div class="container px-0">
      <div class="app-detail-row">
        <!-- APP DETAIL CARD ONE -->
        <div class="app-detail-card brand-orange-bg">
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
          <div class="get-app">Get the super app</div>

          <img
            :src="staticImg('saly.png')"
            alt=""
            class="app-image app-image-one"
          />
        </div>

        <!-- APP DETAIL CARD TWO -->
        <div class="app-detail-card brand-green-bg">
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
          <div class="get-app">Get the super app</div>

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
    @include flex-row-around-nowrap;
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
