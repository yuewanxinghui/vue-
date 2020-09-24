<template>
	<div>
		<!-- <button @click="fn">结算</button> -->
		<!-- <p>{{cars|total}}</p> -->
		<h1>结算:{{cars|total}}</h1>

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
		
		<!-- @绑定事件，设置一个成功后的方法 -->
		<goodscar v-for="(el,index) in cars" :data1='el' :index="index" @suss="suss"></goodscar>
		<!--  v-for="el in cars" :key="el.id" :gooodsdata="el" -->


	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				cars: [],
			}
		},
		beforeUpdate(){
			console.log('刷新前')
			},
		updated() {
			// console.log(this.cars,'刷新数据')
			// this.$axios.post("http://192.168.3.124:7001/lookusercar")
			// .then((res) => {
			// 		// this.cars = res.data
			// 		// console.log(res.data)
			// 		console.log(666,res)
				
			// 		 // console.log(this.cars)


			// 	})
		},
		//得到数据data然后进行渲染
		mounted() {
			//这里进网络请求
			this.$axios.post("http://192.168.3.124:7001/lookusercar")
				.then((res) => {

					console.log('挂载')
					this.cars = res.data


				})
		},
		components: {
			goodscar: () => import("@/components/zsx/goodscar.vue")
		},
		methods: {
			// fn() {

			// 	var total = 0;
			// 	for (var i = 0; i < this.cars.length; i++) {
			// 		total = total + this.cars[i].price * this.cars[i].num

			// 	}
			// 	console.log(total)
			// }
			suss(index){
				
				this.cars.splice(index, 1)
				console.log(this.cars)
			}
		},
		
		
			// total过滤器,自动获取,需要放在filters方法下面,arg1是一个形参,上面默认传入cars数组.
			filters:{
					total(arg1){
						// console.log(arg1,6666666666666666666666)
						// let arr = Array.from(arg1)
						// let res = arr.reduce((left,right)=>{
						// 	return {price:left.price*100*left.num/100+right*price*100*right.num/100,num:1}
						// })
						// return res.price
						//解决浮点数问题
						var total=0;
						for(var i=0;i<arg1.length;i++){
							total=(total*10+((arg1[i].price*10*arg1[i].num)/10)*10)/10
						}
						return total
					}
				}

	}
</script>

<style >
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
	h1{
		width: 200px;
		font-size: 20px;
		border:gold 1px solid;
		color: #000;
		height: 50px;
		background-color: aliceblue;
	}
</style>
