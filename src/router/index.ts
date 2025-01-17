import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.name === 'login') {
    next()
  } else {
    if (token) {
      next()
    }else{
      next('/Login')
    }
  }
})



export default router
