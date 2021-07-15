import Vue from 'vue'
import VueRouter from 'vue-router'
import LaborGrading from '@/components/LaborGrading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LaborGrading',
    component: LaborGrading
  }
]

const router = new VueRouter({
  routes
})

export default router
