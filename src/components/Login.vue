<template>
  <div class="login">
    <div class="forms lg:w-1/2 xl:w-1/3">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Kata Sandi
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Kata Sandi">
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
export default {
  name: 'Login'
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
</style>
