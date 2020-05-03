import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import * as VueGoogleMaps from 'vue2-google-maps'
// import socketio from 'socket.io'
// import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBXBYBHhSJHnAU89-bfCkl-Ke_YNFi79eg',
    libraries: 'places'
  }
})

// export const SocketInstance = socketio('http://192.168.1.97:5000/')

// Vue.use(VueSocketIO, SocketInstance)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import Pusher from 'pusher-js'

// Pusher.logToConsole = true

// var pusher = new Pusher('a530e0850998e71b78e4', {
//   cluster: 'ap1'
// })

// var channel = pusher.subscribe('my-channel')
// channel.bind('my-event', function (data) {
//   app.messages.push(JSON.stringify(data))
// })

// const pusher = new Pusher ('a530e0850998e71b78e4', { //eslint-disable-line
//   cluster: 'ap1',
//   authEndpoint: 'http://192.168.1.97:5000/pusher/auth',
//   authorizer: function (channel, options) {
//     return {
//       authorize: function (socketId, callback) {
//         fetch(options.authEndpoint, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             socket_id: socketId,
//             channel_name: channel.name,
//             user_id: localStorage.getItem('detexi-user-id')
//           })
//         })
//           .then(res => res.json())
//           .then(authInfo => {
//             callback(false, authInfo) //eslint-disable-line
//           })
//       }
//     }
//   }
// })
