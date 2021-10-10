<template>
  <div class="feature-two-section">
    <div class="container px-0">
      <!-- INTRO COLUMN  -->
      <div class="intro-column index-99">
        <!-- TITLE TEXT  -->
        <div class="intro-title-text">Ordering food is easy with iApp</div>
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
          <div class="feature-card">
            <img :src="staticImg('launch-icon.png')" alt="" class="img-one" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Launch your super app
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Open iApp and navigate to the apps section and click on iEats.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="feature-card">
            <img :src="staticImg('vendor-icon.png')" alt="" class="img-two" />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Choose a food vendor
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Select a vendor from iEats and choose the food of your choice.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="feature-card">
            <img
              :src="staticImg('delivery-icon.png')"
              alt=""
              class="img-three"
            />

            <!-- TITLE TEXT -->
            <div class="title-text brand-white text-center">
              Quick delivery is sure
            </div>

            <!-- DESCRIPTION TEXT -->
            <div class="description-text brand-white text-center">
              Once you place your order, input your address and expect delivery
              soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featureTwoSection",
};
</script>

<style lang="scss" scoped>
.feature-two-section {
  padding: toRem(80) 0;

  .intro-column {
    margin-bottom: toRem(30);
  }

  .img-one {
    @include square-shape(155);
  }

  .img-two {
    @include rectangle-shape(230, 155);
  }

  .img-three {
    @include square-shape(170);
  }
}
</style>
