module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./public/scss/basic_scss/_colors.scss"; @import "./public/scss/basic_scss/_breakpoints.scss"; @import "./public/scss/basic_scss/_mixins.scss";`,
      },
    },
  },
};
