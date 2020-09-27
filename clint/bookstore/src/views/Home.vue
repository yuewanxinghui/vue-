<template>
	<div class="home">
		<!-- <button @click="fn">登录</button> -->
		<nav>
			<div class="navleft">
				<router-link class="navbtn" to="/login">欢迎光临檀墨香坊</router-link>
				<router-link class="navbtn" to="/center">个人中心</router-link>
				<router-link class="navbtn" to="/car">购物车</router-link>
			</div>
			<div class="navright">
				<div class="navright1">
					<router-link class="navbtn" to="/login">{{ login }}</router-link>
					<img @click="tocenter()" v-show="flag1" :src="pic" :class="{ picclass }" alt="" />
					<span v-show="flag2" @click="tocenter()">{{zhuce}}</span>
					<router-link v-show="flag3" class="navbtn" @click="tocenter()" to="/zhuce">{{ zhuce }}</router-link>
				</div>
				<router-link class="navbtn" to="/Home/help">帮助</router-link>
			</div>
		</nav>
		<header>
			<div>
				<img src="../assets/logo.png" alt />
			</div>

			<div class="search">
				<input type="text" placeholder="搜索书籍" @input="sendsearch($event)" v-model="search" @blur="dispal" />
				<search v-if="flag"></search>
				<router-link class="headersearch" to="/" @click="tosearch">搜索</router-link>
			</div>
		</header>
		<section class="section">
			<div class="Allclassify">
				<router-link class="classify classify1" to="/Login">商品分类</router-link>
				<router-link class="classify" to="/Home">首页</router-link>
				<router-link class="classify" to="/wenxue">文学</router-link>
				<router-link class="classify" to="/sheke">社科</router-link>
				<router-link class="classify" to="/shaoer">少儿</router-link>
				<router-link class="classify" to="/yishu">艺术</router-link>
				<router-link class="classify" to="/shenghuo">生活</router-link>
				<router-link class="classify" to="/wenjiao">文教</router-link>
			</div>
			<div class="lbst">
				<lunbo class="lunbo"></lunbo>
				<shoptip class="shoptip" @click="toshoptip()"></shoptip>
			</div>
			<section class="hotsale">
				<img src="http://image31.bookschina.com/pro-images/newtejia/292120.jpg" alt srcset />
			</section>
			<section class="section2">
				<addcar v-for="el in arr" :data1="el"></addcar>
			</section>
			<footer1></footer1>
		</section>

		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	import axios from "axios";
	import Element from "element-ui";
	import {
		get
	} from "http";
	export default {
		name: "Home",
		data() {
			return {
				arr: [],
				hot: "http://image31.bookschina.com/pro-images/200916fd/tubiao45.png",
				login: "登录",
				zhuce: "注册",
				pic: "",
				zhanhao: "",
				search: "",
				search1: "",
				flag: false,
				userid: "",
				picclass: true,
				flag1: false,
				flag2: false,
				flag3: true
			};
		},
		components: {
			lunbo: () => import("@/components/wgh/lunbo.vue"),
			shoptip: () => import("@/views/leftfenlei/shoptip.vue"),
			addcar: () => import("@/components/wgh/addcar.vue"),
			search: () => import("@/views/wgh/search.vue"),
			footer1: () => import("@/components/wgh/footer1.vue"),
		},
		methods: {
			tocenter() {
				this.$router.push("/center");
			},
			fn() {
				this.$router.push("/xiangqing");
			},
			toshoptip() {
				this.$router.push("/Home/shoptip");
			},
			dispal() {
				this.flag = false;
			},
			async sendsearch(e) {
				this.flag = true;
				let f = new FormData();
				f.append("likeword", this.search);
				var res1 = await this.$axios.post("/like", f, {
					header: {
						"content-Type": "application/x-www-form-urlencoded"
					},
				});
				console.log(res1, 66666);
			},
			tosearch(){
				
			}
		},

		async created() {
			var res = await axios.get("/test");
			this.arr = res.data;

			let loading = localStorage.getItem("loading"); //loading是当前登录的id
			var flag = localStorage.getItem("isLogin");
			console.log(loading, 2222222);
			this.$axios
				.post("/user", {
					id: loading,
				})
				.then((data) => {
					this.userid = data.data[0];
					console.log(this.userid, 1111111111);
					if (flag) {
						this.login = "";
						this.zhuce = this.userid.zhanghao;
						this.pic = this.userid.userimg;
						this.flag1 = true;
						this.flag2 = true;
						this.flag3 = false;
					} else {
						this.login = "登录";
						this.zhuce = "注册";
						this.flag1 = false;
						this.flag2 = false;
						this.flag3 = true;
					}
				});
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.picclass {
		margin-top: 5px;
		width: 40px;
		height: 40px;
		background-color: #ccc;
		border-radius: 40px;
		margin-right: 20px;
	}

	.navright1 span {
		font-size: 12px;
		color: #fff;
		line-height: 45px;
	}

	.navright1 {
		display: flex;
		justify-items: center;
	}

	nav {
		display: flex;
		justify-content: space-around;
		height: 50px;
		background-color: #55a6ab;
	}

	.navleft .navbtn,
	.navright .navbtn {
		margin: 0 30px;
		line-height: 50px;
		font-size: 14px;
		color: #ffff;
	}

	nav .navbtn:hover {
		color: red;
	}

	.navbtn {
		color: black;
		display: inline-block;
		text-decoration: none;
	}

	.navright {
		display: flex;
	}

	header {
		display: flex;
		justify-content: space-around;
		justify-items: center;
	}

	header img {
		width: 300px;
		height: 200px;
	}

	header input {
		width: 400px;
		height: 45px;
		box-sizing: border-box;
		border: 1px solid #55a6ab;
	}

	header .search input:focus {
		outline: none;
		border: 1px solid red;
	}

	.search {
		margin-top: 70px;
		display: flex;
	}

	.headersearch {
		display: inline-block;
		width: 100px;
		height: 45px;
		background-color: #55a6ab;
		text-align: center;
		line-height: 45px;
		text-decoration: none;
		color: #ffff;
	}

	section {
		height: 200px;
	}

	.Allclassify {
		display: flex;
		border-bottom: 4px solid #55a6ab;
		/* width: 1000px; */
	}

	.Allclassify .classify1 {
		margin-left: 150px;
		margin-right: 100px;
		width: 170px;
		font-weight: bold;
		background-color: #55a6ab;
		color: #ffff;
		text-align: center;
	}

	.classify {
		text-decoration: none;
		font-size: 25px;
		font-weight: 500;
		padding: 5px 30px;
		color: #55a6ab;
		/* border: 1px solid red; */
	}

	.classify:hover {
		background-color: red;
		color: #fff;
	}

	.lbst {
		position: relative;
	}

	.lunbo {
		margin-top: -20px;
		margin-bottom: 40px;
	}

	.hotsale {
		margin: 0 auto;
		width: 1200px;
		height: 150px;
	}

	.shoptip {
		position: absolute;
		z-index: 2px;
		top: 0px;
	}

	.section2 {
		display: flex;
		margin: 0 auto;
		width: 1200px;
		height: auto;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.section2 .goodbooks div {
		text-align: center;
		width: 280px;
		height: 390px;
		box-shadow: 0px 0px 15px #ccc;
		margin: 10px 10px;
	}

	.section2 .goodbooks {
		display: flex;
		position: relative;
	}

	.section2 .goodbooks .bookimg {
		width: 250px;
		height: 250px;
	}

	.hot {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.section2 .goodbooks p {
		font-size: 16px;
		font-weight: 300;
	}

	.section2 .goodbooks .price {
		margin-left: -150px;
		font-size: 18px;
		font-weight: bold;
		color: red;
	}

	/* 
footer {
  border-top: 4px solid #55a6ab;
  height: 200px;
  background-color: #000;
  color: #fff;
}
footer span {
  font-size: 14px;
  margin-left: 20px;
}
footer .footerxq {
  text-decoration: none;
  margin: 0 20px;
  color: #ffff;
  font-size: 14px;
} */
</style>
