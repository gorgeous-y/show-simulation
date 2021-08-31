import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 表单
import './plugins/element.js'
// 全局
import './assets/css/global.css'
// 字体
import './assets/fonts/iconfont.css'

import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL='http://114.115.243.133:8888/api/private/v1'
// 添加拦截器，在头文件加入token 
axios.interceptors.request.use(config=>{
  // 挂载一个Authorization的请求头
  config.headers.Authorization =window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
