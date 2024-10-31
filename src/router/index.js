import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminLoginView from "@/views/AdminLoginView.vue";
import AdminHome from "@/components/Admin/AdminHome.vue";
import preloader from "@/components/preloader.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: AdminLoginView,
  },
  {
    path: "/admin",
    name: "AdminHome",
    component: AdminHome,
  },
  {
    path: "/preloader",
    name: "preloader",
    component: preloader,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
