'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async test() {
    const { ctx } = this;
	let sql = `select * from book`;
    let result1 = await ctx.app.mysql.query(sql);
	return result1;
  }
  
  
  
}

module.exports = HomeService;
