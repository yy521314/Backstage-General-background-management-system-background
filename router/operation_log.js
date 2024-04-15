/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 18:18:23
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 18:18:50
 * @FilePath: \Backstage-General-background-management-system-background\router\operation_log.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 操作日志模块
// 引入express
const express = require("express");
// 使用express框架的路由
const router = express.Router();
// 导入file路由处理模块
const operationLogHandler = require("../router_handle/operation_log.js");

// 操作记录
router.post("/operationLog", operationLogHandler.operationLog);
// 返回操作日志列表
router.post("/operationLogList", operationLogHandler.operationLogList);
// 搜索最近十条操作记录
router.post(
    "/searchOperationLogList",
    operationLogHandler.searchOperationLogList
);
// 返回操作日志列表的长度
router.post(
    "/operationLogListLength",
    operationLogHandler.operationLogListLength
);
// 监听换页返回数据
router.post(
    "/returnOperationListData",
    operationLogHandler.returnOperationListData
);
// 清空操作日志
router.post(
    "/clearOperationLogList",
    operationLogHandler.clearOperationLogList
);

module.exports = router;