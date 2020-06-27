<template>
  <div class="navbar">
    <div class="title px-5 text-white flex justify-between">
      <router-link to="/profile" >
        <div class="profile-info flex">
            <div class="profile-img">
              <img :src="receiver.image" :alt="receiver.image" width="40px" class="h-10 rounded-full">
            </div>
            <div class="profile-name pl-3 py-2">
              {{ receiver.name }}
            </div>
        </div>
      </router-link>
      <!-- <div class="profile-option flex">
        <div class="input-group">
          <input class="input px-3 bg-transparent outline-none border-bottom" type="text">
        </div>
        <div class="search" @click="search"><i class="fas fa-search"></i></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      userSelect: null
    }
  },
  methods: {
    search () {
      const input = document.querySelector('.input')
      input.classList.toggle('active')
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('chat', ['receiver'])
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    height: 60px;
    background-color: #3B6978;
    display: flex;
    align-items: center;
  }
  .title{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #eeeeee;
    background-color: #3B6978;
  }
  .profile-info{
    cursor: pointer;
  }
  .title .icon{
    font-size: 2em;
    margin-right: 10px;
  }
  .title h3{
    font-size: 1.3em;
  }
  .profile-option{
    justify-content: space-between;
  }
  .input-group{
    margin-right: 20px;
  }
  .active{
    border-bottom: 2px solid #ffffff;
  }
  .search, .attachment, .option{
    cursor: pointer;
  }
</style>
