import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import Misskey from "../views/Misskey.vue";
import login from "../views/login.vue";
import Settings from "../views/User/Settings.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/misskey",
    name: "Misskey",
    component: Misskey
  },
  {
    path: "/login",
    name: "Login",
    component: login
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes
});

export default router;
