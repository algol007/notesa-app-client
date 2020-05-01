<template>
  <div class="register">
    <div class="forms lg:w-1/2 xl:w-1/3">
      <form @submit="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="alert bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-3" role="alert" v-if="error.length !=0">
          <strong class="font-bold">{{ error[0] }}</strong>
          <span class="close absolute top-0 bottom-0 right-0 px-4 py-2" @click="close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Nama Lengkap
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nama Lengkap" v-model="user.name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="user.email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Kata Sandi
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata Sandi" v-model="user.password" required>
          <p class="text-red-500 text-xs italic pt-1" v-if="user.password.length > 0 && user.password.length < 6">Password min 6 character.</p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
            Ulangi Kata Sandi
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password2" placeholder="Ulangi Kata Sandi" v-model="user.password2" required>
          <p class="text-red-500 text-xs italic pt-1 mb-3" v-if="user.password2.length > 0 && user.password2.length < 6">Password min 6 character.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Daftar
          </button>
          <router-link class="forgot inline-block align-baseline font-bold text-sm hover:text-gray-700" to="/auth/login">
            Sudah Punya Akun? Masuk
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
// import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        name: null,
        email: null,
        password: '',
        password2: ''
      },
      error: []
    }
  },
  methods: {
    close () {
      const alert = document.querySelector('.alert')
      alert.classList.toggle('hide')
      this.error = []
    },
    register (e) {
      e.preventDefault()
      axios
        .post(process.env.VUE_APP_BASE_URL + 'auth/signup', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
        .then(res => {
          if (res.data.status === 0) {
            this.error.push('Email has been registered!')
          } else {
            console.log(res)
            this.$router.push('/auth/login')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .register{
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
  }
</style>
