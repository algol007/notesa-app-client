import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    userC: []
  },
  mutations: {
    userChat (state, data) {
      state.userC = data
      // console.log(state.userC)
    }
  },
  actions: {
    userChat (context, data) {
      context.commit('userChat', data)
    }
  }
})
