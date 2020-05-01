import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'
import map from './modules/map'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    chat,
    map,
    user
  }
})
