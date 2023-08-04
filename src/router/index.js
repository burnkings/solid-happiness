// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardAnalysis from '../views/DashboardAnalysis.vue';

Vue.use(VueRouter);

const routes = [
  // ... 其他路由配置
  {
    path: '/dashboard/analysis',
    name: 'DashboardAnalysis',
    component: DashboardAnalysis,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
