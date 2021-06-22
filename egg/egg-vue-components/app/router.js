'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/zhdt', controller.zhdt.index);
  router.get('/zzld', controller.zzld.index);
};
