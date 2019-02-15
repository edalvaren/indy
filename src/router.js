import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About'
import MainScreen from './components/HMI/MainScreen'
import AlarmWrapper from './components/Alarms/AlarmWrapper'
import Dashboard from './features/dashboard/main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainScreen
    },
    {
      path: '/Alarms',
      name: 'Alarms',
      component: AlarmWrapper
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
})
