<template>
  <div class="chat-box">
    <div class="no-chats" v-if="chats[0] === 0">
    </div>
    <div class="chat-body" v-for="chat in chats" :key="chat.id + '-chat'" v-else>
      <receiver v-if="chat.userId !== chatId" :message="chat.message" />
      <sender :message="chat.message" v-else />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
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
      receivers: null,
      room: null,
      chatId: null
    }
  },
  methods: {
    myChat () {
      const items = JSON.parse(localStorage.getItem('items'))
      this.chatId = items.id
      // console.log(this.chatId)
    },
    ...mapActions('chat', ['getUserChat'])
  },
  computed: {
    ...mapState('chat', ['userC']),
    ...mapState('chat', ['chats']),
    ...mapState('user', ['user']),
    ...mapGetters('chat', ['senderChat'])
  },
  created () {
    this.room = this.user.id + this.userC.id
    this.myChat()
    this.getUserChat(this.room)
  }
}
</script>

<style lang="scss" scoped>
  .chat-box{
    padding: 60px 0 50px;
  }
</style>
