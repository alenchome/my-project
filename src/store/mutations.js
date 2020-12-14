/*
直接更新state的 多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_LOGINSMS,
  RECEIVE_LOGINPWD,
  RECEIVE_LOGINOUT,
  RECEIVE_USERINFO
} from './mutation-types.js'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_LOGINSMS](state, {userinfo}) {
    state.userinfo = userinfo
  },
  [RECEIVE_LOGINPWD](state, {userinfo}) {
    state.userinfo = userinfo
  },
  [RECEIVE_LOGINOUT](state, {userinfo}) {
    state.userinfo = userinfo
  },
  [RECEIVE_USERINFO](state, {userinfo}) {
    state.userinfo = userinfo
  }


}
