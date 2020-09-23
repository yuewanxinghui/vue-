<template>
	<div class="box">
		账号：<input type="text" class='zhanghao' placeholder="输入账号" v-model="zhanghao" @focus="changflag"><br>
		密码：<input type="password" class='mima' placeholder="密码" v-model="pwd" @focus="changflag"><br>
		<button class='donthave' @click="zhuce">没有账号？</button>
		<div>
		<button class='login' @click="send">登录</button>
		<p v-if="flag">账号或密码不能为空</p>	
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				zhanghao:'',
				pwd:'',
				flag:false,
			}
		},
		methods:{
			changflag(){
				this.flag = false;
			},
			zhuce(){
				this.$router.push('/zhuce');
			},
			send(){
				if(this.zhanghao!==''&&this.pwd!==''){
				this.$axios.post('/userlogin',{zhanghao:this.zhanghao,pwd:this.pwd})
				.then((data)=>{
					console.log(data)
					// console.log(JSON.parse(data.config.data))
					let loading = data.data[0].id;
					console.log(loading)
					if(loading){
						localStorage.setItem("isLogin",true);
						localStorage.setItem("loading",loading);
						this.$router.push('Home')
					}
				})		
				}else{
					this.flag = true;//判断账号密码不能为空
				}
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		width: 400px;
		margin: 0 auto;
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border: 1px solid #333333;
		padding: 20px;
		
	}
	.box input{
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		font-size: 18px;
		text-indent: 1em;
	}
	button{
		margin-top: 20px;
	}
	.donthave{
		width: 100px;
		height: 40px;
		background-color: blue;
		color: white
	}
	
	.login{
		width: 200px;
		height: 40px;
		background-color: blue;
		color: white
	}
	p {
		color: #FF0000;
		font-size: 12px;
	}
</style>
