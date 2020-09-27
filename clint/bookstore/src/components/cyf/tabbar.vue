<template>
	<div class="all">
		<div class="box">
			<ul class="navmenu">
				<li @click='car()'>我的购物车</li>
				<li @click='info'>修改个人信息</li>
			</ul>
			<div v-if='show' class='neirong'>
				<img src="http://www.bookschina.com/wenwan/images/nav.jpg" class="tu" />
				<div class="word">我的订单</div>
				<div class="xian">
					<goodscar v-for="(el,index) in cars" :data1='el' :index="index"></goodscar>
				</div>
			</div>
			<div v-if='show2' class='neirong'>
				<div class="xiugai">
					修改个人昵称：<br />
					<input type="text" v-model="name" class="shuru"><br>
					修改头像：<br />
					<input type="file" @change="fn($event)" class="xuanze"><br />
					<img :src="img1" class="img1" /><br>
					<button @click="submit">修改</button>
				</div>
			</div>
		</div>
		<div class="di">开发小组：爱咋咋滴</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				show2: false,
				name: '',
				headimg: '',
				img1:'',
				cars:''

			}
		},
		mounted(){
			//这里进网络请求
			this.$axios.post("http://192.168.3.124:7001/lookusercar")
				.then((res) => {
			
					console.log('挂载')
					this.cars = res.data
				})
		},
		components:{
			goodscar:()=>import('../zsx/goodscar.vue')
			
		},
		methods: {
			car() {
				this.show = true;
				this.show2 = false;
			},
			info() {
				this.show = false;
				this.show2 = true;
			},
			fn(e) {
				console.log(e);
				this.headimg = e.target.files[0];
				let f = new FileReader();
				// console.log(333)
				f.readAsDataURL(this.headimg);
				// console.log(1111)
				f.onload = (e1) => {
					console.log(e1)
					this.img1 = e1.currentTarget.result;
				};
			},
			async submit() {
				let loading = localStorage.getItem('loading');
				let transfer = new FormData();
				transfer.append("name", this.name);
				transfer.append("headimg", this.headimg);
				transfer.append("id", loading);
				let result1 = await this.$axios.post('/changeuser', transfer, {header: {"content-Type": "application/x-www-form-urlencoded"}})
				console.log(result1)
				this.img1=null;
				this.name=null;
			}


		},
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.all {
		background-color: #f1f1f1;
		width: 100%;
	}

	ul li {
		list-style-type: none;
	}

	.box {
		width: 1200px;
		margin: 0 auto;
		background-color: white;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.navmenu {
		width: 200px;
		height: 600px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.navmenu li {
		width: 100%;
		height: 300px;
		line-height: 100px;
		text-align: center;
		line-height: 300px;
		font-size: 16px;
		background-color: #55A6AB;
		border: 10px solid white;
		color: white;
		border-radius: 7%;
	}

	.navmenu li:hover {
		background-color: #def4ff;
		color: #000000;
	}

	.neirong {
		width: 970px;
		height: 800px;
		background-color: white;
		margin: 10px;
		align-items: flex-end;
		border-radius: 1%;
		border: 3px solid #55A6AB;
		box-sizing: border-box;
	}

	.tu {
		width: 940px;
		height: 110px;
		padding: 10px;
	}

	.word {
		height: 50px;
		line-height: 50px;
		font-size: 30px;
		font-weight: 900;
		color: #55A6AB;
		margin-left: 30px;
	}

	.xian {
		height: 5px;
		background-color: #55A6AB;
		width: 920px;
		margin-left: 20px;
	}
	
	.xiugai{
		height: 500px;
		width: 500px;
		margin: auto;
		padding-top: 100px;
		font-size: 20px;
	}
	
	.shuru{
		box-sizing: border-box;
		width: 400px;
		height: 45px;
		font-size: 18px;
		text-indent: 1em;
		margin: 20px 0;
		border: 2px solid #000000;
	}
	
	.xuanze{
		font-size: 18px;
		margin: 20px 0;
	}

	.img1 {
		width: 150px;
		height: 150px;
		border: 2px solid #000000;
	}
	
	.xiugai button{
		width: 400px;
		height: 50px;
		background-color: #55A6AB;
		color: white;
		margin-top: 20px;
		border: none;
	}
	
	.xiugai button:hover{
		color: red;
	}

	.di {
		width: 100%;
		height: 60px;
		background-color: #55A6AB;
		text-align: center;
		font-family: 宋体;
		box-sizing: border-box;
		padding-top: 17px;
		color: white;
		border-top: 10px solid #F1F1F1;
	}
</style>
