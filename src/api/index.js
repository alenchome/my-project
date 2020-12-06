/*
包含n个 接口请求函数的模块
接口请求函数 以 req 前缀命名
函数返回值：promise 对象
*/
import ajax from './ajax'

//1、根据经纬度获取位置详情](#1根据经纬度获取位置详情) 参数类型：param
export const reqAddress = geohash => ajax('/api/position/' + geohash)
//2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodCategorys = () => ajax('/api/index_category')
//3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)  {longitude,latitude} es6对象属性名是变量名， 变量值 是 属性值
export const reqShops = (longitude,latitude) => ajax('/api/shops',{longitude,latitude})
//4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqSearchShops =  (keyword,geohash) => ajax('/api/search_shops',{keyword,geohash})
//5、获取一次性验证码](#5获取一次性验证码)
export const reqCaptha = () => ajax('/api/captcha')
//6、用户名密码登陆](#6用户名密码登陆)
export const reqLoginPwd = (name,pwd,captcha) => ajax('/api/login_pwd',{name,pwd,captcha},'POST')
//7、发送短信验证码](#7发送短信验证码)
export const reqSendcode = phone => ajax('/api/sendcode',{phone})
//8、手机号验证码登陆](#8手机号验证码登陆)
export const reqLoginSms = (phone,code) => ajax('/api/login_sms',{phone,code},'POST')
//9、根据会话获取用户信息](#9根据会话获取用户信息)
export const reqUserInfo = () => ajax('/api/userinfo')
//10、用户登出](#10用户登出)
export const reqLoginOut = () => ajax('/api/logout')
