import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    user: [],
    allUsers: [],
    userProfile: []
  },
  mutations: {
    user (state, data) {
      state.user = data
      // console.log(data)
    },
    userProfile (state, data) {
      state.userProfile = data
      // console.log(state.userProfile)
    },
    allUsers (state, data) {
      const items = JSON.parse(localStorage.getItem('items'))
      // console.log(items.id)
      for (let i = 0; i < data.length; i++) {
        if (data[i].id !== items.id) {
          state.allUsers.push(data[i])
        }
        // console.log(data[i])
      }
      // console.log(state.allUsers)
    }
  },
  actions: {
    getUserById (context, id) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id)
        .then(res => {
          context.commit('user', res.data.user)
        })
    },
    getUserProfile (context, id) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id)
        .then(res => {
          context.commit('userProfile', res.data.user)
        })
    },
    getAllUsers (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user')
        .then(res => {
          context.commit('allUsers', res.data.users.rows)
        })
    }
  }
})
