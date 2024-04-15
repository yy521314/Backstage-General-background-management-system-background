/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 18:19:36
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 18:20:01
 * @FilePath: \Backstage-General-background-management-system-background\router\login_log.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 登录日志模块
// 引入express
const express = require("express");
// 使用express框架的路由
const router = express.Router();
// 导入file路由处理模块
const loginLogHandler = require("../router_handle/login_log.js");

// 登录记录
router.post("/loginLog", loginLogHandler.loginLog);
// 返回登录日志列表
router.post("/loginLogList", loginLogHandler.loginLogList);
// 搜索最近十条登录记录
router.post("/searchLoginLogList", loginLogHandler.searchLoginLogList);
// 返回登录日志列表的长度
router.post("/loginLogListLength", loginLogHandler.loginLogListLength);
// 监听换页返回数据
router.post("/returnLoginListData", loginLogHandler.returnLoginListData);
// 清空登录日志
router.post("/clearLoginLogList", loginLogHandler.clearLoginLogList);

module.exports = router;