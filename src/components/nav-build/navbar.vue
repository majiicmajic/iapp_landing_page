<template>
  <div class="navbar fixed-top w-100 index-999 smooth-animation" ref="navbar">
    <div class="container px-3 px-sm-4 px-xl-0">
      <!-- NAV CONTENT  -->
      <div class="nav-content w-100 mx-auto brand-white">
        <!-- BRAND LOGO AND NAME  -->
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

        <!-- NAV OPTIONS  -->
        <div class="nav-options">
          <!-- NAV MENUS  -->
          <div class="nav-menu">
            <!-- SUPER APPS  -->
            <router-link
              :to="{ name: 'superApps' }"
              class="nav-item"
              :class="getCurrentPage === 'superApps' ? 'brand-red' : null"
            >
              <div class="text">Super Apps</div>
              <div class="icon icon-super-app"></div>
            </router-link>

            <!-- COMPANY  -->
            <router-link
              to
              class="nav-item position-relative"
              :class="inExclusionList ? 'brand-red' : null"
              @mouseenter.native="show_dropdown = true"
              @mouseleave.native="show_dropdown = false"
            >
              <div class="text">Company</div>
              <div
                class="icon chevron icon-chevron-down smooth-transition"
              ></div>

              <!-- NAV DROPDOWN  -->
              <div
                class="nav-dropdown rounded-7 brand-grey-dark-bg index-9 smooth-animation"
                v-if="show_dropdown"
              >
                <div class="inner-wrapper position-relative w-100 h-auto">
                  <div class="connector"></div>

                  <!-- ANDROID  -->
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
                    :class="
                      getCurrentPage === 'helpCenter' ? 'brand-red' : null
                    "
                    >Help & FAQ</router-link
                  >
                </div>
              </div>
            </router-link>

            <!-- PARTNER  -->
            <router-link
              :to="{ name: 'partner' }"
              class="nav-item"
              :class="getCurrentPage === 'partner' ? 'brand-red' : null"
            >
              <div class="text">Partner With Us</div>
            </router-link>

            <!-- BLOG  -->
            <router-link
              :to="{ name: 'blog' }"
              class="nav-item"
              :class="getCurrentPage === 'blog' ? 'brand-red' : null"
            >
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

        <!-- NAV MOBILE OPTION -->
        <div class="nav-mobile-option" @click="toggleMobileMenu">
          <div class="icon icon-hamburger brand-white pointer"></div>
        </div>
      </div>
    </div>

    <!-- MENU  -->
    <mobile-nav v-if="show_mobile_menu" @closeMenu="toggleMobileMenu" />
  </div>
</template>

<script>
import mobileNav from "@/components/nav-build/mobile-nav";

export default {
  name: "navbar",

  components: {
    mobileNav,
  },

  computed: {
    getCurrentPage() {
      return this.$route.name;
    },

    inExclusionList() {
      return this.exclusion_list.includes(this.getCurrentPage) ? true : false;
    },
  },

  data: () => ({
    show_dropdown: false,
    show_mobile_menu: false,
    exclusion_list: ["contact", "about"],
  }),

  mounted() {
    window.onscroll = () => {
      this.$refs.navbar.classList.toggle("scrolling-up", window.scrollY > 0);
    };
  },

  methods: {
    toggleMobileMenu() {
      this.show_mobile_menu = !this.show_mobile_menu;
    },
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

        @include breakpoint-down(xl) {
          @include square-shape(33);
        }

        @include breakpoint-down(lg) {
          @include square-shape(32);
        }

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
        font-size: toRem(28);
        letter-spacing: 0.02em;

        @include breakpoint-down(xl) {
          font-size: toRem(26);
          letter-spacing: 0.01em;
        }

        @include breakpoint-down(lg) {
          font-size: toRem(25);
          letter-spacing: unset;
        }

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

    .nav-options {
      @include flex-row-end-nowrap;

      @include breakpoint-down(md) {
        display: none;
      }

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

          @include breakpoint-down(xl) {
            margin-right: toRem(20);
          }

          @include breakpoint-down(lg) {
            margin-right: toRem(15);
          }

          .text {
            letter-spacing: 0.02em;
            font-size: toRem(16);
            font-weight: 500;

            @include breakpoint-down(xl) {
              letter-spacing: 0.01em;
              font-size: toRem(15);
            }

            @include breakpoint-down(lg) {
              font-size: toRem(13.5);
            }
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

          &:hover {
            .icon {
              transform: rotate(180deg);
            }
            border-bottom: toRem(0.75) solid rgba($brand-white, 0.6);
          }

          .nav-dropdown {
            position: absolute;
            padding: toRem(5) 0;
            top: toRem(42);
            height: auto;
            left: -50%;
            width: toRem(190);

            @include breakpoint-down(xl) {
              width: toRem(170);
            }

            .connector {
              position: absolute;
              border: toRem(1) solid transparent;
              left: 0;
              top: toRem(-24);
              height: toRem(20);
              width: toRem(110);
            }

            .nav-item {
              @include font-height(13.5, 20);
              @include flex-row-start-nowrap;
              padding: toRem(10) toRem(18);
              @include transition(0.4s);
              align-items: flex-start;
              color: $brand-ash;
              width: 100%;

              &:hover {
                background: rgba(59, 69, 76, 1);
                border: 0 !important;
              }
            }
          }
        }
      }

      .nav-buttons {
        @include flex-row-end-nowrap;
        margin-left: toRem(20);

        @include breakpoint-down(xl) {
          margin-left: toRem(14);
        }

        @include breakpoint-down(lg) {
          margin-left: toRem(12);
        }

        .btn {
          padding: toRem(2) toRem(40) !important;
          min-height: toRem(46);

          @include breakpoint-down(xl) {
            padding: toRem(2) toRem(35) !important;
            min-height: toRem(43);
            font-size: toRem(12.5);
          }

          @include breakpoint-down(lg) {
            padding: toRem(2) toRem(33) !important;
            min-height: toRem(42);
            font-size: toRem(12);
          }

          &:first-of-type {
            margin-right: toRem(30);

            @include breakpoint-down(xl) {
              margin-right: toRem(24);
            }

            @include breakpoint-down(lg) {
              margin-right: toRem(16);
            }
          }
        }
      }
    }

    .nav-mobile-option {
      display: none;

      @include breakpoint-down(md) {
        display: unset;
      }

      .icon {
        font-size: toRem(36);

        @include breakpoint-down(sm) {
          font-size: toRem(33);
        }

        @include breakpoint-down(xs) {
          font-size: toRem(32);
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
