import "@/assets/styles/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router.js";

const app = createApp(App);

app.use(router);

app.mount("#wrapper");
