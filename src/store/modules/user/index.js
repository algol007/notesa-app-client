import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    user (state, data) {
      state.user = data
      console.log(data)
    }
  },
  actions: {
    getUserById (context, data) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + data)
        .then(res => {
          // console.log(res.data.user)
          context.commit('user', res.data.user)
        })
    }
  }
})
