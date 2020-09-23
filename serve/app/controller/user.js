'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class UserController extends Controller {

  //增加购物车
  async usercar() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.user.usercar(ctx.request.body);
  }

  //查询购物车
  async lookusercar() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.user.lookusercar(ctx.request.body);
  }

  //删除用户购物车delusercar
  async delusercar() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.user.delusercar(ctx.request.body);
  }

  //用户信息获取
  async user() {
    const { ctx } = this;
    console.log(this.ctx.request.body);
    ctx.body = await ctx.service.user.user(this.ctx.request.body);
  }

  //更改用户信息
  async changeuser() {
    const { ctx } = this;
    console.log(this.ctx.request.body, 6666666666666666);
    let data1 = this.ctx.request.body
    // console.log(data1)
    let file1 = ctx.request.files[0];
    console.log(data1, file1)
    if (file1) {
      const oldpath = ctx.request.files[0].filepath;
      let newpath = __dirname + `/../public/userimg/${path.basename(file1.filepath)}`;
      fs.copyFileSync(oldpath, newpath);
      fs.unlinkSync(oldpath);
      // fs.renameSync(oldpath,newpath);
      let imgurl = `http://192.168.3.124:7001/public/userimg/${path.basename(file1.filepath)}`;
      ctx.request.body.headimg = imgurl;
      console.log(data1, 4444444444444444444);
      ctx.body = await ctx.service.user.changeuser(this.ctx.request.body);
    }
  }

  //查询用户登录
  async userlogin() {
    const { ctx } = this;
    console.log(this.ctx.request.body);
    let result1 = await ctx.service.user.userlogin(this.ctx.request.body);
    console.log(result1[0].admin);
    ctx.session.admin = result1[0].admin
    console.log(ctx.session.admin)
    ctx.body = result1
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
    var verif = await ctx.service.user.verif();
    ctx.session.code1 = verif.text;
    // console.log(verif.text,2222)
    ctx.body = verif
  }


}

module.exports = UserController;