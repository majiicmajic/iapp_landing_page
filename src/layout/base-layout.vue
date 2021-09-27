<template>
  <div class="base-layout">
    <div class="welcome text-center brand-white ifont-28 mgb-10">
      Welcome to iApp
    </div>

    <div class="description text-center brand-ash ifont-55 font-weight-700">
      Coming Soon
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/service/utilities";

export default {
  name: "baseLayout",

  mounted() {
    bgColorSetter("#0E1319");
  },
};
</script>

<style lang="scss" scoped>
.base-layout {
  @include flex-column-center;
  height: 100vh;

  .welcome {
  }
}
</style>
