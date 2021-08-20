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
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
