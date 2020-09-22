'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	
  async usercar() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.usercar();
  }
  
  //查询用户登录
  async userlogin() {
    const { ctx } = this;
    console.log(this.ctx.request.body);
    ctx.body = await ctx.service.user.userlogin(this.ctx.request.body);
  }

  //用户注册
  async userzhuce() {
    const { ctx } = this;
    // console.log(this.ctx.request.body);
    // console.log(ctx.session.code1,11111111111)
    this.ctx.request.body.code1 = ctx.session.code1;
    ctx.body = await ctx.service.user.userzhuce(this.ctx.request.body);
  }
  
  //验证码
  async verif() {
    const { ctx } = this;
    var verif=await ctx.service.user.verif();
    ctx.session.code1 = verif.text;
    console.log(verif.text,2222)
    ctx.body = verif
  }
  
   
}

module.exports = UserController;