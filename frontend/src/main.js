import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import "vuex-persistedstate";

// import Vue from "vue";
import VueNumber from "vue-number-animation";

const app = createApp(App);
app.use(VueNumber);

app.use(store);
app.use(router);
app.use(VueChartkick);

app.mount("#app");
