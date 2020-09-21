import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
