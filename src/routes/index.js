import { createWebHistory } from "vue-router";
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../pages/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: <Home msg="Hello Vue 3 in CodeSandbox!" />,
  },
  {
    path: "/about",
    component: () => import("../pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
