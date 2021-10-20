<template>
  <div class="base-layout">
    <!-- NAVBAR  -->
    <navbar />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER  -->
    <footer-base />
  </div>
</template>

<script>
import { bgColorSetter } from "@/service/utilities";
import navbar from "@/components/nav-build/navbar";
import footerBase from "@/components/footer-build/footer-base";

export default {
  name: "baseLayout",

  components: {
    navbar,
    footerBase,
  },

  mounted() {
    bgColorSetter("#0E1319");
  },
};
</script>

<style lang="scss" scoped></style>
