<template>
  <div class="navbar fixed-top w-100 index-999 smooth-animation" ref="navbar">
    <div class="container px-0">
      <!-- NAV CONTENT  -->
      <div class="nav-content w-100 mx-auto brand-white">
        <!-- BRAND LOGO AND NAME  -->
        <div class="brand">
          <img v-lazy="staticImg('iApp-logo.png')" alt="" class="brand-logo" />
          <div class="brand-name font-weight-900 brand-white mgl-7">App</div>
        </div>

        <!-- NAV OPTIONS  -->
        <div class="nav-options">
          <!-- NAV MENUS  -->
          <div class="nav-menu">
            <!-- SUPER APPS  -->
            <router-link to class="nav-item">
              <div class="text">Super Apps</div>
              <div class="icon icon-super-app"></div>
            </router-link>

            <!-- COMPANY  -->
            <router-link to class="nav-item">
              <div class="text">Company</div>
              <div class="icon chevron icon-chevron-down"></div>
            </router-link>

            <!-- PARTNER  -->
            <router-link to class="nav-item">
              <div class="text">Partner With Us</div>
            </router-link>

            <!-- BLOG  -->
            <router-link to class="nav-item">
              <div class="text">Blog</div>
            </router-link>
          </div>

          <!-- NAV BUTTONS  -->
          <div class="nav-buttons">
            <!-- LOGIN BUTTON  -->
            <button class="btn btn-outline">Log In</button>

            <!-- REGISTER BUTTON  -->
            <button class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",

  mounted() {
    window.onscroll = () => {
      this.$refs.navbar.classList.toggle("scrolling-up", window.scrollY > 0);
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: toRem(30) 0;

  .nav-content {
    @include flex-row-between-nowrap;

    .brand {
      @include flex-row-start-nowrap;

      .brand-logo {
        @include square-shape(34);
      }

      .brand-name {
        font-size: toRem(28);
        letter-spacing: 0.02em;
      }
    }

    .nav-options {
      @include flex-row-end-nowrap;

      .nav-menu {
        @include flex-row-end-nowrap;

        .nav-item {
          @include flex-row-center-nowrap;
          @include transition(0.4s);
          margin-right: toRem(30);
          color: $brand-white;
          text-decoration: none;
          padding: 0 toRem(1) toRem(6);
          border-bottom: 0 solid transparent;

          &:hover {
            border-bottom: toRem(0.75) solid rgba($brand-white, 0.6);
          }

          .text {
            letter-spacing: 0.02em;
            font-size: toRem(16);
            font-weight: 500;
          }

          .icon {
            font-size: toRem(13);
            margin-left: toRem(10);
          }

          .chevron {
            font-size: toRem(17);
            margin-left: toRem(8);
            position: relative;
            top: toRem(1.5);
          }
        }
      }

      .nav-buttons {
        @include flex-row-end-nowrap;
        margin-left: toRem(20);

        .btn {
          padding: toRem(2) toRem(40) !important;
          min-height: toRem(46);

          &:first-of-type {
            margin-right: toRem(30);
          }
        }
      }
    }
  }
}

.scrolling-up {
  padding: toRem(14) 0;
  background: $brand-black;
}

.scrolling-down {
  display: none;
}
</style>
