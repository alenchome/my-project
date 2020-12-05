import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import search from '../pages/search/search.vue'
import order from '../pages/order/order.vue'
import mcenter from '../pages/mcenter/mcenter.vue'
import login from '../pages/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        showbtmlist: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        showbtmlist: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta:{
        showbtmlist: true
      }
    },
    {
      path: '/mcenter',
      name: 'mcenter',
      component: mcenter,
      meta:{
        showbtmlist: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
