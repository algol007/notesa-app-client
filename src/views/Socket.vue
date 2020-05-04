<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5 bg-gray-400">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
              <h3>Chat Group</h3>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="px-6 py-4">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group mb-3">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control py-1 w-full rounded px-2">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control py-3 w-full rounded px-2">
              </div>
              <button type="submit" class="bg-white py-2 px-3 rounded outline-none">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('http://192.168.1.97:5000')
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message
      })
      this.message = ''
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data]
      // you can also do this.messages.push(data)
    })
  }
}
</script>

<style lang="scss" scoped>
  .cards{
    width: 500px;
    border: 1px solid #eaeaea;
    background-color: teal;
  }
</style>
