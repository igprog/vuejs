import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import home from '@/pages/home'
import client from '@/pages/client'
import clients from '@/pages/clients'
import test from '@/pages/test'
import user from '@/pages/user'
import settings from '@/pages/settings'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: home
    },
    {
      path: '/client/:id',
      name: 'client',
      component: client
    },
    {
      path: '/clients',
      name: 'clients',
      component: clients
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})