import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '@/components/Calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator
  }
]

const router = new VueRouter({
  routes
})

export default router
