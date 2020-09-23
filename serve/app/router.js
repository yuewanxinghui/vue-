'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);//测试用数据
  router.post('/del', controller.home.del);//删除商品
  router.post('/add', controller.home.add);//增加商品
  router.post('/updata', controller.home.updata);//增加商品
  router.get('/usercar', controller.user.usercar);//用户购物车
  router.post('/userlogin', controller.user.userlogin);
  router.post('/userzhuce', controller.user.userzhuce);
  router.get('/verif', controller.user.verif);
  router.post('/user', controller.user.user);//用户信息

};
