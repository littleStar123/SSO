// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './assets/common.css'
import 'element-ui/lib/theme-default/index.css'
import { getCookie,delCookie } from './assets/js/cookie.js'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
	let token = getCookie('token');
	if(!token && to.path !== '/login') {
		next({
			path: '/login'
		})
	} else if(to.path == '/') {
		next({
			path: '/main'
		})
	}else{
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
