<template>
  <div class="chat-box">
    <receiver v-for="receiver in receivers" :key="receiver.id + '-receiver'" :message="receiver.message" />
    <sender v-for="send in sender" :key="send.id" :message="send.message" />
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import receiver from '@/components/Receiver.vue'
import sender from '@/components/Sender.vue'

export default {
  name: 'ChatBox',
  components: {
    receiver,
    sender
  },
  data () {
    return {
      sender: null,
      receivers: null
    }
  },
  methods: {
    send () {
      axios
        .get(process.env.VUE_APP_BASE_URL + `chat/user/${this.user.id}`)
        .then(res => {
          this.sender = res.data.chat.rows
          // console.log(this.sender)
        })
    },
    getChat () {
      axios
        .get(process.env.VUE_APP_BASE_URL + `chat/user/${this.user.id}`)
        .then(res => {
          this.receivers = res.data.chat.rows
          console.log(this.receivers)
        })
    }
  },
  computed: {
    ...mapState('chat', ['userChat']),
    ...mapState('user', ['user'])
  },
  mounted () {
    this.send()
    this.getChat()
    // const items = JSON.parse(localStorage.getItem('items'))
    // console.log(items.id)
    // this.getAllUserChats(items.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
