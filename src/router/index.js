import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/home'),
    redirect: '/home',
    children: [
      { path: '/home', name: 'home', component: () => import('@/views/zhuye') },
      // 资源管理-工装管理
      { path: '/explorer/frock', name: 'frock', component: () => import('@/views/explorer/frock') },
      // 资源管理-设备管理
      { path: '/explorer/facility', name: 'facility', component: () => import('@/views/explorer/facility') }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
