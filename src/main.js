import App from "@/App.vue";
import router from "@/router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import VueCarousel from 'vue-carousel';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
