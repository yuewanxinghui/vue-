<template>
	<div class="all">
		<div class="di">欢迎来到檀香墨坊</div>
		<div class="box">
			账号：<input type="text" class='zhanghao' placeholder="输入账号" v-model="zhanghao" @focus="changflag"><br>
			密码：<input type="password" class='mima' placeholder="密码" v-model="pwd" @focus="changflag"><br>
			<button class='donthave' @click="zhuce">没有账号？</button>
			<div>
				<button class='login' @click="send">登录</button>
				<p v-if="flag">账号或密码不能为空</p>
			</div>
		</div>
		<div class="di">开发小组：爱咋咋滴</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				zhanghao: '',
				pwd: '',
				flag: false,
			}
		},
		methods: {
			changflag() {
				this.flag = false;
			},
			zhuce() {
				this.$router.push('/zhuce');
			},
			send() {
				if (this.zhanghao !== '' && this.pwd !== '') {
					this.$axios.post('/userlogin', {
							zhanghao: this.zhanghao,
							pwd: this.pwd
						})
						.then((data) => {
							console.log(data)
							// console.log(JSON.parse(data.config.data))
							let loading = data.data[0].id;
							let admin = data.data[0].admin;
							console.log(loading)
							if (data.data.code == 1001) {
								console.log('账号或密码错误')
							} else {
								if (admin) {
									localStorage.setItem("isLogin", 1);
									localStorage.setItem("admin", admin);
									this.$router.push('table1')
								} else {
									localStorage.setItem("isLogin", 1);
									localStorage.setItem("loading", loading);
									this.$router.push('Home')
								}
							}
						})
				} else {
					this.flag = true; //判断账号密码不能为空
				}
			}
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}

	.di {
		width: 100%;
		height: 50px;
		background-color: #55A6AB;
		text-align: center;
		font-family: 宋体;
		box-sizing: border-box;
		padding-top: 17px;
	}

	.all {
		width: 100%;
		background-image: url('http://d00.paixin.com/thumbs/1006349/9632686/staff_1024.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.box {
		width: 400px;
		margin: 165px auto;
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border: 1px solid #333333;
		border-radius: 10px;
		padding: 20px;

	}

	.box input {
		box-sizing: border-box;
		width: 100%;
		height: 45px;
		font-size: 18px;
		text-indent: 1em;
		margin-top: 10px;
	}

	button {
		margin-top: 20px;
		outline: none;
	}

	.donthave {
		width: 100px;
		height: 40px;
		background-color: #55A6AB;
		color: white;
	}

	.login {
		width: 200px;
		height: 40px;
		background-color: #55A6AB;
		color: white;
	}

	p {
		color: #FF0000;
		font-size: 12px;
	}
</style>
