import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import search from '../pages/search/search.vue'
import order from '../pages/order/order.vue'
import mcenter from '../pages/mcenter/mcenter.vue'
import login from '../pages/login/login.vue'
import shops from '../pages/shops/shops.vue'
import goods from '../pages/shops/goods/goods.vue'
import rating from '../pages/shops/rating/rating.vue'
import shopinfo from '../pages/shops/shopinfo/shopinfo.vue'

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
      path: '/shops',
      component: shops,
      children: [
        {
          path: '/shops/goods',
          name: 'goods',
          component: goods
        },
        {
          path: '/shops/rating',
          name: 'rating',
          component: rating
        },
        {
          path: '/shops/shopinfo',
          name: 'shopinfo',
          component: shopinfo
        },
        {
          path: '/',
          redirect: '/shops/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
