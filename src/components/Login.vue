<template>
  <div class="login">
    <div class="forms lg:w-1/2 xl:w-1/3">
      <form @submit="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="alert bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-3" role="alert" v-if="error.length !=0">
          <strong class="font-bold">{{ error[0] }}</strong>
          <span class="close absolute top-0 bottom-0 right-0 px-4 py-2" @click="close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="alert bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-3" role="alert" v-if="success.length !=0">
          <strong class="font-bold">{{ success[0] }}</strong>
          <span class="close absolute top-0 bottom-0 right-0 px-4 py-2" @click="close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" v-model="user.email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Kata Sandi
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata Sandi" v-model="user.password">
        </div>
        <div class="flex items-center justify-between">
          <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Masuk
          </button>
          <router-link class="forgot inline-block align-baseline font-bold text-sm hover:text-gray-700" to="/auth/register">
            Belum Punya Akun? Daftar
          </router-link>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 ALGOL007. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      id: null,
      error: [],
      success: [],
      user: {
        email: null,
        password: null
      }
    }
  },
  beforeCreate () {
    const isLogin = localStorage.getItem('items')
    if (isLogin) {
      this.$router.push('/')
    }
  },
  methods: {
    close () {
      const close = document.querySelector('.alert')
      close.classList.toggle('hide')
      console.log('close')
      this.error = []
    },
    login (e) {
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(res => {
          console.log(res)
          localStorage.setItem('items', JSON.stringify({ isLogin: true }))
          firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
            .update({
              status: true
            })
          this.success.push('Login Successfully!')
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        })
        .catch(err => {
          this.error.push(err.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    padding: 0 20px;
  }
  .forms{
    margin: 0 auto;
  }
  .signin{
    background-color: #3B6978;
  }
  .forgot{
    color: #3B6978;
    padding-left: 10px;
    text-align: right;
  }
  .close{
    cursor: pointer;
  }
</style>
