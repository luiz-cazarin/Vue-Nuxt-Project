<template>
  <div class="min-h-full">
    <main>
      <Home></Home>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../layouts/Header.vue";
import Home from "./Home.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    Header,
    Home,
  },
  data() {
    return {
      title: "Super blog",
      subTitle: "desc",
    };
  },
});
</script>

