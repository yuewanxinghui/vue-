<template>
	<div class="box">
		账号：<input type="text" class='zhanghao' placeholder="输入账号" v-model="zhanghao"><br>
		密码：<input type="password" class='' placeholder="密码" v-model="pwd"><br>
		再次确认密码：<input type="password" :class='{error:flag}' placeholder="确认密码" v-model="oncepwd" @blur="check">
		<p v-if="flag">两次输入密码不一致</p>
		<div class="yanzm">验证码：<input id='yzm' type="text" v-model="yanzhengma"><span v-html='svg' @click="again"></span></div>
		<button class='zhuce' @click="zhuce">注册</button>
		<p v-if="flag1">已有账号，请登录</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				zhanghao: '',
				pwd: '',
				oncepwd: '',
				flag: false,
				flag1: false,
				svg: '',
				yanzhengma: ''
			}
		},
		mounted() {
			this.$axios.get('/verif')
				.then((data) => {
					this.svg = data.data.data
				})
		},
		methods: {
			again() {
				this.$axios.get('/verif')
					.then((data) => {
						this.svg = data.data.data
					})
			},
			zhuce() {
				if (this.zhanghao!==''&&this.pwd!==''&&this.oncepwd!==''&&this.yanzhengma!=='') {
					this.$axios.post('/userzhuce', {
							zhanghao: this.zhanghao,
							pwd: this.pwd,
							yzm: this.yanzhengma
						})
						.then((data) => {
							if (data.data.code == 2001) {
								this.flag1 = true;
								setTimeout(() => {
									this.$router.push('/login');
								}, 2000)
							} else if (data.data.code == 2000) {
								alert('注册成功');
								this.$router.push('/login');
							}else if(data.data.code == 2003){
								console.log(data.data.info)
							}
						})
				}
			},
			check() {
				if (this.pwd !== this.oncepwd) {
					this.flag = true;
				} else {
					this.flag = false;
				}
			}
		},
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	.yanzm{
		margin-top: 20px;
		display: flex;
		align-items: center;
	}
	#yzm{
		width: 30%;
		height: 40px;
	}

	.box {
		width: 400px;
		margin: 0 auto;
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border: 1px solid #333333;
		padding: 20px;

	}

	p {
		color: #FF0000;
		font-size: 12px;
	}

	input {
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		font-size: 18px;
		text-indent: 1em;
		outline: none;
		border: 2px solid #888888
	}

	button {
		margin-top: 20px;
	}

	.zhuce {
		width: 100%;
		height: 40px;
		background-color: blue;
		color: white
	}

	.error {
		border: 2px solid #FF0000;
	}
</style>
