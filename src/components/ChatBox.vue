<template>
  <div class="chat-box">
    <div class="no-chats" v-if="chats[0] === 0">
    </div>
    <div class="chat-body" v-for="chat in chats" :key="chat.id" v-else>
      <receiver :message="chat.message" v-if="chat.sender !== user.email" />
      <sender :message="chat.message"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import receiver from '@/components/Receiver.vue'
import sender from '@/components/Sender.vue'

export default {
  name: 'ChatBox',
  components: {
    receiver,
    sender
  },
  methods: {
    ...mapActions('chat', ['showChat'])
  },
  computed: {
    ...mapState('chat', ['receiver', 'chats']),
    ...mapState('user', ['user'])
  },
  mounted () {
    this.showChat({ receiver: this.receiver, sender: this.user })
  }
}
</script>

<style lang="scss" scoped>
  .chat-box{
    padding: 60px 0 50px;
  }
</style>
