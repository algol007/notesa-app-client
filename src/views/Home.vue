<template>
  <div class="home flex bg-gray-300">
    <sidebar class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
    <div class="main w-full">
      <navbar />
      <div class="chats">
        <chat-box />
      </div>
      <send-box />
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
  created () {
    this.storage = JSON.parse(localStorage.getItem('items'))
  },
  methods: {
    ...mapActions('user', ['getUserById'])
  },
  computed: {
    ...mapState('user', ['user'])
  },
  mounted () {
    this.getUserById(this.storage.id)
    console.log(this.storage.id)
  }
}
</script>

<style lang="scss" scoped>
  .home{
    height: 100vh;
    display: flex;
  }
  .navbar{
    // position: fixed;
    width: 100%;
  }
  .chats{
    padding: 10px 20px;
  }
  @media screen and (max-width: 768px){
    .home{
      flex-wrap: wrap;
    }
  }
</style>
