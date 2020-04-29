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
          <img src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg" alt="profile-img" class="mx-auto rounded-full">
        </div>
        <form @submit="saveChanges" class="profile-info">
          <div class="profile-name mb-3 text-xl">
            <input type="text" :value="name" class="text-center outline-none" id="name" required>
          </div>
          <div class="profile-email pb-5 text-md text-gray-600">
            <input type="text" :value="this.email" class="text-center outline-none" id="email" readonly>
          </div>
          <div class="button-save flex flex-row-reverse mt-5">
            <button class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
            <a href="#name" class="signin hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" type="button">Edit</a>
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
import db from '../firebaseInit'

export default {
  name: 'Profile',
  data () {
    return {
      user_id: null,
      name: null,
      email: null
    }
  },
  watch: {
    '$route': 'getUser' //eslint-disable-line
  },
  beforeRouterEnter (to, from, next) {
    db.collection('user').where('user_id', '==', to.params.user_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.user_id = doc.data().user_id
            vm.name = doc.data().name
            vm.email = doc.data().email
          })
        })
      })
  },
  mounted () {
    this.getUser()
  },
  methods: {
    saveChanges (e) {
      e.preventDefault()
      console.log('Berhasil')
    },
    getUser () {
      console.log(this.$route.params.user_id)
      db.collection('user').where('user_id', '==', this.$route.params.user_id)
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.user_id = doc.data().user_id
            this.name = doc.data().name
            console.log(this.name)
            this.email = doc.data().email
          })
        })
      // db.collection('user').where('user_id', '==', this.$route.params.user_id)
      //   .then(querySnapshot => {
      //     querySnapshot.forEach(doc => {
      //       console.log(doc.id)
      //       const data = {
      //         id: doc.id,
      //         user_id: doc.data().user_id,
      //         name: doc.data().name,
      //         email: doc.data().email,
      //         password: doc.data().password,
      //         image: doc.data().image
      //       }
      //       this.users.push(data)
      //     })
      //   })
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
