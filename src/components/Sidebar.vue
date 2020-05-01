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
      <chat v-for="(user, index) in users" :key="index" :name="user.name" message="Message" :image="user.image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import searchBox from '@/components/SearchBox.vue'
import chat from '@/components/Chat.vue'

export default {
  name: 'Sidebar',
  components: {
    'search-box': searchBox,
    chat
  },
  data () {
    return {
      users: [],
      foo: []
    }
  },
  methods: {
    ...mapActions('user', ['getAllUsers']),
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
    },
    activeChat (id) {
      const chat = document.querySelector('.chat')
      // console.log(chat.key)
      chat.classList.toggle('active')
    }
  },
  computed: {
    ...mapState('user', ['allUsers']),
    ...mapState('user', ['user'])
  },
  mounted () {
    // this.getAllUsers()
    this.getUsers()
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
</style>
