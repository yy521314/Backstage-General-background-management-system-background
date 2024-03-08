/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-08 17:27:52
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-08 21:25:16
 * @FilePath: \后台通用管理系统\后端\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");

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
//绑定侦听和端口
app.listen(3007, () => {
    console.log("http://127.0.0:3007");
});