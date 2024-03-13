/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-12 19:10:00
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-13 12:19:24
 * @FilePath: \Backstage-General-background-management-system-background\router\userinfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 导入express框架
const express = require("express");
// 使用express框架的路由
const router = express.Router();
// 导入expreJoi
const expressJoi = require("@escook/express-joi");
//导入joi正则验证规则
// 导入验证规则
const {
    password_limit,
    name_limit,
    email_limit,
    forgetPassword_limit,
} = require("../limit/user.js");

// 导入userinfo的路由处理模块
const userinfoHandler = require("../router_handle/userinfo");
// 上传头像
router.post("/uploadAvatar", userinfoHandler.uploadAvatar);
// 绑定账号
router.post("/bindAccount", userinfoHandler.bindAccount);
// 修改用户密码 changePassword
router.post(
    "/changePassword",
    expressJoi(password_limit),
    userinfoHandler.changePassword
);
// 获取用户信息
router.post("/getUserInfo", userinfoHandler.getUserInfo);
// 修改姓名 changeName
router.post("/changeName", expressJoi(name_limit), userinfoHandler.changeName);
// 修改性别
router.post("/changeSex", userinfoHandler.changeSex);
// 修改邮箱
router.post(
    "/changeEmail",
    expressJoi(email_limit),
    userinfoHandler.changeEmail
);
// 验证账号与邮箱 verifyAccountAndEmail
router.post("/verifyAccountAndEmail", userinfoHandler.verifyAccountAndEmail);
// 登录页面修改密码 changePasswordInLogin
router.post(
    "/changePasswordInLogin",
    expressJoi(forgetPassword_limit),
    userinfoHandler.changePasswordInLogin
);

// 向外暴露路由
module.exports = router;