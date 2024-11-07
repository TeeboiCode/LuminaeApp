<template>
  <div
    class="sidebar-container shadow"
    :style="{ width: isClicked ? '250px' : '88px' }"
  >
    <nav>
      <header>
        <div class="image-text mt-3">
          <span class="image">
            <img src="../../assets/image/Logo.png" alt="Luminae Logo" />
          </span>
          <div class="text header-text">
            <span class="name" :class="{ 'hidden-text': !isClicked }"
              >Luminae</span
            >
          </div>
        </div>
        <i
          class="bx bx-chevron-right toggle d-none d-sm-flex"
          @click="toggleSidebar"
        ></i>
      </header>

      <!-- links btn -->
      <div class="menu-wrapper">
        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-link p-0">
              <li v-for="link in links" :key="link.text" class="nav-link">
                <router-link
                  :to="link.route"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-title="Tooltip on right"
                >
                  <i :class="link.icon"></i>
                  <span class="text nav-text">{{ link.text }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AdminSideBar",
  props: {
    isClicked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        {
          icon: "bx bxs-dashboard",
          text: "Dashboard",
          route: "/admin",
        },
        {
          icon: "bx bxs-basket",
          text: "Categories",
          route: "/admin/categories",
        },
        {
          icon: "bx bxs-error-alt",
          text: "Disabled ",
          route: "/admin/product/disabled",
        },
        {
          icon: "bx bxs-shopping-bags",
          text: "Delivered Order",
          route: "/admin/product/delivered",
        },
        {
          icon: "bx bxs-error-alt",
          text: "Pending Order",
          route: "/admin/product/pending",
        },
        {
          icon: "bx bxs-comment",
          text: "Reviews",
          route: "/admin/product/reviews",
        },
        {
          icon: "fa-solid fa-money-bill",
          text: "Payments",
          route: "/admin/payments",
        },
        {
          icon: "fa-solid fa-right-from-bracket",
          text: "Logout",
          route: "/admin/signUp",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 10px 14px;
  background: #fff;
  transition: all 0.5s ease-in-out;
  z-index: 1200;
}

.image-text .image img {
  width: 40px;
  margin: 5.6px;
}

.sidebar-container header {
  position: relative;
}

.sidebar-container header .image-text {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
}
.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  background: #695cef;
  transform: translateY(-50%) rotate(180deg);
  -webkit-border-radius: 50%;
  transition: all 0.1s ease-in-out;
}
.menu-wrapper {
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-top: 1.5em;
}
.menu-wrapper .menu-link li {
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  list-style: none;
}

.menu-wrapper .menu-link li i {
  font-size: 20px;
  display: flex;
  align-items: center;
  min-width: 60px;
  justify-content: center;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
}

.menu-wrapper .menu-link i,
.menu-wrapper .menu-link li .text {
  color: #9fa7a6;
}

.menu-wrapper .menu-link li a:hover i,
.menu-wrapper .menu-link li a:hover .text {
  color: #fff;
}

.menu-wrapper .menu-link li a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.menu-wrapper .menu-link li a:hover {
  background: #695cef;
}

.show-text {
  opacity: 1 !important;
  transition: all 0.3s ease;
}

.hidden-text {
  transition: all 0.3s ease;
  animation: hiddenText 0.3s ease;
  opacity: 0;
}

@keyframes hiddenText {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
