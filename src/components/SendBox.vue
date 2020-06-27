<template>
  <form class="send-box px-5" @submit="sendChat">
    <input class="message-send appearance-none rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none rounded-full" id="username" type="text" placeholder="Type a message" v-model="message">
    <div class="send-button ml-2 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-full focus:outline-none focus:shadow-outline">
      <i class="fas fa-paper-plane"></i>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import db from '../firebaseInit'

export default {
  name: 'SendBox',
  data () {
    return {
      message: '',
      room: ''
    }
  },
  methods: {
    sendChat (e) {
      e.preventDefault()
      db.collection('chats').add({
        message: this.message,
        sender: this.user.email,
        receiver: this.receiver.email,
        createdAt: new Date()
      })
      this.message = ''
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('chat', ['receiver'])
  }
}
</script>

<style lang="scss" scoped>
  .send-box{
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-right: 290px;
  }
  input{
    border: 2px solid #3B6978;
  }
  .send-button{
    background-color: #3B6978;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .send-box{
      display: none;
    }
  }
</style>
