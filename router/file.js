/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 17:00:22
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 17:00:41
 * @FilePath: \Backstage-General-background-management-system-background\router\file.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 合同管理模块
// 引入express
const express = require("express");
// 使用express框架的路由
const router = express.Router();
// 导入file路由处理模块
const fileHandler = require("../router_handle/file");

// 上次文件
router.post("/uploadFile", fileHandler.uploadFile);
// 绑定上传者
router.post("/bindFileAndUser", fileHandler.bindFileAndUser);
// 更新下载量
router.post("/updateDownload", fileHandler.updateDownload);
// 下载文件
router.post("/downloadFile", fileHandler.downloadFile);
// 获取文件列表
router.post("/fileList", fileHandler.fileList);
// 获取文件列表总数
router.post("/fileListLength", fileHandler.fileListLength);
// 监听换页返回数据 文件列表
router.post("/returnFilesListData", fileHandler.returnFilesListData);
// 搜索文件
router.post("/searchFile", fileHandler.searchFile);
// 删除文件
router.post("/deleteFile", fileHandler.deleteFile);
module.exports = router;