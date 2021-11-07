<template>
  <div class="mobile-menu brand-black-bg">
    <!-- TOP ROW -->
    <div class="top-row container px-3 px-sm-3 px-md-4 px-xl-5">
      <div class="nav-content w-100 mx-auto">
        <!-- APP LOGO  -->
        <router-link
          :to="{ name: 'Home' }"
          class="brand"
          style="text-decoration: none"
        >
          <img v-lazy="staticImg('iApp-logo.png')" alt="" class="brand-logo" />
          <div class="brand-name font-weight-900 brand-white mgl-7">
            App
          </div>
        </router-link>

        <!-- MENU TOGGLE  -->
        <div class="menu-toggler smooth-transition" @click="$emit('closeMenu')">
          <div
            class="icon icon-close brand-white smooth-transition pointer"
            title="Menu"
          ></div>
        </div>
      </div>
    </div>

    <!-- MENU ROW -->
    <div class="bottom-row container px-3 px-md-4 px-xl-5">
      <div class="nav-items">
        <!-- ABOUT LINK  -->
        <router-link :to="{ name: 'superApps' }" class="item"
          >Super Apps</router-link
        >
        <!-- DOWNLOADS LINK  -->
        <div class="item">
          <div
            class="item-wrapper d-flex justify-content-start align-items-center"
            @click="toggleMobileDropdown"
          >
            <div class="text">Company</div>
            <div
              class="icon icon-caret-down"
              :class="{ 'rotate-180': show_mobile_dropdown }"
            ></div>
          </div>

          <!-- NAV DROPDOWN  -->
          <div
            class="nav-dropdown rounded-4 brand-grey-dark-bg index-1 smooth-animation"
            v-if="show_mobile_dropdown"
          >
            <div class="inner-wrapper position-relative w-100 h-auto">
              <router-link
                :to="{ name: 'about' }"
                :class="getCurrentPage === 'about' ? 'brand-red' : null"
                class="nav-item"
                >About</router-link
              >

              <router-link
                :to="{ name: 'contact' }"
                class="nav-item"
                :class="getCurrentPage === 'contact' ? 'brand-red' : null"
                >Contact Us</router-link
              >

              <router-link to class="nav-item">Affilates</router-link>

              <router-link
                :to="{ name: 'helpCenter' }"
                class="nav-item"
                :class="getCurrentPage === 'helpCenter' ? 'brand-red' : null"
                >Help & FAQ</router-link
              >
            </div>
          </div>
        </div>

        <!-- PARTNER  -->
        <router-link
          :to="{ name: 'partner' }"
          class="item"
          :class="getCurrentPage === 'partner' ? 'brand-red' : null"
        >
          <div class="text">Partner With Us</div>
        </router-link>

        <!-- BLOG  -->
        <router-link
          :to="{ name: 'blog' }"
          class="item"
          :class="getCurrentPage === 'blog' ? 'brand-red' : null"
        >
          <div class="text">Blog</div>
        </router-link>

        <!-- LOGIN BUTTON  -->
        <button class="btn btn-outline">Login</button>

        <!-- LOGIN BUTTON  -->
        <button class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileMenu",

  computed: {
    getCurrentPage() {
      return this.$route.name;
    },
  },

  data: () => ({
    show_mobile_dropdown: false,
  }),

  methods: {
    toggleMobileDropdown() {
      this.show_mobile_dropdown = !this.show_mobile_dropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide-left {
  0%,
  30% {
    margin-left: -50px;
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.mobile-menu {
  @include fixed-display-area;
  animation: slide-left 0.7s ease-in-out forwards;

  .top-row {
    padding: toRem(24) 0;
    @include transition(0.3s);

    .nav-content {
      @include flex-row-between-nowrap;

      .brand {
        @include flex-row-start-nowrap;

        .brand-logo {
          @include breakpoint-down(md) {
            @include square-shape(35);
          }

          @include breakpoint-down(sm) {
            @include square-shape(32);
          }

          @include breakpoint-down(xs) {
            @include square-shape(30);
          }
        }

        .brand-name {
          @include breakpoint-down(md) {
            font-size: toRem(27);
          }

          @include breakpoint-down(sm) {
            font-size: toRem(25);
          }

          @include breakpoint-down(xs) {
            font-size: toRem(22.5);
          }
        }
      }

      .menu-toggler {
        .icon {
          font-size: toRem(30);
        }
      }
    }
  }

  .bottom-row {
    margin-top: toRem(5);

    .nav-items {
      @include flex-column-start-start;
      padding-left: toRem(5);

      .item {
        position: relative;
        @include font-height(18, 22);
        margin: toRem(15) 0;
        color: $brand-white;
        font-weight: 600;
        width: max-content;
        text-decoration: none;

        @include breakpoint-down(sm) {
          @include font-height(16, 24);
          margin: toRem(10) 0;
        }

        @include breakpoint-down(xs) {
          @include font-height(14, 22);
        }

        .icon {
          @include transition(0.5s);
          margin-left: toRem(6);
          font-size: toRem(21);
        }

        .nav-dropdown {
          position: relative;
          padding: toRem(9) toRem(8);
          top: toRem(13);
          height: auto;
          left: 0;
          width: toRem(280);
          box-shadow: 0 toRem(18) toRem(80) rgba($brand-black, 0.04),
            0 toRem(11.6667) toRem(46.8519) rgba($brand-black, 0.0303704),
            0 toRem(6.93333) toRem(25.4815) rgba($brand-black, 0.0242963),
            0 toRem(3.6) toRem(13) rgba($brand-black, 0.02),
            0 toRem(1.46667) toRem(6.51852) rgba($brand-black, 0.0157037),
            0 toRem(0.333333) toRem(3.14815) rgba($brand-black, 0.00962963);

          .nav-item {
            @include flex-row-start-nowrap;
            align-items: flex-start;
            padding: toRem(10) toRem(14);
            border-radius: toRem(4);
            @include transition(0.4s);
            text-decoration: none;
            font-weight: normal;

            .title {
              @include font-height(13, 19);
              color: $brand-white;
            }
            &:hover {
              background: #f2f2f2;

              .title {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .btn {
        margin-top: toRem(30);
        font-size: toRem(14);

        @include breakpoint-down(md) {
          width: 50%;
        }

        @include breakpoint-down(sm) {
          width: 100%;
        }
      }
    }
  }
}
</style>
