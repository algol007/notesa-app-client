import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    userChat: []
  },
  mutations: {
    userChat (state, data) {
      state.userChat = data
      // console.log(data)
    }
  },
  actions: {
    getAllUserChats (context, id) {
      axios
        .get(process.env.VUE_APP_BASE_URL + `chat/user/${id}`)
        .then(res => {
          context.commit('userChat', res.data.chat.rows)
        })
    }
  }
})
