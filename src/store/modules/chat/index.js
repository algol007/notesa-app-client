import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../../firebaseInit'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    sender: [],
    receiver: [],
    chats: []
  },
  mutations: {
    receiver (state, data) {
      state.receiver = data
    },
    chats (state, data) {
      state.chats = data
      console.log(state.chats)
    },
    clear (state) {
      state.receiver = []
      // console.log(state.chats)
    }
  },
  actions: {
    getReceiver (context, data) {
      context.commit('receiver', data)
    },
    showChat (context, { sender, receiver }) {
      db.collection('chats').where('sender', '==', sender.email)
      db.collection('chats').where('receiver', '==', receiver.email)
      db.collection('chats').orderBy('createdAt')
        .onSnapshot((querySnapshot) => {
          const allMessages = []
          querySnapshot.forEach((doc) => {
            allMessages.push(doc.data())
          })
          context.commit('chats', allMessages)
        })
    },
    clearRoom (context) {
      context.commit('clear')
    }
  }
})
