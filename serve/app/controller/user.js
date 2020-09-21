'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	
  async usercar() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.usercar();
  }
  
  //查询用户登录
  async userlogin() {
    const { ctx } = this;
    console.log(this.ctx.request.body);
    ctx.body = await ctx.service.home.userlogin(this.ctx.request.body);
  }

  //用户注册
  async userzhuce() {
    const { ctx } = this;
    console.log(this.ctx.request.body);
    ctx.body = await ctx.service.home.userzhuce(this.ctx.request.body);
  }
  
   
}

module.exports = UserController;