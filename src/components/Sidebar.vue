<template>
  <div class="sidebar">
    <div class="title pl-4 text-white flex">
      <div class="brand flex">
        <div class="icon"><i class="fas fa-comments"></i></div>
        <h3>Notesa App</h3>
      </div>
      <div class="icon2">
        <router-link :to="`/profile/1`"><i class="fas fa-info-circle"></i></router-link>
      </div>
      <div class="icon2 pr-3">
        <router-link to="/logout"><i class="fas fa-sign-out-alt"></i></router-link>
      </div>
    </div>
    <search-box class="search"></search-box>
    <div class="chat-list">
      <!-- Chat -->
      <div class="chat w-full flex px-2 py-3 hover:bg-gray-200" v-for="user in allUsers" :key="user.id"  @click="$emit('selected', user)">
        <div class="profile-img">
          <img :src="user.image" :alt="user.image" width="48px" class="rounded-full h-12">
        </div>
        <div class="profile-info text-gray-900 pl-3">
          <div class="profile-name">
            {{ user.name }}
          </div>
          <div class="profile-msg text-gray-700">
            Message
          </div>
        </div>
      </div>
      <!-- Chat -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import searchBox from '@/components/SearchBox.vue'
// import chat from '@/components/Chat.vue'

export default {
  name: 'Sidebar',
  components: {
    'search-box': searchBox
    // chat
  },
  data () {
    return {
      foo: [],
      data: null
    }
  },
  methods: {
    ...mapActions('chat', ['userChat']),
    selected (data) {
      this.data = data
      // console.log(data)
    },
    activeChat (id) {
      const chat = document.querySelector('.chat')
      // console.log(chat.key)
      chat.classList.toggle('active')
    },
    ...mapActions('user', ['getAllUsers'])
  },
  mounted () {
    this.getAllUsers()
  },
  computed: {
    ...mapState('user', ['allUsers'])
  }
}
</script>

<style scoped lang="scss">
  .sidebar{
    height: 100vh;
    // border-right: 2px solid #3B6978;
    background-color: #ffffff;
    overflow: hidden;
  }
  .chat-list{
    overflow-y: scroll;
    height: 100vh;
    padding-bottom: 110px;
  }
  .brand{
    align-items: center;
  }
  .title{
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    border-right: 2px solid #eeeeee;
    background-color: #3B6978;
  }
  .title .icon{
    font-size: 2em;
    margin-right: 10px;
  }
  .icon2{
    font-size: 1.5em;
    cursor: pointer;
  }
  .title h3{
    font-size: 1.3em;
  }
  .search{
    border-bottom: 2px solid #84A9AC;
  }
  .active{
    background-color: #84A9AC;
  }
  .chat{
    border-bottom: 2px solid #84A9AC;
    overflow: hidden;
    height: 70px;
    cursor: pointer;
  }
  .profile-msg{
    font-size: 14px;
    overflow: hidden;
    height: 20px;
  }
  .profile-name{
    height: 25px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px){
    .sidebar{
      height: 100%;
    }
  }
</style>
