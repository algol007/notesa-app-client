<template>
  <div class="send-box px-5">
    <input class="message-send appearance-none rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none rounded-full" id="username" type="text" placeholder="Type a message" v-model="message">
    <div class="send-button ml-2 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-full focus:outline-none focus:shadow-outline" @click="sendChat">
      <i class="fas fa-paper-plane"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SendBox',
  data () {
    return {
      message: null,
      room: null
    }
  },
  methods: {
    ...mapActions('chat', ['getUserChat']),
    sendChat () {
      axios
        .post(process.env.VUE_APP_BASE_URL + 'chat', {
          userId: this.user.id,
          message: this.message,
          room: this.room
        })
        .then(res => {
          console.log(res)
          const input = document.querySelector('.message-send')
          input.value = ''
          this.getUserChat()
        })
    }
  },
  mounted () {
    this.room = this.user.id + this.userC.id
    // console.log(this.room)
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('chat', ['userC'])
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
