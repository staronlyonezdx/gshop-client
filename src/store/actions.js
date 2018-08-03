import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from './mutation_types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqGoods,
  reqInfo,
  reqRatings
} from '../api'

export default {
  async getAddress({commit, state}) {
    const {latitude, longitude} = state;
    const geohash = `${latitude},${longitude}`;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address});
    }
  },
  async getCategorys({commit}) {
    const result = await reqCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys});
    }
  },
  async getShops({commit, state}) {
    const {latitude, longitude} = state;
    const result = await reqShops({latitude, longitude});
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops});
    }
  },
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  async getUser({commit}) {
    const result = await reqUser();
    if (result.code === 0) {
      const user = result.data;
      commit(RECEIVE_USER, {user})
    }
  },
  async logout({commit}) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER)
    }
  },
  async getGoods({commit}) {
    const result = await reqGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, {goods})
    }
  },
  async getRatings({commit}) {
    const result = await reqRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getInfo({commit}) {
    const result = await reqInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, {info})
    }
  }
}
