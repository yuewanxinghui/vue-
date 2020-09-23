<template>
	<div class="box">
		<ul class="navmenu">
			<li @click='car()'>我的购物车</li>
			<li @click='info'>修改个人信息</li>
		</ul>
		<div v-if='show' class='neirong'>购物车</div>
		<div v-if='show2' class='neirong'>
			修改个人昵称：<input type="text" v-model="name"><br>
			修改头像：<input type="file" @change="fn($event)">
			<img :src="img1" class="img1" /><br>
			<button @click="submit">修改</button>
		</div>
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
				img1:''

			}
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

	ul li {
		list-style-type: none;
	}

	.box {
		width: 100%;
		background-color: yellow;
		display: flex;
	}

	.navmenu {
		width: 400px;
		height: 220px;
		background-color: aqua;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.navmenu li {
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 16px;
		background-color: red;
	}

	.neirong {
		width: 800px;
		height: 800px;
		background-color: #666666
	}
	.img1{
		width: 100px;
		height: 100px;
	}
</style>
