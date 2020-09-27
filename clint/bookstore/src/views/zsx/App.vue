<template>
	<div>
		<button @click="fn" >结算</button>
			<!-- <p>{{cars|total}}</p> -->
			
		<table>
					<thead>
					
						<th>图片</th>
						<th>商品名称</th>
						<th></th>
						<th></th>
						<th>单价</th>
						<th>数量</th>
						<th></th>
						<th>小计</th>
						<th></th>
						<th>操作</th>
					</thead>
					
				</table>
		<!-- <h1 v-html="total"></h1> -->
		<goods v-for="el in cars" :data1='el'></goods>
		<!--  v-for="el in cars" :key="el.id" :gooodsdata="el" -->
		
		
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				cars: []
			}
		},
		
		mounted() {
			//这里进网络请求
			this.$axios.get("http://192.168.3.124:7001/test")
				.then((res) => {
				
					console.log(res.data)
					console.log(666)
					this.cars = res.data
					console.log(this.cars)
		
		
				})
		},
		components: {
			goods: () => import("@/components/zsx/goods.vue")
		},
		methods:{
			fn(){
				
				var total=0;
			 	for(var i=0;i<this.cars.length;i++){
			 				total=total+this.cars[i].price*this.cars[i].bid
						
			 	}
				console.log(total)
			}
		},
		filters:{
			// total过滤器,自动获取,需要放在filters方法下面,arg1是一个形参,上面默认传入数组.
		}
		
	}
</script>

<style>
			table,
			
			td {
				border: 1px solid #000;
				border-collapse: collapse;
				margin: 0 0 0 230px;
				width: ;
			}

			th,
			td {
				width: 70px;
				padding: 8px 15px;
			}

</style>
