<template>
	<div class="box">
		<div class="welcome">欢迎来到檀香墨坊，您现在所在的位置是 个人中心</div>
		<div class='info'>
			<div class="userimg">
				<img :src="info.userimg" alt="">
			</div>
			<div class="name">{{info.name}}</div>
		</div>
		
		<div class='time'>{{nowtime|timetool}}</div>
		<div class='exit' @click="clearcook">退出登录</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowtime: '',
				info1: ''
			}
		},
		props:['info'],
		methods: {
			clearcook(){
				localStorage.setItem('loading',null);
				localStorage.setItem('isLogin',0);
				localStorage.setItem('admin',0);
				this.$router.push('Home')
			}

		},
		created() {
			setInterval(() => {
				let nowtime = new Date();
				this.nowtime = nowtime;
			})
		},
		mounted() {
			
		},
		filters: {
			timetool(e) {
				let deltime = new Date(e);
				let hours = deltime.getHours();
				let min = deltime.getMinutes();
				let secods = deltime.getSeconds();
				return `${deltime.getFullYear()}年-${deltime.getMonth()+1}-${deltime.getDate()}  ${hours}:${min}:${secods}`
			}
		}



	}
</script>

<style scoped="scoped">
	.box {
		width: 100%;
		height: 60px;
		display: flex;
		color: white;
		background-color: #55A6AB;
		margin: auto;
		border-bottom: 10px solid #F1F1F1;
	}

	.info {
		width: 630px;
		height: 60px;
		line-height: 60px;
		text-align: right;
		position: relative;
	}
	
	.name{
		display: inline-block;
		height: 60px;
		line-height: 60px;
		position: absolute;
		left: 80%;
	}
	
	.userimg{
		display: inline-block;
	}

	.userimg img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
		left: 70%;
		top: 0;
		margin-top: 10px;
	}
	
	.welcome{
		height: 60px;
		text-align: center;
		line-height: 60px;
		padding: 0 40px;
	}

	.time {
		width: 300px;
		height: 60px;
		text-align: center;
		line-height: 60px;
	}

	.exit {
		width: 150px;
		height: 60px;
		text-align: center;
		line-height: 60px;
	}
	
	.exit:hover{
		color: red;
	}
</style>
