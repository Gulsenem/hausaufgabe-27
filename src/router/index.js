import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/Einkaufsliste',
    name: 'Einkaufsliste',
    component: () => import('../views/Einkaufsliste.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
