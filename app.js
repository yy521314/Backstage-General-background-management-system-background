/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-08 17:27:52
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-12 21:15:48
 * @FilePath: \后台通用管理系统\后端\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const Joi = require("joi");
const app = express();
//导入cors
const cors = require("cors");
//导入body-parser
var bodyParser = require("body-parser");
//全局挂载cors
app.use(cors());
// parse application/x-www-form-urlencoded 当extended为true时，值可以为任意类型
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 处理json格式数据方法
app.use(bodyParser.json());
// Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
const multer = require("multer");

// 在server服务端下新建一个public文件，在public文件下新建upload文件用于存放图片
const upload = multer({
    dest: "./public/upload",
});
app.use(upload.any());
//错误拦截
app.use((req, res, next) => {
    // status=0为成功,=1为失败,默认设为1,方便处理失败的情况
    res.cc = (err, status = 1) => {
        res.send({
            status,
            // 判断这个error是错误对象还是字符串
            message: err instanceof Error ? err.message : err,
        });
    };
    next();
});

//Jwt部分
const jwtconfig = require("./jwt_config/index.js");
const { expressjwt: jwt } = require("express-jwt");
// app.use(
//     jwt({
//         secret: jwtconfig.jwtSecretKey,
//         algorithms: ["HS256"],
//     }).unless({
//         path: [/^\/api\//],
//     })
// );

//引入路由模块
const loginRouter = require("./router/login");
app.use("/api", loginRouter);
const userRouter = require("./router/userinfo.js");
app.use("/user", userRouter);

// 对不符合joi规则的情况进行报错
app.use((err, req, res, next) => {
    if (err instanceof Joi.ValidationError) {
        res.send({
            status: 1,
            message: "输入的数据不符合验证规则",
        });
    }
});

//绑定侦听和端口
app.listen(3007, () => {
    console.log("http://127.0.0:3007");
});