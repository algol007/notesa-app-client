<template>
  <div class="login">
    <div class="forms lg:w-1/2 xl:w-1/3">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="back">
          <router-link to="/">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="profile-img mb-5">
          <img :src="profile.image" :alt="profile.image" class="mx-auto rounded-full">
        </div>
        <form @submit="saveChanges" class="profile-info">
          <div class="profile-name mb-3 text-xl">
            <input type="text" v-model="profile.name" class="text-center outline-none" id="name" required>
          </div>
          <div class="profile-email pb-5 text-md text-gray-600">
            <input type="text" :value="profile.email" class="text-center outline-none" id="email" readonly>
          </div>
          <div class="button-save flex flex-row-reverse mt-5">
            <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
            <!-- <a href="#name" class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" type="button">Edit</a> -->
          </div>
        </form>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 ALGOL007. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      profile: []
    }
  },
  created () {
    this.getUserProfile(this.$route.params.userId)
  },
  mounted () {
    this.getProfile()
  },
  methods: {
    getProfile () {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + this.$route.params.userId)
        .then(res => {
          // console.log(res.data.user)
          this.profile = res.data.user
        })
    },
    saveChanges () {
      console.log('save')
    },
    ...mapActions('user', ['getUserProfile'])
  },
  computed: {
    ...mapState('user', ['userProfile'])
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
  .back{
    cursor: pointer;
  }
  .signin{
    background-color: #3B6978;
  }
  .profile-img img{
    height: 100px;
    width: 100px;
  }
  .profile-name input,
  .profile-email input,
  .button-save{
    width: 100%;
  }
  .profile-name input:focus{
    border-bottom: 2px solid #3B6978;
  }
</style>
