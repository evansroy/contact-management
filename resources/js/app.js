import { createApp } from "vue";
import App from "../js/components/App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

App.use(Toast, {
    timeout: 3000,
});

createApp(App).use(router).mount("#app");
