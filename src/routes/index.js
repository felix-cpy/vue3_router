import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../pages/HelloWorld.vue";
// import About2 from "../pages/About.vue";

const routes = [
  {
    path: "/",
    component: <Home msg="Hello Vue 3 in CodeSandbox!" />
  },
  {
    path: "/about",
    // component: About2
    component: () => import("../pages/About.vue")
  },
  {
    path: "/testcomputed"
    , component: ()=>import("../pages/TestComputed.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
