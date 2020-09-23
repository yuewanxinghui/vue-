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

	//更新数据
	async updata(e) {
		const {
			ctx
		} = this;
		let sql = `UPDATE book SET price=${e.price},active='${e.active}' WHERE id=${e.id}`;
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		return result1;
	}

	//增加商品
	async add(e) {
		const {
			ctx
		} = this;
		let sql = `INSERT  INTO book (bookname,bookpic,bookwriter,price,active,tid) VALUES('${e.bookname}', '${e.img}', '${e.bookwriter}',${e.price},'${e.active}',${e.tid})`;
		let result1 = await ctx.app.mysql.query(sql);
		console.log(result1);
		return result1;
	}

}
module.exports = HomeService;
