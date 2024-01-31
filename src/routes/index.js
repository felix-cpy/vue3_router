import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../pages/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: <Home msg="Hello Vue 3 in CodeSandbox!" />,
    name: "home"
  },
  {
    path: "/about-us",
    name: "about",
    component: () => import("../pages/About.vue")
  },
  {
    path: "/testcomputed",
    component: () => import("../pages/TestComputed.vue"),
    name: "testComputedProp",
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
