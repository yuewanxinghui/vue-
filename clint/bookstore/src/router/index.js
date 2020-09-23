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
		path: '/wenxue',
		component: () => import('../views/shangpinxiangqing/wenxue.vue')
	},
	{
		path: '/sheke',
		component: () => import('../views/shangpinxiangqing/sheke.vue')
	},
	{
		path: '/shaoer',
		component: () => import('../views/shangpinxiangqing/shaoer.vue')
	},
	{
		path: '/yishu',
		component: () => import('../views/shangpinxiangqing/yishu.vue')
	},
	{
		path: '/shenghuo',
		component: () => import('../views/shangpinxiangqing/shenghuo.vue')
	},
	{
		path: '/wenjiao',
		component: () => import('../views/shangpinxiangqing/wenjiao.vue')
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
