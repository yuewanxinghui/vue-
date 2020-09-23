<template>
	<div class="box">
		<div class='info'>
			<div class="userimg">
				<img :src="info.userimg" alt="">
			</div>
			<span>{{info.name}}</span>
		</div>
		<div class='time'>{{nowtime|timetool}}</div>
		<div class='exit' @click="clearcook">exit</div>
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
		width: 1200px;
		height: 100px;
		display: flex;
	}

	.info {
		width: 500px;
		height: 100px;
		background-color: #00FFFF;
	}

	.userimg img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}

	.time {
		width: 400px;
		height: 100px;
		background-color: #888888;
		text-align: center;
		line-height: 100px;
		font-size: 18px;
		color: greenyellow;
	}

	.exit {
		width: 300px;
		height: 100px;
		background-color: #abcdef;
		text-align: center;
		line-height: 100px;
		font-size: 16px;
		color: greenyellow;
	}
</style>
