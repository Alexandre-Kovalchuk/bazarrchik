import { createRouter, createWebHashHistory } from "vue-router";
import main from "@/views/main.vue";

const router = createRouter({
  history: createWebHashHistory("/bazarchik/"),
  routes: [
    {
      path: "/",
      name: "Main",
      component: main,
    },
  ],
});

export default router;
