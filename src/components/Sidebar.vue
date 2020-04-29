<template>
  <div class="sidebar">
    <div class="title pl-4 text-white flex">
      <div class="brand flex">
        <div class="icon"><i class="fas fa-comments"></i></div>
        <h3>Notesa App</h3>
      </div>
      <div class="icon2 pr-3">
        <router-link to="/auth/login"><i class="fas fa-sign-out-alt"></i></router-link>
      </div>
    </div>
    <search-box class="search"></search-box>
    <div class="chat-list">
      <chat name="Ady Rahmansyah Bismillah" message="Hello World!" @click="activeChat" />
      <chat name="Ahmad Rusyaid" message="Baca Bismillah dari grup sebelah" @click="activeChat"  />
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/SearchBox.vue'
import chat from '@/components/Chat.vue'

export default {
  name: 'Sidebar',
  components: {
    'search-box': searchBox,
    chat
  },
  methods: {
    activeChat () {
      const chat = document.querySelector('.chat')
      chat.classList.toggle('active')
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar{
    height: 100vh;
    border-right: 2px solid #3B6978;
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
    border-bottom: 2px solid #3B6978;
  }
  .active{
    background-color: #CAE8D5;
  }
</style>
