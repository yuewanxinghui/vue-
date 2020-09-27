<template>
	<div>
		<div class="box">
			<div class="name">{{everygoods.bookname}}</div>
			<!-- logo -->
			<img class="logo" src="../../assets/logo.png" alt="">
			<!-- 图片放大镜 -->
			<div class="productLeft">
				<!-- 左侧中图  -->
				<div class="mdImg">
					<img :src="everygoods.bookpic" alt />
				</div>
				<!-- 遮罩层  -->
				<div v-show="isShow" class="marks" :style="{top:top+'px',left:left+'px'}"></div>
				<!-- 遮罩层 玻璃板 superMarks -->
				<div v-if="isPC==false" @touchstart.prevent="enter" @touchend.prevent="leave" @touchmove.prevent="marks"
				 @click.prevent="sub()" class="superMarks"></div>

				<div v-if="isPC==true" @mouseenter="enter" @mouseleave="leave" @mousemove="marks" @click.prevent="sub()" class="superMarks"></div>

				<div v-show="isShow" class="lgImg">
					<img :src="everygoods.bookpic" alt :style="{top:topLgImg+'px',left:leftLgImg+'px'}" />
				</div>
			</div>
			<div class="wirter">{{everygoods.bookwriter}}</div>
			<div class="introduce">书类{{everygoods.tid}}</div>
			<div class="Price">{{everygoods.price}}</div>
			<el-button type="danger" round class="purchase">加入购物车</el-button>

		</div>

	</div>
</template>

<script>
	export default {
		name: "blog-header",
		data() {
			return {
				isPC: true,
				// 大图片
				// qall: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg",
				qallBig: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg",
				isShow: false, //控制遮罩层marks和大图片是否显示"
				left: 0, //marks左移位置
				top: -300, //marks下移位置
				leftLgImg: 0, //大图lgImg移动的位置
				topLgImg: -300, //大图lgImg移动的位置
				everygoods: '',
			};
		},
		methods: {
			//鼠标进入和离开
			enter() {
				this.isShow = true;
			},
			leave() {
				this.isShow = false;
			},
			//遮罩层放大镜
			marks(e) {
				var marksWidth = 24; //marks的宽
				var marksHeight = 24; //marks的高
				if (this.isPC == true) {
					//PC端
					this.left = e.offsetX - marksWidth / 2;
					this.top = e.offsetY - marksHeight / 2;
					if (this.left < 0) {
						this.left = 0;
					} else if (this.left > 160) {
						this.left = 300;
					}
					if (this.top < 0) {
						this.top = 0;
					} else if (this.top > 160) {
						this.top = 300;
					}

					//大d图片除以小的图片的宽高
					this.leftLgImg = (-this.left * 400) / 250;
					this.topLgImg = (-this.top * 300) / 220;
				} else {
					//移动端
					this.left = e.changedTouches[0].clientX - marksWidth / 2;
					this.top = e.changedTouches[0].clientY - marksHeight / 2;
					if (this.left < 0) {
						this.left = 0;
					} else if (this.left > 160) {
						this.left = 160;
					}
					if (this.top < 0) {
						this.top = 0;
					} else if (this.top > 45) {
						//45就是小图片的高度的一半，91/2
						this.top = 200;
					}

					//大d图片除以小的图片的宽高
					this.leftLgImg = (-this.left * 320) / 160;
					this.topLgImg = (-this.top * 181) / 91;
				}
			},
		},
		beforeCreate() {},
		mounted() {
			this.everygoods = this.$route.query;
			if (
				navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
				)
			) {
				this.isPC = false;
			} else {
				console.log("PC端");
			}
		},
	};
</script>

<style>
	.box {
		width: 600px;
		height: 500px;
		margin: 0 auto;
		margin-top: 10px;
		border: 1px solid #000;
		position: relative;
	}

	.logo {
		width: 150px;
		position: absolute;
		top: 0px;
		right: 50px;
	}

	.name {
		width: 200px;
		height: 50px;
		float: left;
		margin: 30px;
		font-size: 20px;
		border: 1px solid #000;
		line-height: 50px;
		text-align: center;
	}

	.wirter {
		width: 150px;
		height: 50px;
		border: 1px solid #000;
		position: absolute;
		right: 150px;
		top: 150px;
		line-height: 50px;
		text-align: center;
	}

	.introduce {
		width: 300px;
		height: 100px;
		border: 1px solid #000;
		position: absolute;
		right: 5px;
		top: 210px;
		line-height: 50px;
		text-align: lest;
	}

	.Price {
		width: 300px;
		height: 50px;
		border: 1px solid #000;
		position: absolute;
		right: 5px;
		top: 320px;
	}

	.purchase {
		width: 300px;
		height: 50px;
		position: absolute;
		right: 5px;
		top: 380px;
		line-height: 50px;
	}

	/* 左侧大小图样式 160*91  320*181*/
	.productLeft {
		width: 200px;
		position: absolute;
		top: 150px;
		left: 10px;
	}

	/* 左侧中图 */
	.mdImg,
	.mdImg>img {
		width: 270px;
		height: 250px;
		border: 1px solid #000;
	}

	/*遮罩层superMarks */
	.superMarks {
		width: 250px;
		height: 220px;
		background-color: rgba(220, 220, 220, 0);
		position: absolute;
		top: 0px;
		left: 0px;
	}

	/* 遮罩层 */
	.marks {
		width: 70px;
		height: 70px;
		position: absolute;
		background-color: rgba(220, 220, 220, 0.5);
		top: 0px;
		left: 0px;
		/*top:0px;  //内联设置了动态的top，left
        left:0px;*/
	}

	/* 左侧隐藏大图 */
	.lgImg {
		width: 300px;
		height: 250px;
		overflow: hidden;
		position: absolute;
		top: 0px;
		left: 270px;
		border: 2px solid #aaa;
		background-color: #fff;
	}

	.lgImg img {
		width: 600px;
		height: 400px;
		position: absolute;
		top: 200px;
		/*top:100px;
        left:100px;*/
	}
</style>
