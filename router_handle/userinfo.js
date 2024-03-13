/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-12 19:10:23
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-13 23:05:45
 * @FilePath: \Backstage-General-background-management-system-background\router_handle\userinfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const db = require("../db/index.js");
// 导入bcrypt加密中间件
const bcrypt = require("bcryptjs");
// 导入node.js的crypto库生成uuid
const crypto = require("crypto");

// 导入fs处理文件
fs = require("fs");
// 上传头像
exports.uploadAvatar = (req, res) => {
    res.send(req);
    // 生成唯一标识
    // const onlyId = crypto.randomUUID();
    // let oldName = req.files[0].filename;
    // let newName = Buffer.from(req.files[0].originalname, "latin1").toString(
    //     "utf8"
    // );
    // fs.renameSync("./public/upload/" + oldName, "./public/upload/" + newName);
    // const sql = "insert into image set ?";
    // db.query(
    //     sql, {
    //         image_url: `https://121.36.70.237:3007/upload/${newName}`,
    //         onlyId,
    //     },
    //     (err, result) => {
    //         if (err) return res.cc(err);
    //         res.send({
    //             onlyId,
    //             status: 0,
    //             url: "https://121.36.70.237:3007/upload/" + newName,
    //         });
    //     }
    // );
};
//绑定接口
// 绑定账号 onlyid account url
exports.bindAccount = (req, res) => {
    const { account, onlyId, url } = req.body;
    const sql = "update image set account = ? where onlyId = ?";
    db.query(sql, [account, onlyId], (err, result) => {
        if (err) return res.cc(err);
        if (result.affectedRows == 1) {
            const sql1 = "update users set image_url = ? where account = ?";
            db.query(sql1, [url, account], (err, result) => {
                if (err) return res.cc(err);
                res.send({
                    status: 0,
                    message: "修改成功",
                });
            });
        }
    });
};
// 修改用户密码 先输入旧密码 oldPassword 新密码 newPassword id
exports.changePassword = (req, res) => {
    const sql = "select password from users where id = ?";
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err);
        // bcrypt
        const compareResult = bcrypt.compareSync(
            req.body.oldPassword,
            result[0].password
        );
        if (!compareResult) {
            return res.send({
                status: 1,
                message: "原密码错误",
            });
        }
        req.body.newPassword = bcrypt.hashSync(req.body.newPassword, 10);
        const sql1 = "update users set password = ? where id = ?";
        db.query(sql1, [req.body.newPassword, req.body.id], (err, result) => {
            if (err) return res.cc(err);
            res.send({
                status: 0,
                message: "修改成功",
            });
        });
    });
};
// 获取用户信息 接收参数 id
exports.getUserInfo = (req, res) => {
    const sql = "select * from users where id = ?";
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err);
        result[0].password = "";
        res.send(result[0]);
    });
};

// 修改姓名 接收参数 id name
exports.changeName = (req, res) => {
    const { id, name } = req.body;
    const sql = "update users set name = ? where id = ?";
    db.query(sql, [name, id], (err, result) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: "修改成功",
        });
    });
};
// 修改性别 接收参数 id sex
exports.changeSex = (req, res) => {
    const { id, sex } = req.body;
    const sql = "update users set sex = ? where id = ?";
    db.query(sql, [sex, id], (err, result) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: "修改成功",
        });
    });
};

// 修改邮箱 接收参数 id email
exports.changeEmail = (req, res) => {
    const { id, email } = req.body;
    const sql = "update users set email = ? where id = ?";
    db.query(sql, [email, id], (err, result) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: "修改成功",
        });
    });
};
// 验证账户和与邮箱是否一致 email account
exports.verifyAccountAndEmail = (req, res) => {
    const { account, email } = req.body;
    const sql = "select * from users where account = ?";
    db.query(sql, account, (err, result) => {
        if (err) return res.cc(err);
        // res.send(result[0].email)
        if (email == result[0].email) {
            res.send({
                status: 0,
                message: "查询成功",
                id: result[0].id,
            });
        } else {
            res.send({
                status: 1,
                message: "查询失败",
            });
        }
    });
};
// 登录页面修改密码 参数 newPassword id
exports.changePasswordInLogin = (req, res) => {
    const user = req.body;
    user.newPassword = bcrypt.hashSync(user.newPassword, 10);
    const sql = "update users set password = ? where id = ?";
    db.query(sql, [user.newPassword, user.id], (err, result) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: "更新成功",
        });
    });
};