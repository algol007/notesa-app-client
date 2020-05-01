<template>
  <div class="chat-box">
    <receiver receiver="Haloo" />
    <sender v-for="chat in userChat" :key="chat.id" :sender="chat.message" />
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
    ...mapActions('chat', ['getAllUserChats'])
  },
  computed: {
    ...mapState('chat', ['userChat']),
    ...mapState('user', ['user'])
  },
  mounted () {
    const items = JSON.parse(localStorage.getItem('items'))
    // console.log(items.id)
    this.getAllUserChats(items.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
