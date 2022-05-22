import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

Vue.config.productionTip = false;
// creating an event bus to share data between components
export const eventBus = new Vue();
// this filter is responsible for handling currency displaying
Vue.filter("currency", value => {
  return  value +" "+ "SAR";
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
