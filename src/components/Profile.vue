<template>
  <div class="profile">
    <div class="forms lg:w-1/2 xl:w-1/3">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="navigation w-full flex">
          <div class="back">
            <router-link to="/">
              <i class="fas fa-arrow-left"></i>
            </router-link>
          </div>
          <div class="see-maps" @click="$emit('maps')">
            <i class="fas fa-map-marked-alt"></i>
          </div>
        </div>
        <div class="alert bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-3 mt-3" role="alert" v-if="success.length !=0">
          <strong class="font-bold">{{ success[0] }}</strong>
          <span class="close absolute top-0 bottom-0 right-0 px-4 py-2" @click="close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="profile-img mb-5">
          <img :src="receiver.image" :alt="receiver.image" class="mx-auto rounded-full">
        </div>
        <form @submit="saveChanges" class="profile-info">
          <div class="profile-name mb-3 text-xl">
            <input type="text" v-model="receiver.name" class="text-center outline-none" id="name" required
            v-if="this.profileId == this.userId">
            <input type="text" v-model="receiver.name" class="text-center outline-none transparent" id="name" disabled
            v-else>
          </div>
          <div class="profile-email pb-5 text-md text-gray-600">
            <input type="text" :value="receiver.email" class="text-center outline-none transparent" id="email" disabled>
          </div>
          <div class="button-save flex flex-row-reverse mt-5" v-if="this.profileId == this.userId">
            <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
            <!-- <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onclick="document.getElementById('getFile').click()">Upload Image</button> -->
            <input class="signin upload hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" type="file" ref="file" @change="upload">
          </div>
        </form>
      </div>
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
      success: [],
      profile: [],
      image: null,
      userId: null,
      profileId: null
    }
  },
  created () {
    this.profileId = this.$route.params.userId
    const items = JSON.parse(localStorage.getItem('items'))
    this.userId = items.id
    // console.log(this.profileId)
    // console.log(this.userId)
  },
  methods: {
    close () {
      const close = document.querySelector('.alert')
      close.classList.toggle('hide')
      console.log('close')
      this.success = []
    },
    upload () {
      const file = this.$refs.file.files[0]
      this.image = file
      console.log(this.$refs.file.value)
    },
    saveChanges (e) {
      e.preventDefault()
      console.log('Hello')
      const formData = new FormData()
      formData.append('name', this.profile.name)
      formData.append('email', this.profile.email)
      formData.append('password', this.profile.password)
      if (this.image !== null) {
        formData.append('image', this.image)
      } else {
        formData.append('image', this.profile.image)
      }
      axios
        .put(process.env.VUE_APP_BASE_URL + 'user/' + this.$route.params.userId, formData)
        .then(res => {
          this.success.push('Profile has been updated!')
          console.log(res)
          this.$refs.file.value = ''
          this.getProfile()
        })
    },
    ...mapActions('user', ['getUserProfile'])
  },
  computed: {
    ...mapState('user', ['userProfile']),
    ...mapState('chat', ['receiver'])
  }
}
</script>

<style lang="scss" scoped>
  .profile{
    width: 100%;
    padding: 0 20px;
  }
  .forms{
    margin: 0 auto;
  }
  .back, .see-maps{
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
  .upload{
    max-width: 300px;
  }
  .transparent{
    background: transparent;
  }
  .navigation{
    justify-content: space-between;
  }
</style>
