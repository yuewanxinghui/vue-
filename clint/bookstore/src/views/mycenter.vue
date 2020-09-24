<template>
	<div id="box">
		<myhead :info='infos'></myhead>
		<tabbar></tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				infos: ''
			}
		},
		components: {
			myhead: () => import('../components/cyf/myhead.vue'),
			tabbar: () => import('../components/cyf/tabbar.vue')
		},
		mounted() {
			let loading = localStorage.getItem('loading'); //loading是当前登录的id
			// console.log(loading)
			this.$axios.post('/user', {
					id: loading
				})
				.then((data) => {
					// console.log(data)
					this.infos = data.data[0]
				})
		},
<<<<<<< HEAD
		updated() {
			let loading = localStorage.getItem('loading'); //loading是当前登录的id
			// console.log(loading)
			this.$axios.post('/user', {
					id: loading
				})
				.then((data) => {
					// console.log(data)
					this.infos = data.data[0]
				})
		}
=======
		// updated() {
		// 	let loading = localStorage.getItem('loading'); //loading是当前登录的id
		// 	console.log(loading)
		// 	this.$axios.post('/user', {
		// 			id: loading
		// 		})
		// 		.then((data) => {
		// 			console.log(data)
		// 			this.infos = data.data[0]
		// 		})
		// }
>>>>>>> 847407f25882227193a3ca01a91ce8eb45398ffd
	}
</script>

<style scoped="scoped">
	#box {
		width: 100%;
		margin: 0 auto;
	}
</style>
