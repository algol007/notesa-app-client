import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    userC: [],
    chats: []
  },
  mutations: {
    user (state, data) {
      state.userC = data
      // console.log(state.userC)
    },
    userChat (state, data) {
      state.chats = data
    },
    clear (state) {
      state.userC = []
      // console.log(state.chats)
    }
  },
  getters: {
    senderChat (state) {
      const senderChat = state.chats.filter(chat => {
        return chat.userId === 1
      })
      // console.log(senderChat)
      return senderChat
    }
  },
  actions: {
    userChat (context, data) {
      context.commit('user', data)
    },
    getUserChat (context, id) {
      // console.log(id)
      axios
        .get(process.env.VUE_APP_BASE_URL + `chat/room/${id}`)
        .then(res => {
          if (res.data.status === 0) {
            context.commit('userChat', res.data.status)
          } else {
            context.commit('userChat', res.data.chat.rows)
          }
        })
    },
    clearRoom (context) {
      context.commit('clear')
    }
  }
})
