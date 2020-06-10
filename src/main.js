import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase'
import './firebaseInit'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBXBYBHhSJHnAU89-bfCkl-Ke_YNFi79eg',
    libraries: 'places'
  }
})

let app
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
