'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class HomeController extends Controller {
	async index() {
		const {
			ctx
		} = this;
		ctx.body = 'hi, egg';
	}

	async test() {
		const {
			ctx
		} = this;
		ctx.body = await ctx.service.home.test()
	}
	

	async onedata() {
		const {
			ctx
		} = this;
		// console.log(this.ctx.request.body)
		ctx.body = await ctx.service.home.onedata(this.ctx.request.body)
	}

	async del() {
		const {
			ctx
		} = this;
		let data1 = this.ctx.request.body
		// console.log(data1)
		ctx.body = await ctx.service.home.del(data1)
	}

	async updata() {
		const {
			ctx
		} = this;
		let data1 = this.ctx.request.body
		// console.log(data1)
		ctx.body = await ctx.service.home.updata(data1)
	}


	//添加商品
	async add() {
		const {
			ctx
		} = this;
		let data1 = this.ctx.request.body
		// console.log(data1)
		let file1 = ctx.request.files[0];
		// console.log(data1, file1)
		if (file1) {
			const oldpath = ctx.request.files[0].filepath;
			let newpath = __dirname + `/../public/upload/${path.basename(file1.filepath)}`;
			fs.copyFileSync(oldpath, newpath);
			fs.unlinkSync(oldpath);
			// fs.renameSync(oldpath,newpath);
			let imgurl = `http://192.168.3.124:7001/public/upload/${path.basename(file1.filepath)}`;
			ctx.request.body.img = imgurl;
			// console.log(data1);
			let result1 = await ctx.service.home.add(ctx.request.body);
			if (result1.affectedRows >= 1) {
				ctx.body = '添加成功';
			}
		}
	}

	//模糊查询
	async like() {
		const {
			ctx
		} = this;
		let data1 = this.ctx.request.body
		// console.log(data1)
		ctx.body = await ctx.service.home.like(data1)
	}

}

module.exports = HomeController;
