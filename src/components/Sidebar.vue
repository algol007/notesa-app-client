<template>
  <div class="sidebar">
    <div class="title pl-4 text-white flex">
      <div class="brand flex">
        <div class="icon"><i class="fas fa-comments"></i></div>
        <h3>Notesa App</h3>
      </div>
      <div class="icon2">
        <router-link :to="`/profile/${user.id}`"><i class="fas fa-info-circle"></i></router-link>
      </div>
      <div class="icon2 pr-3">
        <router-link to="/logout"><i class="fas fa-sign-out-alt"></i></router-link>
      </div>
    </div>
    <search-box class="search"></search-box>
    <div class="chat-list">
      <!-- Chat -->
      <div class="chat w-full flex px-2 py-3 hover:bg-gray-200" v-for="(user, index) in users" :key="index"  @click="$emit('selected', user)">
        <div class="profile-img">
          <img :src="user.image" :alt="user.image" class="h-12 rounded-full">
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
import axios from 'axios'
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
      users: [],
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
    getUsers () {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user')
        .then(res => {
          // console.log(res.data.users.rows)
          const data = res.data.users.rows
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].id)
            // console.log(this.user.id)
            const user = JSON.parse(localStorage.getItem('items'))
            if (data[i].id !== user.id) {
              this.users.push(data[i])
            }
          }
        })
    }
  },
  mounted () {
    this.getUsers()
  },
  computed: {
    ...mapState('user', ['user'])
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
</style>
