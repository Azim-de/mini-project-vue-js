import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SignUp from '../components/SignUp.vue'
import LoginPage from '../components/LoginPage.vue'
import AddPage from '../components/AddPage.vue'
import UpdatePage from '../components/UpdatePage.vue'
import DataPerson from '../components/DataPerson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
   
  },
  {
    path: '/login-page',
    name: 'LoginPage',
    component: LoginPage,
   
  },
  {
    path: '/add-page',
    name: 'Addpage',
    component: AddPage,
   
  },
  {
    path: '/update-page/:id',
    name: 'UpdatePage',
    component: UpdatePage,
   
  },
  {
    path: '/data-person',
    name: 'DataPerson',
    component: DataPerson,
   
  }
 

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
