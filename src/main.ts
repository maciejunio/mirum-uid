import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap-4-grid/css/grid.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
