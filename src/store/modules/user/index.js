import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import db from '../../../firebaseInit'
import firebase from 'firebase'

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
    allUsers (state, data) {
      state.allUsers = data
      const profile = firebase.auth().currentUser
      for (let i = 0; i < data.length; i++) {
        if (state.allUsers[i].email === profile.email) {
          state.user = state.allUsers[i]
        }
      }
    },
    logout (state) {
      state.allUsers = []
      state.user = []
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
    getAllUsers (context) {
      db.collection('users').onSnapshot((querySnapshot) => {
        const allProfile = []
        querySnapshot.forEach(doc => {
          allProfile.push(doc.data())
        })
        context.commit('allUsers', allProfile)
      })
    }
  }
})
