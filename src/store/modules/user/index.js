import Vue from 'vue'
import Vuex from 'vuex'
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
    allUsers (state, data) {
      const profile = firebase.auth().currentUser
      const users = data.filter(user => { // eslint-disable-line
        return user.email !== profile.email
      })
      state.allUsers = users
      state.user = profile
    },
    logout (state) {
      state.allUsers = []
      state.user = []
    }
  },
  actions: {
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
