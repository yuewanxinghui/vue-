'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
	//商品列表测试
	async test() {
		const {
			ctx
		} = this;
		let sql = `select * from book`;
		let result1 = await ctx.app.mysql.query(sql);
		return result1;
	}

	//删除商品
	async del(e) {
		const {
			ctx
		} = this;
		let sql = `DELETE FROM book WHERE bid=${e.bid}`;
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		return result1;
	}

	//用户购物车
	async usercar() {
		const {
			ctx
		} = this;
		let sql = `select * from usercar`;
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		return result1;
	}

	async userlogin(e) {
		const {
			ctx
		} = this;
		let sql = `select * from user WHERE zhanghao=${e.zhanghao}`;
		console.log(666)
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		//返回的是查询到的数组
		if (result1[0]) {
			if (result1[0].zhanghao == e.zhanghao && result1[0].pwd == e.pwd) {
				console.log(1111)
				return "登录成功"
			} else if (result1[0].pwd !== e.pwd) {
				return `密码或账号错误`
			}
		} else {
			return "请先注册";
		}
	}

	async userzhuce(e) {
		const {
			ctx
		} = this;
		let sql = `select * from user WHERE zhanghao=${e.zhanghao}`;
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		if (result1[0]) {
			console.log(1111)
			return { code: 2001, info: "已有账号,请登录" }
		} else {
			let sql1 = `INSERT  INTO user (zhanghao,pwd) VALUES(${e.zhanghao}, ${e.pwd})`
			let result2 = await ctx.app.mysql.query(sql1);
			console.log(result2);
			return { code: 2000, info: "注册成功" }
		}
	}



}
module.exports = HomeService;
