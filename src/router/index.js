import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Article from '../components/article/Article.vue'
import LargeProblem from '../components/problem/LargeProblem.vue'
import SmallProblem from '../components/problem/SmallProblem.vue'
import Equipment from '../components/measurement/Equipment.vue'
import Site from '../components/measurement/Site.vue'
import Process from '../components/measurement/Process.vue'
import Algorithms from '../components/algorithm/Algorithms.vue'
import BResults from '../components/result/BResults.vue'
import SResults from '../components/result/SResults.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/article', component: Article },
        { path: '/largeproblem', component: LargeProblem },
        { path: '/smallproblem', component: SmallProblem },
        { path: '/equipment', component: Equipment },
        { path: '/site', component: Site },
        { path: '/steps', component: Process },
        { path: '/algorithms', component: Algorithms },
        { path: '/bresults', component: BResults },
        { path: '/sresults', component: SResults },
      ]
    }
  ]
})

// 挂载路由导航
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next放行函数 next() 放行  next('/login')强制跳转
  if (to.path == '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    next('/login')
  }
  next()
})

export default router
