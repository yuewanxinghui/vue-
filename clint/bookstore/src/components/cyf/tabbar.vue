<template>
	<div class="box">
		<ul class="navmenu">
			<li @click='car()'>我的购物车</li>
			<li @click='info'>修改个人信息</li>
		</ul>
			<div v-if='show' class='neirong'>购物车</div>
			<div v-if='show2' class='neirong'>个人信息</div>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				show:true,
				show2:false
			}
		},
		methods:{
			car(){
				this.show=true;
				this.show2=false;
			},
			info(){
				this.show=false;
				this.show2=true;
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul li{
		list-style-type: none;
	}
	.box{
		width: 100%;
		background-color: yellow;
		display: flex;
	}
	.navmenu{
		width: 400px;
		height: 220px;
		background-color: aqua;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.navmenu li{
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 16px;
		background-color: red;
	}
	.neirong{
		width: 800px;
		height: 800px;
		background-color: #666666
	}
</style>
