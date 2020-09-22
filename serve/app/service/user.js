'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class UserService extends Service {

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

	//用户登录
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
				return {code:1000,info:"登录成功"}
			} else if (result1[0].pwd !== e.pwd) {
				return `密码或账号错误`
			}
		} else {
			return {code:1001,info:"请先注册"};
		}
	}

	//用户注册
	async userzhuce(e) {
		const { ctx } = this;
		console.log(e)
		if (e.yzm.toUpperCase() != e.code1.toUpperCase()) {
			console.log(111)
			return { code: 2003, info: '验证码错误' }
		} else {
			let sql = `select * from user WHERE zhanghao=${e.zhanghao}`;
			let result1 = await ctx.app.mysql.query(sql);
			console.log(result1);
			if (result1[0]) {
				console.log(1111)
				return {
					code: 2001,
					info: "已有账号,请登录"
				}
			} else {
				let sql1 = `INSERT  INTO user (zhanghao,pwd) VALUES(${e.zhanghao}, ${e.pwd})`
				let result2 = await ctx.app.mysql.query(sql1);
				console.log(result2);
				return {
					code: 2000,
					info: "注册成功"
				}
			}
		}

	}

	//验证码
	async verif() {
		const {
			ctx
		} = this;
		const verif = svgCaptcha.create({
			size: 4,
			fontSize: 50,
			width: 100,
			height: 40,
			bacground: '#cc9966'
		});

		// ctx.session.code = verif.text;
		// console.log(ctx.session.code,1111)
		return verif;
	}


}
module.exports = UserService;