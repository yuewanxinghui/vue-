'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.test()
  }

  async del() {
    const { ctx } = this;
    let data1 = this.ctx.request.body
    console.log(data1)
    ctx.body = await ctx.service.home.del(data1)
  }

  async updata() {
    const { ctx } = this;
    let data1 = this.ctx.request.body
    console.log(data1)  
    ctx.body = await ctx.service.home.updata(data1)
  }

}

module.exports = HomeController;
