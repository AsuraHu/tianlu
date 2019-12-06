import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Culture from '@/pages/culture/Culture'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/culture',
      name: 'Culture',
      component: Culture
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
