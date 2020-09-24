import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [{
<<<<<<< HEAD
	path: '/',
	component: Home
},
{
	path: '/Home',
	component: () => import('../views/Home.vue'),

	children: [
		{
			path: 'search',
			component: () => import('../views/wgh/search.vue')
		},
	]
},


{
	path: '/wenxue',
	component: () => import('../views/shangpinxiangqing/wenxue.vue'),
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
},

{
	path: '/table1',
	component: () => import('../components/ljm/table1.vue'),
},
=======
		path: '/',
		component: Home
	},
	{
		path: '/Home',
		component: () => import('../views/Home.vue'),
		// children: [
		// 	{
		// 		path: 'shoptip',
		// 		component: () => import('../views/leftfenlei/shoptip.vue'),
		// 		children: [{
		// 			path: 'wx1',
		// 			component: () => import('../views/leftfenlei/wx.vue')
		// 		}]
		// 	}
		// ]
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
		component: () => import('../components/sxf/goods.vue')
	},


	{
		path: '/table1',
		component: () => import('../components/ljm/table1.vue'),
	},
	{
		path: '/car',
		component: () => import('../components/zsx/car.vue'),
	}
]
>>>>>>> 847407f25882227193a3ca01a91ce8eb45398ffd


const router = new VueRouter({
	mode: 'history',
	routes
});


router.beforeEach((to1, from1, next) => {
	if (to1.path == '/' || to1.path == '/Home' || to1.path == '/login' || to1.path == '/zhuce') {
		next();
	} else {
		let flag = localStorage.getItem('isLogin');
<<<<<<< HEAD

		// console.log(flag)
		if (flag) {
			next();

			let admin = localStorage.getItem("admin");
			// console.log(flag, admin)
			if (admin == 1) {
				next()
			} else if (flag == 1) {
				next();
			} else if (flag == 0) {
				next('/login')

			} else {
				next('/login')
			}

=======
		// console.log(flag)
		if (flag) {
			next();
		}
		let admin = localStorage.getItem("admin");
		console.log(flag, admin)
		if (admin == 1) {
			next()
		} else if (flag == 1) {
			next();
		} else if (flag == 0) {
			next('/login')
		} else {
			next('/login')
>>>>>>> 847407f25882227193a3ca01a91ce8eb45398ffd
		}
	}
})



export default router;
