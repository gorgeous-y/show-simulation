import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {path: '/home', component: Home}
  ]
})

// 挂载路由导航
router.beforeEach((to, from, next) => {
  //to 将要访问的路径 
  // from 代表从哪个路径跳转而来 
  // next放行函数 next() 放行  next('/login')强制跳转
  if(to.path=='/login')return next();

  const tokenStr=window.sessionStorage.getItem('token');
  if (!tokenStr) {
    next('/login')
  }
  next()
  
})

export default router
