import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Add from '@/components/Add'
import Edit from '@/components/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
