<template>
	<div class="goods">
		<div  class="goodsbox" >
			<div class="box1">
				
				<img :src="data1.bookpic" alt="">
				<a href="#">{{data1.bookname}}


				</a>
			</div>
			<div class="box2">
				<p>￥{{data1.price}}</p>
			</div>

			<div class="box3">
				<button @click="sub">-</button>
				<p>{{data1.price}}</p>
				<button @click="add">+</button>
			</div>
			
			<div class="box4">
				<p>{{this.data1.price*this.data1.price}}</p>
			</div>
			
			<div class="box5">
				<button @click="fn2()">移除</button>
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
		props:['data1'],

		uodata: {
		
		},
		methods: {
			sub(e) {
				
					console.log(this)
					this.data1.price--;
					console.log(this)
					if(this.data1.price<=10){
						this.data1.price=0;
						
						
					};
					return this.data1.price*this.data1.price
			},
			add() {
				this.data1.price++;
				
				return this.data1.price*this.data1.price
			},
			fn2(){
				//删除购物车
				
				// this.$axios.post("http://192.168.3.124:7001/del",row)
				// .then((res)=>{
				//       console.log(res.data)          
				// });
				
					
			}

		},


	}
</script>

<style>
	.goods {
		width: 1000px;
		margin: 10px;
		/* display: flex; */
		margin: 0 0 0 230px;
		border: #008000 1px solid;
		background-color: rgba(255, 251, 240);
	}

	.goods a {
		margin-top: 40px;
		text-decoration: none;
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
