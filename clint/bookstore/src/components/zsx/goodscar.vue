<template>
	<div class="goods">
		<div  class="goodsbox" >
			<div class="box1">
				
				<img :src="data1.img" alt="">
				<a href="#">{{data1.name}}


				</a>
			</div>
			<div class="box2">
				<p>￥{{data1.price}}</p>
			</div>

			<div class="box3">
				<button @click="sub">-</button>
				<p>{{data1.num}}</p>
				<button @click="add">+</button>
			</div>
			
			<div class="box4">
				<p>{{((this.data1.price*100)*this.data1.num)/100}}</p>
			</div>
			
			<div class="box5">
				<button @click="fn2(index)">移除</button>
			</div>
		</div>

	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				// cars: []
			}
		},
		props:['data1','index','cars'],
		
		methods: {
			sub() {
				
					console.log(this)
					this.data1.num--;
					console.log(this)
					if(this.data1.num<=0){
						this.data1.num=0;
					};
					
			},
			add() {
				this.data1.num++;
				console.log(this)
			},
			fn2(index){
				//删除购物车,发送请求
				console.log(index,666)
				var id=	this.data1.id;
				// console.log(id,6666666,this.data1)
				this.$axios.post("http://192.168.3.124:7001/delusercar",{id:id})
				.then((res)=>{
				      console.log(res.data,"删除")
					  if(res.data.affectedRows==1){
						  //子组件给父组件返回事件和序号
						  this.$emit("suss",index)
					  }
						
				});
				// this.$axios.post("http://192.168.3.124:7001/lookusercar")
				// 	.then((res) => {
				
				// 		// console.log(res.data)
				// 		console.log(666)
				// 		this.cars = res.data
				// 		// console.log(this.cars)
				
				
				// 	})
				// console.log(this.data1)
					
			}

		},


	}
</script>

<style >
	.goods {
		width: 1000px;
		margin: 10px;
		/* display: flex; */
		margin: 0 0 0 230px;
		border: #CCCCCC 1px solid;
		background-color: rgba(255, 251, 240);
	}
	.goods .box1{
		margin-left: 5px;
		position: relative;
	}

	.goods .box1 a {
		display: inline-block;
		position: absolute;
		top: 40px;
		left: 100px;
		text-decoration: none;
		color: #000000;
	}
	.goods .box1:hover a {
		text-decoration: underline;
	}
	.goods .box2 p:first-child {
		margin-left: 100px;
		color: rgba(255, 0, 0);
		margin-top: 40px;
		font-size: 16px;
	}

	/* .goods .box2 p:last-child{
		display: inline;
		color: #666;
		font-size: 16px;
		margin-top: 40px;
		margin-left: 50px;
					
	} */
	.box1 {
		width: 300px;

	}
	

	.box2 {
		display: flex;
	}

	.goodsbox {
		display: flex;
		position: relative;

	}

	.goods img {
		width: 80px;
		height: 100px;

	}

	.goodsbox .box3 {
		margin-left: 50px;
		margin-top: 40px;
		display: flex;
		
		height: 20px;
	}
	.goodsbox .box3 p{
		margin: 0;
	}
	.goodsbox .box4{
		margin-left: 50px;
		margin-top: 25px;
		height: 20px;
		color: rgba(255, 0, 0); ;
	}
	.goodsbox .box5 button{
		position: absolute;
		right: 20px;
		top: 40px;
		width: 50px;
		height: 20px;
	}
</style>
