import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/AppIndex.vue'
import Login from '../components/Login'
import Home from '../components/Home'
import ExamIndex from '../components/exam/Examindex.vue'
import LibraryIndex from '../components/library/LibraryIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: () => import('../components/jotter/Articles')
        },
        {
          path: '/jotter/article',
          name: 'Article',
          component: () => import('../components/jotter/ArticleDetails')
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          },},
        {
            path: '/Exam',
          name: 'Exam',
          component: ExamIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})


