/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-10 11:06:00
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-10 18:43:35
 * @FilePath: \Backstage-General-background-management-system-background\router\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 登录注册模块路由
// 导入express框架
const express = require("express");
// 使用express框架的路由
const router = express.Router();
// 导入expreJoi
const expressJoi = require("@escook/express-joi");
// 导入验证规则
const { login_limit } = require("../limit/login.js");
// 导入login的路由处理模块
const loginHandler = require("../router_handle/login");
// 注册
router.post("/register", expressJoi(login_limit), loginHandler.register);
// 登录
router.post("/login", expressJoi(login_limit), loginHandler.login);

// 向外暴露路由

module.exports = router;