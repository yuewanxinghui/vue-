<template>
	<div class="wenxuelist" v-if="data1.tid==1 ">
		<img :src="data1.bookpic" alt @click="xiangqing" />
		<p v-text="data1.bookname"></p>
		<p>作者：{{data1.bookwriter}}</p>
		<p class="price">价格：{{data1.price}}元</p>
		<button title :class="{addcar1,addcar2}" @click="send($event)">{{addcar}}</button>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				hot: "http://image31.bookschina.com/pro-images/200916fd/tubiao45.png",
				addcar: "加入购物车",
				addcar1: true,
				addcar2: false,
			};
		},
		props: ["data1"],
		mounted() {},
		methods: {
			xiangqing() {
				this.$router.push({
					path: '/xiangqing',
					query: this.data1
				})
			},
			async send(e) {
				let objData1 = {
					bookpic: this.data1.bookpic,
					bookname: this.data1.bookname,
					// bookwriter: this.data1.bookwriter,
					bookprice: this.data1.price,
				};
				var res = await this.$axios.post("/usercar", objData1, {
					header: {
						"content-Type": "application/x-www-form-urlencoded"
					},
				});
				if (res.data) {
					this.addcar = "已加入购物车";
					this.addcar1 = false;
					this.addcar2 = true;
				} else {
					this.addcar = "加入购物车";
					this.addcar1 = true;
					this.addcar2 = false;
				}
			},
		},
	};
</script>
<style>
	.addcar1 {
		font-size: 18px;
		font-weight: bold;
		color: red;
		background-color: orange;
		width: 120px;
		height: 40px;
		border: none;
	}

	.addcar2 {
		font-size: 18px;
		font-weight: bold;
		color: #fff;
		background-color: orange;
		width: 120px;
		height: 40px;
	}
</style>
