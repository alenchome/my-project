/*
通过mutation间接更新state 的多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_LOGINPWD,
  RECEIVE_LOGINSMS,
  RECEIVE_LOGINOUT,
  RECEIVE_USERINFO,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPRATINGS
} from './mutation-types.js'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqLoginPwd,
  reqLoginSms,
  reqLoginOut,
  reqUserInfo,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api/index.js'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax 请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mucation
    if(result.code===0){
      const address= result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类列表
  async getCategorys({commit,state}){
    //发送异步ajax 请求
    const result = await reqFoodCategorys()
    //提交一个mucation
    if(result.code===0){
      const categorys= result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取店铺列表
  async getshops({commit,state}){
    //发送异步ajax 请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude,latitude)
    //提交一个mucation
    if(result.code===0){
      const shops= result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //手机号成功登录,保存信息到 state
  getuserinfosms({commit},userinfo){
      commit(RECEIVE_LOGINSMS,{userinfo})
  },

  //账号密码验证码成功登录，保存到 state
  getuserinfopwd({commit},userinfo){
      commit(RECEIVE_LOGINPWD,{userinfo})
  },

  //退出登录
  async loginout({commit}){
    const result = await reqLoginOut()
    if(result.code === 0){
      const userinfo= {}
      commit(RECEIVE_LOGINOUT,{userinfo})
    }
  },

  //获取用户信息
  async userinfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      const userinfo = result.data
      commit(RECEIVE_USERINFO,{userinfo})
    }
  },
  //获取商铺信息
  async shopinfo({commit}){
    const result = await reqShopInfo()
    if(result.code === 0){
      const shopinfo= result.data
      commit(RECEIVE_SHOPINFO,{shopinfo})
    }
  },
  //获取商铺分类
  async shopgoods({commit}){
    const result = await reqShopGoods()
    if(result.code === 0){
      const shopgoods= result.data
      commit(RECEIVE_SHOPGOODS,{shopgoods})
    }
  },
  //获取商铺评论
  async shopratings({commit}){
    const result = await reqShopRatings()
    if(result.code === 0){
      const shopratings= result.data
      commit(RECEIVE_SHOPRATINGS,{shopratings})
    }
  },

}
