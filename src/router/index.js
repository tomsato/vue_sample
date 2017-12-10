import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Contents1 from '@/components/Contents1'
import Contents2 from '@/components/Contents2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/contents1',
      component: Contents1
    },
    {
      path: '/contents2',
      component: Contents2
    }
  ]
})
