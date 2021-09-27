<template>
  <div class="base-layout">
    <router-view />
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
}
</style>
