<template>
  <div>
    <div class="preloader" v-if="showPreloader">
      <Preloader />
    </div>

    <div class="container-fluid" v-else>
      <h1>Admin Home</h1>
    </div>
  </div>
</template>

<script>
import Preloader from "../preloader.vue";
export default {
  name: "AdminHome",
  components: {
    Preloader,
  },
  data() {
    return {
      showPreloader: true,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.showPreloader = false;
    }, 7000);
  },
};
</script>

<style></style>
