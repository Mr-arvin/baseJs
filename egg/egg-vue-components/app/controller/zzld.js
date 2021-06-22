'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '测试数据--1333但是多福多寿';
  }
}

module.exports = HomeController;
