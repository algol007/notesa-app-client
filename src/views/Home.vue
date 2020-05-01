<template>
  <div class="home flex">
    <sidebar class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" @selected="selected" />
    <div class="main w-full" v-if="this.userC.length !== 0">
      <navbar />
      <div class="chats">
        <chat-box />
      </div>
      <send-box />
    </div>
    <div class="main w-full" v-else>
      <div class="no-chats px-5">
        <div class="icon">
          <i class="fas fa-comments"></i>
        </div>
        <h1>Select contact to start chat</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import sidebar from '@/components/Sidebar.vue'
import navbar from '@/components/Navbar.vue'
import chatBox from '@/components/ChatBox.vue'
import sendBox from '@/components/SendBox.vue'

export default {
  name: 'Home',
  components: {
    sidebar,
    navbar,
    'chat-box': chatBox,
    'send-box': sendBox
  },
  data () {
    return {
      storage: []
    }
  },
  beforeCreate () {
    const isLogin = localStorage.getItem('items')
    if (!isLogin) {
      this.$router.push('/auth/login')
    }
  },
  created () {
    this.storage = JSON.parse(localStorage.getItem('items'))
    this.getUserById(this.storage.id)
  },
  methods: {
    ...mapActions('user', ['getUserById']),
    ...mapActions('chat', ['userChat']),
    selected (data) {
      this.userChat(data)
    }
  },
  computed: {
    ...mapState('chat', ['userC'])
  }
}
</script>

<style lang="scss" scoped>
  .home{
    height: 100vh;
    display: flex;
    background-color: #CAE8D5;
  }
  .navbar{
    // position: fixed;
    width: 100%;
  }
  .chats{
    padding: 10px 20px;
  }
  .no-chats .icon{
    text-align: center;
    padding-top: 100px;
    font-size: 8em;
    color: #204051;
  }
  .no-chats h1{
    text-align: center;
    font-size: 2em;
    color: #204051;
  }
  @media screen and (max-width: 768px){
    .home{
      flex-wrap: wrap;
    }
  }
</style>
