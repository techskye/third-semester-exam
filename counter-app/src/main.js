import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Counter from "./MyCounter.vue";
import ErrorPage from "./ErrorPage";
import store from "./components/store";

const routes = [
  { path: "/", redirect: "/counter", component: App },
  { path: "/counter", name: "counter", component: Counter },
  { path: "/:catchAll(.*)*", name: "error", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
