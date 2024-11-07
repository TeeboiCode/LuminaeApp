import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import AdminHome from "@/components/AdminFolder/AdminHome.vue";
import preloader from "@/components/preloader.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
  {
    path: "/admin/home",
    name: "adminView",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
