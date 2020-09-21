<template>
	<div id="box">
		<myhead></myhead>
		<tabbar></tabbar>	
	</div>
</template>

<script>
	export default{
		components:{
			myhead:()=>import('../components/cyf/myhead.vue'),
			tabbar:()=>import('../components/cyf/tabbar.vue')
		}
	}
</script>

<style scoped="scoped">
	#box{
		width: 1200px;
		margin: 0 auto;
	}
</style>
