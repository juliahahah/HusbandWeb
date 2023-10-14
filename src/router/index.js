import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './views/page/HomePage.vue';
import Commodity from './views/page/Commodity.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage }, // 注意這裡是 component，不是 views
  { path: '/commodity', component: Commodity } // 注意這裡是 component，不是 views
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
