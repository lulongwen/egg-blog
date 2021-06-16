'use strict';

// import { mongo } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const connection = mongoose.createConnection('mongodb://localhost/sso');

// 用户信息
exports.User = connection.model('User', new Schema({
  username: { type: String, required: true }, // 用户名
  password: { type: String, required: true }, // 密码
  avatar: { type: String }, // 头像
  gender: { type: Number, default: 1 }, // 1男，0女
}));

// 应用信息，存储第三方的信息，appId, appKey, _id=appId
exports.Application = connection.model('Application', new Schema({
  appKey: { type: String, required: true }, //
  website: { type: String, required: true }, // 网站名称
  redirect_uri: { type: String, required: true }, // 应用的回调地址
}));

// 授权码，把 mongoDB生成的 ID作为授权码
exports.AuthorizationCode = connection.model('AuthorizationCode', new Schema({
  appId: { type: String, required: true }, // 客户端的 appId
  createdAt: { type: Date, default: Date.now }, // 创建时间
  // permissions是一个外键的数组，类型是文档的主键 ObjectId
  // ref 这个外键是哪个集合的外键
  permissions: [{ type: ObjectId, ref: 'Permission' }],
  user: { type: ObjectId, ref: 'User' }, // 哪个用户的授权
}));

// access_code 模型
exports.AccessToken = connection.model('AccessToken', new Schema({
  appId: { type: String, required: true }, // 客户端的 appId
  refresh_token: { type: String }, // 刷新 token
  // permissions是一个外键的数组，类型是文档的主键 ObjectId
  // ref 这个外键是哪个集合的外键
  permissions: [{ type: ObjectId, ref: 'Permission' }],
  user: { type: ObjectId, ref: 'User' }, // 哪个用户的授权
}));

// 权限
exports.Permission = connection.model('Permission', new Schema({
  // 权限的名称，获取您的昵称，头像，性别
  name: { type: String, required: true },
  // 路径，/users/get_user_info
  route: { type: String, required: true },
}));
