import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(Element);

axios.defaults.baseURL="http://192.168.3.184:7001"

//允许浏览器请求时携带cookie
axios.defaults.withCredentials=true
Vue.prototype.$axios=axios
// Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
