import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    RadioButton,
    Breadcrumb,
    BreadcrumbItem,
    Empty,
    Pagination
} from 'element-ui'

// 全局导入 import 'element-ui/lib/theme-chalk/index.css'(报错问题);
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(RadioButton)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Empty)
Vue.use(Pagination)

// Message需要全局挂载 和以上不一样，$message是自定义属性 只要合法即可
Vue.prototype.$message = Message
// 不能连续引入 Vue.use(Button,Form,FormItem,Input)写法错误
