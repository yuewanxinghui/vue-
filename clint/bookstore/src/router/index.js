import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/Home',
		component: () => import('../views/Home.vue'),	
	},
	{
		path: '/center',
		component: () => import('../views/mycenter.vue')
	},
	{
		path: '/login',
		component: () => import('../views/login.vue')
	},
	{
		path: '/zhuce',
		component: () => import('../views/zhuce.vue')
	},
	{
		path: '/xiangqing',
		component: () => import('../views/xiangqing.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});


router.beforeEach((to1,from1,next)=>{
	if(to1.path == '/'||to1.path == '/Home'||to1.path == '/login'||to1.path == '/zhuce'){
		next();
	}else{
		let flag = localStorage.getItem('isLogin');
		// console.log(flag)
		if(flag){
			next();
		}else{
			next('/login')
		}
	}
})

export default router;
