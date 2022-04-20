import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/SignUp.vue'
import MCardList from "./views/home/MCardList.vue"
import MLogs from "./views/home/MLogs.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: MCardList
      },

      {
        path: '/logs/:id',
        component: MLogs
      }
    ]
  },

  {
    path: "/login",
    name: 'Login',
    component: Login,
  },

  {
    path: "/signup",
    name: 'Signup',
    component: Signup,
  }
]

const router = createRouter({
  history: createWebHistory('/mandarake-scraper/'),
  routes
})

export default router