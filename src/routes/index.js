import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
// import Home from "../pages/HelloWorld.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    component: <Home />, //<Home msg="Hello Vue 3 in CodeSandbox!" />,
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
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../pages/Jobs/Jobs.vue")
  },
  {
    // https://router.vuejs.org/guide/essentials/passing-props
    // prop named MUST BE exactly like the route param
    path: "/jobs/:id",
    name: "jobDetails",
    component: () => import("../pages/Jobs/JobsDetail.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
