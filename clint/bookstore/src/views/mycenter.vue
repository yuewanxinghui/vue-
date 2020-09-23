<template>
	<div id="box">
		<myhead :info='infos'></myhead>
		<tabbar></tabbar>	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				infos:''
			}
		},
		components:{
			myhead:()=>import('../components/cyf/myhead.vue'),
			tabbar:()=>import('../components/cyf/tabbar.vue')
		},
		mounted(){
			let loading = localStorage.getItem('loading');
			console.log(loading)
			this.$axios.post('/user',{id:loading})
			.then((data)=>{
				console.log(data)
				this.infos = data.data[0]
			})
		}
	}
</script>

<style scoped="scoped">
	#box{
		width: 1200px;
		margin: 0 auto;
	}
</style>
