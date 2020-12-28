import Mock from 'mockjs'
import data from '../mock/data.json'

// 模拟店铺信息
Mock.mock('/info',{code:0,data:data.info})
// 模拟店铺食品信息
Mock.mock('/goods',{code:0,data:data.goods})
// 模拟店铺评价信息
Mock.mock('/ratings',{code:0,data:data.ratings})
