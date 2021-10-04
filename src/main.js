import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// IMPORT APPLICATION STYLING LINKS
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "../public/css/app.css";

// IMPORT THIRD PARTY PLUGINS
import VueLazyload from "vue-lazyload";
import Meta from "vue-meta";
import { mixin as clickaway } from "vue-clickaway";

import AOS from "aos";
import carousel from "vue-owl-carousel";
import { renderAssets } from "@/service/asset-helper";

Vue.use(Meta);
Vue.use(VueLazyload);
Vue.mixin(clickaway);
Vue.mixin(renderAssets);
AOS.init();

Vue.component("carousel", carousel);

// EVENT BUS
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
