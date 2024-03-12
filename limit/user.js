/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-12 22:20:07
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-12 22:57:09
 * @FilePath: \Backstage-General-background-management-system-background\limit\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const joi = require("joi");

// string值只能为字符串
// alphanum值为a-z A-Z 0-9
// min是最小长度 max是最大长度
// required是必填项
// pattern是正则

const id = joi.required();
const name = joi
    .string()
    .pattern(/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/)
    .required();
const email = joi
    .string()
    .pattern(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/)
    .required();
const oldPassword = joi
    .string()
    .pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/)
    .min(6)
    .max(12)
    .required();
const newPassword = joi
    .string()
    .pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/)
    .min(6)
    .max(12)
    .required();

exports.password_limit = {
    // 表示对req.body里面的数据进行验证
    body: {
        id,
        oldPassword,
        newPassword,
    },
};

exports.name_limit = {
    // 表示对req.body里面的数据进行验证
    body: {
        id,
        name,
    },
};

exports.email_limit = {
    // 表示对req.body里面的数据进行验证
    body: {
        id,
        email,
    },
};

exports.forgetPassword_limit = {
    // 表示对req.body里面的数据进行验证
    body: {
        id,
        newPassword,
    },
};