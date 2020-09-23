<template>
	<div class="home">
		<!-- <button @click="fn">登录</button> -->
		<nav>
			<div class="navleft">
				<router-link class="navbtn" to="/Login">欢迎光临檀墨香坊</router-link>
				<router-link class="navbtn" to="/center">个人中心</router-link>
				<router-link class="navbtn" to="/Login">购物车</router-link>
			</div>

			<div class="navright">
				<router-link class="navbtn" to="/login">登录</router-link>
				<router-link class="navbtn" to="/zhuce">注册</router-link>
				<router-link class="navbtn" to="/Login">帮助</router-link>
			</div>
		</nav>
		<header>
			<div>
				<img src="../assets/logo.png" alt />
			</div>
			<div class="search">
				<input type="text" placeholder="搜索书籍" />
				<router-link class="headersearch" to="/Home">搜索</router-link>
			</div>
		</header>
		<!-- <article>hh</article> -->
		<section class="section">
			<div class="Allclassify">
				<router-link class="classify classify1" to="/Login">商品分类</router-link>
				<router-link class="classify" to="/Login">首页</router-link>
				<router-link class="classify" to="/Login">文学</router-link>
				<router-link class="classify" to="/Login">社科</router-link>
				<router-link class="classify" to="/Login">少儿</router-link>
				<router-link class="classify" to="/Login">艺术</router-link>
				<router-link class="classify" to="/Login">生活</router-link>
				<router-link class="classify" to="/Login">文教</router-link>
			</div>
			<div class="shopingtip">
				<ul>
					<li>文学</li>
					<li>社科</li>
					<li>少儿</li>
					<li>艺术</li>
					<li>生活</li>
					<li>文教</li>
				</ul>
			</div>
			<div class="lunbotu">
				<img :src="imges[currentIndex].imgs" alt @click="imgHandler" />
				<button class="lunbotuleft" @click="prevHandler">
					<</button> <button class="lunboturigth" @click="nextHandler">>
				</button>
			</div>
			<section class="hotsale">
				<img src="http://image31.bookschina.com/pro-images/newtejia/292120.jpg" alt srcset />
			</section>
			<section class="section2">
				<div class="goodbooks" v-for="el in arr">
					<div v-if="el.active!=null">
						<img :src="el.bookpic" @click="fn()" />
						<img class="hot" :src="hot" alt />
						<p v-text="el.bookname"></p>
						<p>作者：{{el.bookwriter}}</p>
						<p class="price">价格：{{el.price}}元</p>
					</div>
				</div>
			</section>
			<footer>
				<router-link class="footerxq" to="xiangqing">关于我们</router-link>
				<router-link class="footerxq" to="xiangqing">帮助中心</router-link>
				<router-link class="footerxq" to="xiangqing">开放平台</router-link>
				<router-link class="footerxq" to="xiangqing">联系我们</router-link>
				<router-link class="footerxq" to="xiangqing">法律规则</router-link>
				<router-link class="footerxq" to="xiangqing">隐私政策</router-link>
				<router-link class="footerxq" to="xiangqing">知识产权</router-link>
				<router-link class="footerxq" to="xiangqing">

				</router-link>
			</footer>
		</section>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Home",
		data() {
			return {
				imges: [{
						id: 1,
						imgs: "http://image31.bookschina.com/uploadfiles/images/14216_ad990.jpg?id=3",
					},
					{
						id: 2,
						imgs: "http://image31.bookschina.com/uploadfiles/images/14261_ad990.jpg?id=5",
					},
					{
						id: 3,
						imgs: "http://image31.bookschina.com/pro-images/200916fd/990360.jpg?id=21",
					},
					{
						id: 4,
						imgs: "http://image31.bookschina.com/pro-images/200918sk/990360.jpg?id=21",
					},
				],
				currentIndex: 0,
				arr: [],
				hot: "http://image31.bookschina.com/pro-images/200916fd/tubiao45.png",
			};
		},
		methods: {
			// 对象内容是js函数
			nextHandler(e) {
				console.log(e);
				this.currentIndex++;
				//更改图片地址
				if (this.currentIndex == 4) {
					//js的if判断语句
					this.currentIndex = 0;
				}
			},

			prevHandler(e) {
				console.log(e);
				this.currentIndex--;
				//更改图片地址
				if (this.currentIndex == 0) {
					//js的if判断语句
					this.currentIndex = 4;
				}
			},

			imgHandler(e) {
				// //每一个事件都有一个event对象, 冒泡阻止默认事件学的
				console.log(e.target); //当前目标对象 <img src="img/1.jpg" alt>
				console.log(this); //实例化里面的对象this 指的都是当前实例化对象
			},
			fn() {
				console.log(8888);
				this.$router.push("/xiangqing");
			},
		},

		async created() {
			// this的指向问题 ************* 能用箭头函数不用匿名函数
			//匿名函数改成箭头函数 this代指vue
			// setInterval(() => {
			//   for (let i = 0; i < this.imges.length; i++) {
			//     if (this.currentIndex <= 4) {
			//       this.currentIndex++;
			//       return this.currentIndex;
			//     } else {
			//       this.currentIndex == 0;
			//     }
			//   }
			// }, 2000);

			var res = await axios.get("/test")
			this.arr = res.data;
				
			console.log(this.arr);
			// console.log(this.arr[0].active);
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
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
		text-align: center;
		width: 400px;
		height: 45px;
		box-sizing: border-box;

		border: 1px solid #55a6ab;
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

	.lunbotu {
		width: 990px;
		height: 420px;
	}

	section .lunbotu img {
		width: 1000px;
		height: 360px;
	}

	section .lunbotu {
		margin-left: 380px;
		position: relative;
	}

	.lunbotu .lunbotuleft {
		position: absolute;
		width: 50px;
		opacity: 0.3;
		height: 360px;
		font-size: 60px;
		top: 0;
	}

	.lunbotu .lunboturigth {
		position: absolute;
		width: 50px;
		opacity: 0.5;
		height: 360px;
		font-size: 60px;
		top: 0;
		right: -10px;
	}

	.shopingtip {
		box-sizing: border-box;
		position: absolute;
		width: 230px;
		margin-left: 150px;
		height: 360px;
		background-color: #00535a;
		opacity: 0.5;
	}

	.shopingtip ul li {
		list-style: none;
		width: 240px;
		height: 45px;
		margin: 10px 0;
		font-weight: 700;
		color: #fff;
		margin-left: -40px;
		text-align: center;
		line-height: 45px;
	}

	.shopingtip ul li:hover {
		background-color: #fff;
		color: orangered;
	}

	.hotsale {
		margin: 0 auto;
		width: 1200px;
		height: 150px;
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
		height: 350px;
		box-shadow: 0px 0px 15px #ccc;
		margin: 10px 10px;
	}

	.section2 .goodbooks {
		display: flex;
		position: relative;
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
		font-size: 18px;
		font-weight: bold;
		color: red;
	}

	footer {
		border-top: 4px solid #55a6ab;
		height: 200px;
		background-color: #000;
	}

	footer .footerxq {
		color: #ffff;
		font-size: 12px;
	}
</style>
