<template>
  <div>
    <div class="preloader" v-if="showPreloader">
      <Preloader />
    </div>

    <div class="container-fluid p-0 m-0" v-else>
      <div class="row p-0 m-0">
        <!-- sidebar start -->
        <div
          class="sidebar position-relative"
          :class="{ sidebar: true, close: !isClicked }"
        >
          <AdminSideBar
            :isClicked="isClicked"
            @toggleSidebar="handletoggleSidebar"
          />
        </div>
        <!-- sidebar end -->

        <!-- main content section start -->
        <div class="main-content">
          <!-- navbar start -->
          <AdminNavBar />
          <!-- navbar end -->

          <!-- main-content  start -->
          <div class="main-body-container container p-0 m-0">
            <div class="row p-0 m-0 position-relative overflow-hidden">
              <!-- dashboard -->
              <div
                class="col-12 col-lg-10 col-xl-8 p-0 overflow-hidden px-3 pt-3"
                :class="{ 'marginLeft-content': !isClicked }"
              >
                <AdminDashboard />
              </div>
              <!-- carosel -->
              <div
                class="d-none d-xl-block col-xl-4 p-0 m-0 overflow-hidden sideAds"
              >
                <AdminCaroselAds />
              </div>
            </div>
          </div>

          <!-- main-content  end -->
        </div>
        <!-- main content section end -->
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "../preloader.vue";
import AdminNavBar from "./AdminNavBar.vue";
import AdminDashboard from "./AdminDashboard.vue";
import AdminSideBar from "./AdminSideBar.vue";
import AdminCaroselAds from "./AdminCaroselAds.vue";
export default {
  name: "AdminHome",
  components: {
    Preloader,
    AdminNavBar,
    AdminDashboard,
    AdminSideBar,
    AdminCaroselAds,
  },
  data() {
    return {
      showPreloader: true,
      isClicked: false,
    };
  },

  methods: {
    handletoggleSidebar() {
      this.isClicked = !this.isClicked;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showPreloader = false;
    }, 500);
  },
};
</script>

<style scoped>
.row .sidebar {
  background: transparent;
  width: 250px;
  height: 100vh;
  transition: width 0.3s ease-in-out;
}

.row .main-content {
  position: relative;
  left: 0;
  width: calc(100% - 250px);
  transition: all 0.3s ease-in-out;
}
.sidebar.close header .toggle {
  transform: translateY(-50%);
}

.sidebar.close {
  width: 88px;
}

.sideAds {
  position: fixed;
  top: 8em;
  right: -2em;
}

.marginLeft-content {
  margin-left: 60px;
}

@media (max-width: 767.98px) {
  .main-body-container {
    margin-top: 77px !important;
  }
  .row .main-content {
    width: calc(100% - 88px);
  }
  .marginLeft-content {
    margin-left: 0px;
  }
}
@media (min-width: 767.99px) {
  .main-body-container {
    margin-top: 90.9px !important;
  }
}
</style>
