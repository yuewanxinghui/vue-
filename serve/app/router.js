'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);//测试用数据
  router.post('/onedata', controller.home.onedata);//测试用数据
  router.post('/del', controller.home.del);//删除商品
  router.post('/add', controller.home.add);//增加商品
  router.post('/updata', controller.home.updata);//更新商品
  router.post('/usercar', controller.user.usercar);//增加用户购物车
  router.post('/lookusercar', controller.user.lookusercar);//查询用户购物车
  router.post('/delusercar', controller.user.delusercar);//删除用户购物车
  router.post('/userlogin', controller.user.userlogin);
  router.post('/userzhuce', controller.user.userzhuce);
  router.get('/verif', controller.user.verif);//验证码
  router.post('/user', controller.user.user);//获取用户信息
  router.post('/changeuser', controller.user.changeuser);//更改用户信息
  router.post('/like', controller.home.like);//模糊查询
  

};
