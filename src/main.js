import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.css";

import VueLazyloadNext from "vue-lazyload-next";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueClickAway from "vue3-click-away";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "https://dash.ssm.akarinext.org";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(VueClickAway)
  .use(VueLazyloadNext)
  .use(VueSweetalert2)
  .mount("#app");
