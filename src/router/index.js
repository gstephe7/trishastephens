import Vue from 'vue'
import Router from 'vue-router'

// import components
import Home from '@/components/home/home'
import Mortgage from '@/components/mortgage/Mortgage'
import HomeValue from '@/components/homeValue/HomeValue'
import HomeValueConfirmed from '@/components/homeValue/HomeValueConfirmed'
import Contact from '@/components/contact/Contact'
import Areas from '@/components/areas/Areas.vue'
import AreaDetails from '@/components/areas/AreaDetails'
import Clients from '@/components/admin/Clients'
import Login from '@/components/admin/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/homeValue',
      name: 'HomeValue',
      component: HomeValue
    },
    {
      path: '/homeValue/confirmed',
      name: 'HomeValueConfirmed',
      component: HomeValueConfirmed
    },
    {
      path: '/areas',
      name: 'Areas',
      component: Areas
    },
    {
      path: '/areas/:area',
      name: 'AreaDetails',
      component: AreaDetails
    },
    {
      path: '/mortgage-affordability-calculator',
      name: 'Mortgage',
      component: Mortgage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Clients,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/admin/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
