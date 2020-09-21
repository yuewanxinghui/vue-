'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.post('/del', controller.home.del);
  router.get('/usercar', controller.user.usercar);
  router.post('/userlogin', controller.user.userlogin);
  router.post('/userzhuce', controller.user.userzhuce);

};
