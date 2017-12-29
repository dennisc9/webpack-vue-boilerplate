import Vue from 'vue'
import VueRouter from 'vue-router'

import VSample from '@/slides/VSample/VSample'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'sample', component: VSample, id: -1, props: {'slideN': -1} },
]

const router = new VueRouter({
  routes
})

export default router
