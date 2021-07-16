import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Main from '@/components/Main.vue'
import LaborGrading from '@/components/LaborGrading.vue'
import HealthGrading from '@/components/HealthGrading.vue'
import Calculation from '@/components/Calculation.vue'

// 導入全域樣式
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/Main',
    children: [
      { path: '/Main', component: Main },
      { path: '/LaborGrading', component: LaborGrading },
      { path: '/HealthGrading', component: HealthGrading },
      { path: '/Calculation', component: Calculation }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
