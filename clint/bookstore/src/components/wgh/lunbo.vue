<template>
	<div>
		<div class="lunbo-box">
			<el-carousel :interval="2000" arrow="always" :height="imgHeight+'px'">
				<el-carousel-item v-for="item in lunbo" :key="item.id">
					<el-row>
						<el-col>
							<img ref="imgHeight" @load="imgload" style="width:100%;" :src="item.imgl" alt />
						</el-col>
					</el-row>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default {
		// name: 'Home',
		data() {
			return {
				lunbo: [{
						id: 1,
						imgl: "http://image31.bookschina.com/uploadfiles/images/14216_ad990.jpg?id=3",
					},
					{
						id: 2,
						imgl: "http://image31.bookschina.com/uploadfiles/images/14261_ad990.jpg?id=5",
					},
					{
						id: 3,
						imgl: "http://image31.bookschina.com/pro-images/200916fd/990360.jpg?id=21",
					},
					{
						id: 4,
						imgl: "http://image31.bookschina.com/pro-images/200918sk/990360.jpg?id=21",
					},
				],
				imgHeight: "",
			};
		},
		components: {},
		methods: {
			imgload() {
				this.$nextTick(() => {
					this.imgHeight = this.$refs.imgHeight[0].height;
					// console.log(this.$refs.imgHeight[0].height);
				});
			},
		},
		mounted() {
			this.imgload();
			window.addEventListener(
				"resize",
				() => {
					this.imgHeight = this.$refs.imgHeight[0].height;
					this.imgload();
				},
				false
			);
		},
	};
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.lunbo-box {
		margin-top: 20px;
	}

	/* .lunbo-w {
		 width: 100%;
		 height: 800px;
	 } */
</style>
