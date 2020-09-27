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

	async onedata(e) {
		const {
			ctx
		} = this;
		// console.log(e.id)
		let sql = `select * from book where bid=${e.id}`;
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
		// console.log(result1);
		return result1;
	}

	//更新数据
	async updata(e) {
		const {
			ctx
		} = this;
		let sql = `UPDATE book SET price=${e.price},active='${e.active}' WHERE bid=${e.id}`;
		let result1 = await ctx.app.mysql.query(sql);
		// console.log(result1);
		return result1;
	}

	//增加商品
	async add(e) {
		const {
			ctx
		} = this;
		let sql = `INSERT  INTO book (bookname,bookpic,bookwriter,price,active,tid) VALUES('${e.bookname}', '${e.img}', '${e.bookwriter}',${e.price},'${e.active}',${e.tid})`;
		let result1 = await ctx.app.mysql.query(sql);
		// console.log(result1);
		return result1;
	}
	
	//模糊查询
	async like(e) {
		const {
			ctx
		} = this;
		let sql = `select * from book WHERE bookname LIKE '%${e.likeword}%'`;
		let result1 = await ctx.app.mysql.query(sql);
		// console.log(result1,9999999999999);
		if(result1[0]){
		return result1;
		}else{
			return {code:4001,info:"没有此商品"}
		}
	}

}
module.exports = HomeService;
